Hooks.on('diceSoNiceReady', (dice3d) => {
  dice3d.addSystem({id: "darkmode", name: "☑ ShadowDice Dark Mode"}, "preferred");

  dice3d.addDicePreset({
    type:"dc",
    labels:[
      "modules/shadowdark-rpg-br/ui/dice/basic/1-fumble.webp",
      "modules/shadowdark-rpg-br/ui/dice/basic/20-nat.webp"
    ],
  system:"darkmode"
  }); 

  dice3d.addDicePreset({
    type:"d6",
    labels:[
      "modules/shadowdark-rpg-br/ui/dice/basic/1-fumble.webp",
      "2",
      "3",
      "4",
      "5",
      "modules/shadowdark-rpg-br/ui/dice/basic/20-nat.webp"
    ],
  system:"darkmode"
  });  

  dice3d.addDicePreset({
    type:"d8",
    labels:[
      "modules/shadowdark-rpg-br/ui/dice/basic/1-fumble.webp",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "modules/shadowdark-rpg-br/ui/dice/basic/20-nat.webp"
    ],
  system:"darkmode"
  });  

  dice3d.addDicePreset({
    type: "d12",
    labels: [
      "modules/shadowdark-rpg-br/ui/dice/basic/1-fumble.webp",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "modules/shadowdark-rpg-br/ui/dice/basic/20-nat.webp"
    ],
    system: "darkmode"
  });

  dice3d.addDicePreset({
    type: "d20",
    labels: [
      "modules/shadowdark-rpg-br/ui/dice/basic/1-fumble.webp",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "modules/shadowdark-rpg-br/ui/dice/basic/20-nat.webp"
    ],
    system: "darkmode"
  });

      dice3d.addColorset({
      name: 'darkmode',
        description: "☑ ShadowDice Dark Mode",
        category: "ShadowDark",
        background: '#000000',
        material: 'stone',
        font: 'JSL Blackletter',
        fontScale:{
          "dc":3,
          "d2":3,
          "d4":1.5,
          "d6":2,
          "d8":1.5,
          "d10":1.2,
          "d12":1.5,
          "d20":1.3,
          "d3":1.3,
          "d5":1,
          "df":2.5,
          "d100":1.1       
       },      
        foreground: "#ffffff",
        outline: '#a546b6',
        edge: "#000000",
        visibility: 'visible'
      },"preferred");    
});
