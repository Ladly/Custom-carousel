var displayImages = document.getElementById("display-images");
var previous = document.getElementById("prev");
var next = document.getElementById("next");

var images = [];
var displayImages = document.getElementById("display-images");
var previous = document.getElementById("prev");
var next = document.getElementById("next");

var Image = function(id, src, alt, height) {
  this.id = id;
  this.src = src;
  this.alt = alt;
  this.height = "200px"; // all images same height
};

var jsCertificate = new Image(
  1,
  "http://i63.tinypic.com/5uqwet.jpg",
  "Javascript certificate"
  );
var htmlCertificate = new Image(
  2,
  "http://i67.tinypic.com/t819xg.jpg",
  "html certificate"
  );
var cssCertificate = new Image(
  3,
  "http://i65.tinypic.com/nffklk.jpg",
  "css certificate"
  );
var jqueryCertificate = new Image(
  4,
  "http://i66.tinypic.com/2qx9swi.jpg",
  "jquery certificate"
  );
var codecademy = new Image(
  5,
  "http://i64.tinypic.com/20p3qk4.jpg",
  "codecademy"
  );

images.push(
  jsCertificate,
  htmlCertificate,
  cssCertificate,
  jqueryCertificate,
  codecademy
  );

var ImageCounter = 0;

function slideIt(counter, arr) {
  function followUpImage(counter, arr) {
    var slideImageSrc = arr[counter].src;
    var slideImageAlt = arr[counter].alt;
    var slideImageHeight = arr[counter].height;
    displayImages.innerHTML =
    "<img src=" +
    slideImageSrc +
    " alt=" +
    slideImageAlt +
    " style=height:" +
    slideImageHeight +
    " />";

    
    if (counter === arr.length - 1) {
      next.setAttribute("class", "slider-buttons disabled");
    } else if (counter === 0) {
      previous.setAttribute("class", "slider-buttons disabled");
    } else {
      next.setAttribute('class', 'slider-buttons')
      previous.setAttribute('class', 'slider-buttons')
    }
  }

  followUpImage(counter, arr);

  next.addEventListener("click", function() {
    if (counter === arr.length - 1) {
      return false;
    } else {
      counter++;
      followUpImage(counter, arr);
    }
  });

  previous.addEventListener("click", function() {
    if (counter <= 0) {
      return false;
    } else {
      counter--;
      followUpImage(counter, arr);
    }
  });
}

slideIt(ImageCounter, images);
