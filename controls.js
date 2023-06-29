const previews = document.getElementById("previews");
const next = document.getElementById("next");
const mainImage = document.getElementById("mainImage");

const mainImg = document.getElementById("mainImage");
const audio = new Audio("audio/flip.mp3");
var $currentIndex = 1;
var maxImage = 51;
function updateImage(){
    mainImg.src = "recetas/"+$currentIndex+".jpg";
    audio.play();
    audio.currentTime = 0.1;
}
function previewsClick(){

    $currentIndex--;
    if($currentIndex < 1){
        $currentIndex = maxImage;
    }
    updateImage();
}

function nextClick(){
    
    $currentIndex++;
    if($currentIndex > maxImage){
        $currentIndex = 1;
    }
    updateImage();
}


previews.addEventListener("click",previewsClick);
next.addEventListener("click",nextClick);
mainImage.addEventListener('click',nextClick);

document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37:
            previewsClick();
            break;
        case 38:
          
            break;
        case 39:
           
            nextClick();
            break;
        case 40:
            
            break;
    }
};