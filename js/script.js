// function([string1, string2],target id,[color1,color2])
consoleText(["CertusHack"], "text", ["#8A0026", "#FFFFFF", "#FFD700"]);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ["#fff"];
  var visible = true;
  var con = document.getElementById("console");
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id);
  target.setAttribute("style", "color:" + colors[0]);
  window.setInterval(function () {
    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount);
      window.setTimeout(function () {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute("style", "color:" + colors[0]);
        letterCount += x;
        waiting = false;
      }, 1000);
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function () {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000);
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount);
      letterCount += x;
    }
  }, 120);
  window.setInterval(function () {
    if (visible === true) {
      con.className = "console-underscore hidden";
      visible = false;
    } else {
      con.className = "console-underscore";

      visible = true;
    }
  }, 400);
}

document.getElementById("toggleButton").addEventListener("click", function () {
  var menu = document.getElementById("mobile-menu-2");
  var nav = document.getElementById("nav");
  if(nav) nav.classList.toggle("activado")
  menu.classList.toggle("hidden");
  menu.classList.toggle("backdrop-blur-[4px]");
 });
 
 // Close the navigation bar when clicking outside of it
 document.addEventListener('click', function(event) {
     var clickover = event.target;
     var mobileMenu = document.getElementById("mobile-menu-2");
     var toggleButton = document.getElementById("toggleButton");
     var _opened = mobileMenu.classList.contains("hidden");
     if (!clickover.closest('#toggleButton') && !clickover.closest('#mobile-menu-2') && _opened === false) {
         toggleButton.click();
     }
 });
 

window.onload = function () {
  setTimeout(function () {
    var card = document.querySelector(".carde");
    if (card) card.classList.add("animate");
  }, 2000); // Cambia la tarjeta después de 2 segundos
};
