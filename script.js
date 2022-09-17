function changeImage() {
    var image = document.getElementById('myImage');
    if (image.src.match("bulbon")) {
      image.src = "/images/bulb1.gif";
    } else {
      image.src = "";
    }
  }