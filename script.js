function changeImage() {
    var image = document.getElementById('myImage');
    if (image.src.match("bulbon")) {
      image.src = "/bulb1.gif";
    } else {
      image.src = "/bulb2.gif";
    }
  }