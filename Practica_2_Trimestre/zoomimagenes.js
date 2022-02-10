var modal = document.getElementById("myModal");


var img = document.getElementById("myImg");
var img2 = document.getElementById("myImg2");
var img3 = document.getElementById("myImg3");
var img4 = document.getElementById("myImg4");
var img5 = document.getElementById("myImg5");

var ModalVideo = document.getElementById("video");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var desText= document.getElementById("des");
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
  



var span = document.getElementsByClassName("close")[0];


span.onclick = function() { 
  modal.style.display = "none";
}