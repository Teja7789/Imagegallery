var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
var fullImage = function (value, object) {
  console.log("Object", value);
  modal.style.display = "block";
  modalImg.src = value;
};

var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

var wedd = document.querySelectorAll(".waterfalls");
var rock = document.querySelectorAll(".nature");

var inputSrch = document.querySelector("#search");
inputSrch.addEventListener("keyup", (e) => {
  console.log("Search =>", e.target.value);
  if ("waterfalls" == e.target.value) {
    for (var i = 0; i < rock.length; i++) {
      rock[i].style.display = "none";
    }
    for (var i = 0; i < underwat.length; i++) {
      underwat[i].style.display = "none";
    }
    for (var i = 0; i < mountainsk.length; i++) {
      mountainsk[i].style.display = "none";
    }
    for (var i = 0; i < pari.length; i++) {
      pari[i].style.display = "none";
    }
    for (var i = 0; i < ocea.length; i++) {
      ocea[i].style.display = "none";
    }
  }
  if ("nature" == e.target.value) {
    for (var i = 0; i < wedd.length; i++) {
      wedd[i].style.display = "none";
    }
    for (var i = 0; i < underwat.length; i++) {
      underwat[i].style.display = "none";
    }
    for (var i = 0; i < mountainsk.length; i++) {
      mountainsk[i].style.display = "none";
    }
    for (var i = 0; i < pari.length; i++) {
      pari[i].style.display = "none";
    }
    for (var i = 0; i < ocea.length; i++) {
      ocea[i].style.display = "none";
    }
  }
});