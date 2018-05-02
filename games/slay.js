if (dataSet === "Slay The Spire") {
  var challenges = [
    {
      Name: "Stress Test",
      Rarity: "Easy",
      Description: "You cannot use potions for this run."
    },
    {
      Name: "Site Specific",
      Rarity: "Easy",
      Description: "You can only heal at rest sites."
    },
    {
      Name: "Buyer Beware",
      Rarity: "Medium",
      Description: "You cannot use the shop more than once this run."
    },
    {
      Name: "Danger Dive",
      Rarity: "Hard",
      Description: "You must fight every Elite possible on this run."
    }
  ];

  function randomChal1() {
    randomEvent(".chal1");
  }
  function randomChal2() {
    randomEvent(".chal2");
  }
  function randomChal3() {
    randomEvent(".chal3");
  }
  function randomEvent(box) {
    var rando = Math.floor(Math.random() * 4 + 0);
    $(box + "name").text(challenges[rando].Name);
    $(box + "dif").text(challenges[rando].Rarity);
    $(box + "Text").text(challenges[rando].Description);

    if (challenges[rando].Rarity == "Easy") {
      $(box + "dif").css("color", "green");
    }
    if (challenges[rando].Rarity == "Medium") {
      $(box + "dif").css("color", "orange");
    }
    if (challenges[rando].Rarity == "Hard") {
      $(box + "dif").css("color", "red");
    }
  }
}
