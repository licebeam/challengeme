$(document).ready(function() {
  $("#gamebutton1").click(function() {
    changeGame("Slay The Spire");
    alert($(".gameName").text());
  });

  $("#gamebutton2").click(function() {
    changeGame("Fortnite");
    alert($(".gameName").text());
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
});
