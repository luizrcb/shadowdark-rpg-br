const MODULE_ID = 'shadowdark-rpg-br'; // Change this ID!

// No need to change the code below this line, but it’s your module so do it if you want!

Hooks.on('init', () => {
  game.settings.register(MODULE_ID, 'autoRegisterBabel', {
    name: "Ativação automática de tradução via Babele",
    hint: "Implementa automaticamente as traduções do Babele sem a necessidade de designar o diretório que contém as traduções.",
    scope: 'world',
    config: true,
    default: true,
    type: Boolean,
    onChange: value => {
      if (value) {
        autoRegisterBabel();
      }

      window.location.reload();
    },
  });

  if (game.settings.get(MODULE_ID, 'autoRegisterBabel')) {
    autoRegisterBabel();
  }
});

function autoRegisterBabel() {
  if (typeof Babele !== 'undefined') {
    game.babele.register({
      module: MODULE_ID,
      lang: 'pt-BR',
      dir: 'compendium/pt-BR',
    });
  }
}

/*
* IMPORT ADVENTURE HOOK
*/
Hooks.on("importAdventure", async (adventure) => {
  ui.notifications.notify("Importation encours ! Merci d'attendre la fin de l'importation de toutes les scènes !", {
    permanent: true
  });
  
  let updates = [];
  
  for (let scene of adventure.scenes) {
    let sceneId = scene._id;
    let sceneImported = game.scenes.get(sceneId);
    const { thumb } = await sceneImported.createThumbnail();
    updates.push({
      _id: scene.id,
      thumb
    });
  }
  Scene.updateDocuments(updates);
});

