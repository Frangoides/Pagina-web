//Zoom de imagenes:

//Creacion de variables
var modal = document.getElementById("myModal");


var img = document.getElementById("myImg");
var img2 = document.getElementById("myImg2");
var img3 = document.getElementById("myImg3");
var img4 = document.getElementById("myImg4");
var img5 = document.getElementById("myImg5");
var img6 = document.getElementById("myImg6");

var ModalVideo = document.getElementById("video");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

//Todas las funciones para el zoom de la imagen, con su contenido y el boton de cerrar.
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
  
  document.getElementById("ca").innerHTML=`
  <video autoplay loop muted>
            <source  id="video" src="videos/Pasiva.mp4" type="video/mp4">

        </video>`

}

img2.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    document.getElementById("ca").innerHTML=`
    <video autoplay loop muted>
              <source  id="video" src="videos/Q.mp4" type="video/mp4">
  
          </video>`
}

img3.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    document.getElementById("ca").innerHTML=`
  <video autoplay loop muted>
            <source  id="video" src="videos/W.mp4" type="video/mp4">

        </video>`
}

img4.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    document.getElementById("ca").innerHTML=`
  <video autoplay loop muted>
            <source  id="video" src="videos/E.mp4" type="video/mp4">

        </video>`
}

img5.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    document.getElementById("ca").innerHTML=`
  <video autoplay loop muted>
            <source  id="video" src="videos/R.mp4" type="video/mp4">

        </video>`
  }

  img6.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
  



var span = document.getElementsByClassName("close")[0];


span.onclick = function() { 
  modal.style.display = "none";
}

/*-----------------------------------------*/
//Buscador:

const inputBuscar = document.getElementById('buscar');
    inputBuscar.addEventListener('keyup', filtro);

function filtro(){

    let valorInput = inputBuscar.value;
    let cards = document.getElementsByClassName('card');

    //Filtro para buscar lo que quieras con (toLowerCase) para que las mayusculas no interfieran con la busqueda
    for(let i = 0; i < cards.length; i++){
        if(cards[i].innerHTML.toLowerCase().includes(valorInput.toLowerCase())){
            cards[i].style.display = 'block';

        }else{
            cards[i].style.display = 'none';
        }

    }
}