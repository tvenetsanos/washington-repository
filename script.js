document.getElementById("link").onmouseover = function() {mouseOver()};
document.getElementById("link").onmouseout = function() {mouseOut()};

function mouseOver() {
  document.getElementById("link").style.color = "red";
}

function mouseOut() {
  document.getElementById("link").style.color = "black";
}

document.getElementById("test").onmouseover = function() {mouseOver()};
document.getElementById("test").onmouseout = function() {mouseOut()};

function mouseOver() {
  document.getElementById("test").style.color = "yellow";
}

function mouseOut() {
  document.getElementById("test").style.color = "black";
}

