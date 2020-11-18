// UWAGA, TEN KOD TO KOMPLETNY ŚMIETNIK, ROBIŁEM TO W CZERWCU 2016 GDY NIE MIAŁEM JESZCZE PRAKTYCZNIE POJĘCIA O JS

var score = 0;
var round = 1;

var images = [
  '<img src="images/gameimages/rose.jpg">',
  '<img src="images/gameimages/tolliver.jpg">',
  '<img src="images/gameimages/jeff.jpg">',
  '<img src="images/gameimages/roco.jpg">',
  '<img src="images/gameimages/taj.jpg">',
  '<img src="images/gameimages/gorgui.jpg">',
  '<img src="images/gameimages/garnett.png">',
];

function good() {
  score = score + 1;
  round = round + 1;
  game();
}

function bad() {
  round = round + 1;
  game();
}

function game() {
  if (round == 1) {
    document.getElementById("gamepanel").innerHTML = images[0];
    document.getElementById("choicebutton1").innerHTML = "Derrick Rose";
    document.getElementById("choicebutton1").setAttribute("onclick", "good()");
    document.getElementById("choicebutton2").innerHTML = "Ed Davis";
    document.getElementById("choicebutton2").setAttribute("onclick", "bad()");
    document.getElementById("choicebutton3").innerHTML = "DeMarcus Cousins";
    document.getElementById("choicebutton3").setAttribute("onclick", "bad()");
    document.getElementById("choicebutton4").innerHTML = "Deytona Davis";
    document.getElementById("choicebutton4").setAttribute("onclick", "bad()");
  } else if (round == 2) {
    document.getElementById("gamepanel").innerHTML = images[1];
    document.getElementById("choicebutton1").innerHTML = "Trevor Ariza";
    document.getElementById("choicebutton1").setAttribute("onclick", "bad()");
    document.getElementById("choicebutton2").innerHTML = "Mo Bamba";
    document.getElementById("choicebutton2").setAttribute("onclick", "bad()");
    document.getElementById("choicebutton3").innerHTML = "J. J. Barea";
    document.getElementById("choicebutton3").setAttribute("onclick", "bad()");
    document.getElementById("choicebutton4").innerHTML = "Anthony Tolliver";
    document.getElementById("choicebutton4").setAttribute("onclick", "good()");
  } else if (round == 3) {
    document.getElementById("gamepanel").innerHTML = images[2];
    document.getElementById("choicebutton1").innerHTML = "Khem Birch";
    document.getElementById("choicebutton1").setAttribute("onclick", "bad()");
    document.getElementById("choicebutton2").innerHTML = "Isaac Bonga";
    document.getElementById("choicebutton2").setAttribute("onclick", "bad()");
    document.getElementById("choicebutton3").innerHTML = "Devin Booker";
    document.getElementById("choicebutton3").setAttribute("onclick", "bad()");
    document.getElementById("choicebutton4").innerHTML = "Jeff Teague";
    document.getElementById("choicebutton4").setAttribute("onclick", "good()");
  } else if (round == 4) {
    document.getElementById("gamepanel").innerHTML = images[3];
    document.getElementById("choicebutton1").innerHTML = "Kris Dunn";
    document.getElementById("choicebutton1").setAttribute("onclick", "bad()");
    document.getElementById("choicebutton2").innerHTML = "Bruce Brown";
    document.getElementById("choicebutton2").setAttribute("onclick", "bad()");
    document.getElementById("choicebutton3").innerHTML = "Stephen Curry";
    document.getElementById("choicebutton3").setAttribute("onclick", "bad()");
    document.getElementById("choicebutton4").innerHTML = "Robert Covington";
    document.getElementById("choicebutton4").setAttribute("onclick", "good()");
  } else if (round == 5) {
    document.getElementById("gamepanel").innerHTML = images[4];
    document.getElementById("choicebutton1").innerHTML = "Jacob Evans";
    document.getElementById("choicebutton1").setAttribute("onclick", "bad()");
    document.getElementById("choicebutton2").innerHTML = "Taj Gibson";
    document.getElementById("choicebutton2").setAttribute("onclick", "good()");
    document.getElementById("choicebutton3").innerHTML = "Bryn Forbes";
    document.getElementById("choicebutton3").setAttribute("onclick", "bad()");
    document.getElementById("choicebutton4").innerHTML = "Yogi Ferrell";
    document.getElementById("choicebutton4").setAttribute("onclick", "bad()");
  } else if (round == 6) {
    document.getElementById("gamepanel").innerHTML = images[5];
    document.getElementById("choicebutton1").innerHTML = "Gorgui Dieng";
    document.getElementById("choicebutton1").setAttribute("onclick", "good()");
    document.getElementById("choicebutton2").innerHTML = "Devin Harris";
    document.getElementById("choicebutton2").setAttribute("onclick", "bad()");
    document.getElementById("choicebutton3").innerHTML = "Rodney Hood";
    document.getElementById("choicebutton3").setAttribute("onclick", "bad()");
    document.getElementById("choicebutton4").innerHTML = "RJ Hunter";
    document.getElementById("choicebutton4").setAttribute("onclick", "bad()");
  } else if (round == 7) {
    document.getElementById("gamepanel").innerHTML = images[6];
    document.getElementById("choicebutton1").innerHTML = "JaVale McGee";
    document.getElementById("choicebutton1").setAttribute("onclick", "bad()");
    document.getElementById("choicebutton2").innerHTML = "Omae Wa";
    document.getElementById("choicebutton2").setAttribute("onclick", "bad()");
    document.getElementById("choicebutton3").innerHTML = "Kevin Garnett";
    document.getElementById("choicebutton3").setAttribute("onclick", "good()");
    document.getElementById("choicebutton4").innerHTML = "Mou Shindeiru";
    document.getElementById("choicebutton4").setAttribute("onclick", "bad()");
  } else if (round == 8) {
    document.getElementById("choicebutton1").style.display = "none";
    document.getElementById("choicebutton2").style.display = "none";
    document.getElementById("choicebutton3").style.display = "none";
    document.getElementById("choicebutton4").style.display = "none";
    document.getElementById("gamepanel").innerHTML =
      "Twój wynik to " + score + "/7 punktów!";
  }
}

function start() {
  document.getElementById("startbutton").style.display = "none";
  document.getElementById("container").innerHTML +=
    '<div id="choicebutton1" onclick=""></div> <div id="choicebutton2" onclick=""></div> <div id="choicebutton3" onclick=""></div> <div id="choicebutton4" onclick=""></div>';
  game();
}
