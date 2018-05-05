var curgame;

curgame = slay;
$("#gamebutton1").click(function() {
  changeGame("Slay The Spire");
  curgame = slay;
});

$("#gamebutton2").click(function() {
  changeGame("Fortnite");
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
  $("#roll1").text("Roll");
  $("#roll2").text("Roll");
  $("#roll3").text("Roll");
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
  $("#roll1").text("Re-Roll?");
}
function randomChal2(ng) {
  randomEvent(".chal2", ng);
  $("#roll2").text("Re-Roll?");
}
function randomChal3(ng) {
  randomEvent(".chal3", ng);
  $("#roll3").text("Re-Roll?");
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

$("#reset").click(function() {
  $(".chal1Text").text("Waiting for Roll");
  $(".chal2Text").text("Waiting for Roll");
  $(".chal3Text").text("Waiting for Roll");
  $(".chal1name").text("");
  $(".chal2name").text("");
  $(".chal3name").text("");
  $(".chal1dif").text("");
  $(".chal2dif").text("");
  $(".chal3dif").text("");
  $("#roll1").text("Roll");
  $("#roll2").text("Roll");
  $("#roll3").text("Roll");
});

//auth and stuff
var signedOut;
$("#homeButton").click(function() {
  window.location.href = "index.html";
});
$("#signoutButton").click(function() {
  if (signedOut != true) {
    firebase
      .auth()
      .signOut()
      .then(
        function() {
          console.log("Signed Out");
          $("signoutButton").addClass("signedOut");

          signedOut = true;
        },
        function(error) {
          console.error("Sign Out Error", error);
        }
      );
  }
});
$("#signoutButton").click(function() {
  if (signedOut === true) {
    window.location.href = "login.html";
    $("#signoutButton").removeClass(".signedOut");
    signedOut = false;
  }
});

$("#updateName").click(function() {
  var user = firebase.auth().currentUser;

  user
    .updateProfile({
      displayName: $("#nameUpdater").val() //THIS NEEDS TO BE VALIDATED FOR INJECTION
    })
    .then(function() {
      // Update successful.
    })
    .catch(function(error) {
      // An error happened.
    });
});
