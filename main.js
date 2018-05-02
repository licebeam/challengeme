var curgame;
$("#gamebutton1").click(function() {
  changeGame("Slay The Spire");
  alert($(".gameName").text());
  curgame = slay;
});

$("#gamebutton2").click(function() {
  changeGame("Fortnite");
  alert($(".gameName").text());
  curgame = fort;
});

function changeGame(name) {
  $(".gameName").text("");
  $(".gameName").text(name);
  $(".chal1Text").text("Waiting for Roll");
  $(".chal2Text").text("Waiting for Roll");
  $(".chal3Text").text("Waiting for Roll");
  $(".chal1name").text("");
  $(".chal2name").text("");
  $(".chal3name").text("");
  $(".chal1dif").text("");
  $(".chal2dif").text("");
  $(".chal3dif").text("");
}
$("#roll1").click(function() {
  randomChal1(curgame);
});
$("#roll2").click(function() {
  randomChal2(curgame);
});
$("#roll3").click(function() {
  randomChal3(curgame);
});
function randomChal1(ng) {
  randomEvent(".chal1", ng);
}
function randomChal2(ng) {
  randomEvent(".chal2", ng);
}
function randomChal3(ng) {
  randomEvent(".chal3", ng);
}
function randomEvent(box, gamenum) {
  var rando = Math.floor(Math.random() * 4 + 0);
  $(box + "name").text(gamenum[rando].Name);
  $(box + "dif").text(gamenum[rando].Rarity);
  $(box + "Text").text(gamenum[rando].Description);

  if (gamenum[rando].Rarity == "Easy") {
    $(box + "dif").css("color", "green");
  }
  if (gamenum[rando].Rarity == "Medium") {
    $(box + "dif").css("color", "orange");
  }
  if (gamenum[rando].Rarity == "Hard") {
    $(box + "dif").css("color", "red");
  }
}
