var curgame;

var save1 = ["Hello"];
var save2 = ["Hello"];
var save3 = ["Hello"];
var counter1 = false;
var counter2 = false;
var counter3 = false;
curgame = slay;
$("#gamebutton1").click(function() {
  localStorage.setItem("game", "Slay The Spire");
  changeGame("Slay The Spire");
  curgame = slay;
});

$("#gamebutton2").click(function() {
  localStorage.setItem("game", "Fortnite");
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
  loadGame(localStorage.getItem("game"));
}
$("#roll1").click(function() {
  counter1 = true;
  randomChal1(curgame);
});
$("#roll2").click(function() {
  counter2 = true;
  randomChal2(curgame);
});
$("#roll3").click(function() {
  counter3 = true;
  randomChal3(curgame);
});
function randomChal1(ng) {
  randomEvent(".chal1", ng, save1);
  $("#roll1").text("Re-Roll?");
}
function randomChal2(ng) {
  randomEvent(".chal2", ng, save2);
  $("#roll2").text("Re-Roll?");
}
function randomChal3(ng) {
  randomEvent(".chal3", ng, save3);
  $("#roll3").text("Re-Roll?");
}

function randomEvent(box, gamenum, save) {
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

  save[0] = $(box + "name").text();
  save[1] = $(box + "dif").text();
  save[2] = $(box + "Text").text();
}
$("#saveIt").click(function() {
  saveData(localStorage.getItem("game"));
});
function saveData(game) {
  if (counter1 && counter2 && counter3 === true) {
    localStorage.setItem(game + "data", "true");
    localStorage.setItem(game + "chal1-1", save1[0]);
    localStorage.setItem(game + "chal1-2", save1[1]);
    localStorage.setItem(game + "chal1-3", save1[2]);
    localStorage.setItem(game + "chal2-1", save2[0]);
    localStorage.setItem(game + "chal2-2", save2[1]);
    localStorage.setItem(game + "chal2-3", save2[2]);
    localStorage.setItem(game + "chal3-1", save3[0]);
    localStorage.setItem(game + "chal3-2", save3[1]);
    localStorage.setItem(game + "chal3-3", save3[2]);
    alert("Saved data for " + game);
  } else {
    alert("Please make sure to roll all slots");
  }
}
function loadGame(game) {
  if (localStorage.getItem(game + "data") === "true") {
    $("#roll1").text("Re-Roll?");
    $("#roll2").text("Re-Roll?");
    $("#roll3").text("Re-Roll?");
    $(".chal1name").text(localStorage.getItem(game + "chal1-1"));
    $(".chal1dif").text(localStorage.getItem(game + "chal1-2"));
    $(".chal1Text").text(localStorage.getItem(game + "chal1-3"));
    $(".chal2name").text(localStorage.getItem(game + "chal2-1"));
    $(".chal2dif").text(localStorage.getItem(game + "chal2-2"));
    $(".chal2Text").text(localStorage.getItem(game + "chal2-3"));
    $(".chal3name").text(localStorage.getItem(game + "chal3-1"));
    $(".chal3dif").text(localStorage.getItem(game + "chal3-2"));
    $(".chal3Text").text(localStorage.getItem(game + "chal3-3"));

    //change colors
    if (localStorage.getItem(game + "chal1-2") === "Easy") {
      $(".chal1dif").css("color", "green");
    }
    if (localStorage.getItem(game + "chal2-2") === "Easy") {
      $(".chal2dif").css("color", "green");
    }
    if (localStorage.getItem(game + "chal3-2") === "Easy") {
      $(".chal3dif").css("color", "green");
    }
    if (localStorage.getItem(game + "chal1-2") === "Medium") {
      $(".chal1dif").css("color", "orange");
    }
    if (localStorage.getItem(game + "chal2-2") === "Medium") {
      $(".chal2dif").css("color", "orange");
    }
    if (localStorage.getItem(game + "chal3-2") === "Medium") {
      $(".chal3dif").css("color", "orange");
    }
    if (localStorage.getItem(game + "chal1-2") === "Hard") {
      $(".chal1dif").css("color", "red");
    }
    if (localStorage.getItem(game + "chal2-2") === "Hard") {
      $(".chal2dif").css("color", "red");
    }
    if (localStorage.getItem(game + "chal3-2") === "Hard") {
      $(".chal3dif").css("color", "red");
    }
  } else if (localStorage.getItem(game + "data") === "false") {
    $("#roll1").text("Roll");
    $("#roll2").text("Roll");
    $("#roll3").text("Roll");
    counter1 = false;
    counter2 = false;
    counter3 = false;
  }
}
$("#reset").click(function() {
  resetData(localStorage.getItem("game"));
});
function resetData(game) {
  //reset save data
  counter1 = false;
  counter2 = false;
  counter3 = false;
  $(".chal1name").text(localStorage.removeItem(game + "chal1-1"));
  $(".chal1dif").text(localStorage.removeItem(game + "chal1-2"));
  $(".chal1Text").text(localStorage.removeItem(game + "chal1-3"));
  $(".chal2name").text(localStorage.removeItem(game + "chal2-1"));
  $(".chal2dif").text(localStorage.removeItem(game + "chal2-2"));
  $(".chal2Text").text(localStorage.removeItem(game + "chal2-3"));
  $(".chal3name").text(localStorage.removeItem(game + "chal3-1"));
  $(".chal3dif").text(localStorage.removeItem(game + "chal3-2"));
  $(".chal3Text").text(localStorage.removeItem(game + "chal3-3"));
  alert("Reset data for " + game);
  localStorage.setItem(game + "data", "false");
  //
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
$("#homeButton").click(function() {
  //signed in input
  window.location.href = "index.html";
});

$("#signoutButton").click(function() {
  firebase
    .auth()
    .signOut()
    .then(
      function() {
        console.log("Signed Out");
        window.location.href = "index.html";
      },
      function(error) {
        console.error("Sign Out Error", error);
      }
    );
});

$("#signinButton").click(function() {
  //signed in input
  window.location.href = "login.html";
});

$("#homeButton").click(function() {
  window.location.href = "index.html";
});

///ACCOUNT DATA SAVING
function writeToAccount(game) {
  if ($("#userName").text() != "") {
    //complete updates
    db
      .collection("completes")
      .doc($("#userName").text() + "comp")
      .set({
        user: $("#userName").text(),
        completes: 1
      })
      .then(function(docRef) {
        console.log("added to database");
        alert("Updated Completes");
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
        alert("Error Updating");
      });
    db
      .collection("completes")
      .doc($("#userName").text() + "comp")
      .update({
        completes: +1
      })
      .then(function(docRef) {
        console.log("added to database");
        alert("Challenge Complete and Added to Account");
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
        alert("Error add Completes");
      });
    //query the completes document

    //add to database our data
    db
      .collection("userdata")
      .doc($("#userName").text())
      .set({
        user: $("#userName").text(),
        game: game,

        challenge1name: $(".chal1name").text(),
        challenge1dif: $(".chal1dif").text(),
        challenge1txt: $(".chal1Text").text(),
        challenge2name: $(".chal2name").text(),
        challenge2dif: $(".chal2dif").text(),
        challenge2txt: $(".chal2Text").text(),
        challenge3name: $(".chal3name").text(),
        challenge3dif: $(".chal3dif").text(),
        challenge3txt: $(".chal3Text").text()
      })
      .then(function(docRef) {
        console.log("added to database");
        alert("Challenge Complete and Added to Account");
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
        alert("You must be logged in to do this");
      });
  } else {
    alert("incorrect user name");
  }
}
$("#saveChallengeAccount").click(function() {
  testDataforSave(localStorage.getItem("game"));
});
function testDataforSave(game) {
  if (localStorage.getItem(game + "data") === "true") {
    writeToAccount(localStorage.getItem("game"));
  } else if (localStorage.getItem(game + "data") === "false") {
    alert("No Empty Challenges Please");
  }
}
