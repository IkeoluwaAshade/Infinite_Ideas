var images = [
  "../images/infinite-ideas2.jfif",
  "../images/infinite-ideas3.jfif",
  "../images/infinite-ideas4.jfif"
];
var num =0;

function next () {
  var slider =
  document.getElementById("slider")
  num++;
  if (num >= images.length) {
    num = 0;
  }
  slider.src = images[num];
}

function Prev() {
  var slider =
  document.getElementById("slider");
  num--;
  if(num < 0){
    num = images.length-1;
  }
  slider.src = images[num];
}
