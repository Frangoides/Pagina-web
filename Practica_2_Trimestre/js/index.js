//ZoomImagenes:
var modal = document.getElementById("myModal");


var img = document.getElementById("myImg");


var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}



var span = document.getElementsByClassName("close")[0];


span.onclick = function() { 
  modal.style.display = "none";
}


/*-----------------------------------------*/
//Boton:
mybutton = document.getElementById("myBtn");


window.onscroll = function() {scrollFunction()};

//Funcion para que al pulsar el boton suba arriba del todo
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}
/*-----------------------------------------*/
//Overlay:

function on() {
    document.getElementById("overlay").style.display = "block";
  }
  
  function off() {
    document.getElementById("overlay").style.display = "none";
  }







