if ($(".gameName").text("Fortnite")) {
  var challenges1 = [
    {
      Name: "Test",
      Rarity: "Easy",
      Description: "You cannot use potions for this run."
    },
    {
      Name: "Test",
      Rarity: "Easy",
      Description: "You can only heal at rest sites."
    },
    {
      Name: "test",
      Rarity: "Medium",
      Description: "You cannot use the shop more than once this run."
    },
    {
      Name: "test",
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
    $(box + "name").text(challenges1[rando].Name);
    $(box + "dif").text(challenges1[rando].Rarity);
    $(box + "Text").text(challenges1[rando].Description);

    if (challenges1[rando].Rarity == "Easy") {
      $(box + "dif").css("color", "green");
    }
    if (challenges1[rando].Rarity == "Medium") {
      $(box + "dif").css("color", "orange");
    }
    if (challenges1[rando].Rarity == "Hard") {
      $(box + "dif").css("color", "red");
    }
  }
} else {
  //alert("not slay");
}
