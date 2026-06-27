import { Converters } from "./../babele/script/converters.js";

const MODULE_ID = "shadowdark-rpg-br";

Hooks.on("init", () => {
  if (typeof Babele === "undefined") {
    return;
  }

  game.babele.register({
    module: MODULE_ID,
    lang: "pt-BR",
    dir: "compendium/pt-BR",
  });

  game.babele.registerConverters({
    fromPackWithCustomMapping: Converters.fromPack({
      description: "system.description",
      special: "system.damage.special",
    }),
    effectCollection: function (collection, translations) {
      for (const name in translations) {
        const effect = collection.find(
          (element) => element.name === name || element._id === name,
        );
        if (!effect) continue;
        for (const property in translations[name]) {
          effect[property] = translations[name][property];
        }
      }

      return collection;
    },
  });
});

Hooks.on("ready", () => {
  function universalHasProperty(property) {
    const propertyItems = [];
    for (const uuid of this.properties ?? []) {
      propertyItems.push(fromUuidSync(uuid));
    }

    const propSlug = (property || "").slugify();

    const propertyItem = propertyItems.find((p) => {
      if (!p) return false;
      const engName =
        p.originalName || p.flags?.babele?.originalName || p.name || "";
      return (
        engName.slugify() === propSlug || (p.name || "").slugify() === propSlug
      );
    });

    return propertyItem ? true : false;
  }

  if (CONFIG.Item.dataModels.Weapon) {
    CONFIG.Item.dataModels.Weapon.prototype.hasProperty = universalHasProperty;
  }
  if (CONFIG.Item.dataModels.Armor) {
    CONFIG.Item.dataModels.Armor.prototype.hasProperty = universalHasProperty;
  }
});

/*
 * IMPORT ADVENTURE HOOK
 */
Hooks.on("importAdventure", async (adventure) => {
  ui.notifications.notify(
    "Importation encours ! Merci d'attendre la fin de l'importation de toutes les scènes !",
    {
      permanent: true,
    },
  );

  let updates = [];

  for (let scene of adventure.scenes) {
    let sceneId = scene._id;
    let sceneImported = game.scenes.get(sceneId);
    const { thumb } = await sceneImported.createThumbnail();
    updates.push({
      _id: scene.id,
      thumb,
    });
  }
  Scene.updateDocuments(updates);
});

function renderSettings(html) {
  if (game.i18n.lang !== "pt-BR") return;
  const version = game.modules.get("shadowdark-rpg-br")?.version;
  const modulo = document.createElement("div");
  modulo.classList.add("modules");
  modulo.innerHTML = `
    <span class="label">Shadowdark RPG BR</span>
    <span class="value">${version}</span>
  `;

  const section = document.createElement("div");
  section.innerHTML = `
    <a href="https://github.com/luizrcb/shadowdark-rpg-br/issues" target="_blank">Reportar Erro de Tradução do Shadowdark</a>
  `;
  html.querySelector(".info").insertAdjacentElement("beforeend", modulo);
  html.querySelector(".info").insertAdjacentElement("beforeend", section);
}

Hooks.on("renderSettings", (app, html) => renderSettings(html));
