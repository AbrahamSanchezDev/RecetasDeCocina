const previews = document.getElementById("previews");
const next = document.getElementById("next");
const mainImage = document.getElementById("mainImage");

const mainImg = document.getElementById("mainImage");
const audio = new Audio("audio/flip.mp3");
var $currentIndex = 1;
var maxImage = 51;
function updateImage() {
    mainImg.src = "recetas/" + $currentIndex + ".jpg";
    audio.play();
    audio.currentTime = 0.1;
}
function previewsClick() {

    $currentIndex--;
    if ($currentIndex < 1) {
        $currentIndex = maxImage;
    }
    updateImage();
}

function nextClick() {

    $currentIndex++;
    if ($currentIndex > maxImage) {
        $currentIndex = 1;
    }
    updateImage();
}


previews.addEventListener("click", previewsClick);
next.addEventListener("click", nextClick);
mainImage.addEventListener('click', nextClick);

document.onkeydown = function (e) {
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


const select = document.getElementById('select');

const datosDePdf = [
    {
        'texto': "Inicio",
        'numeroDePagina': 1
    },
    {
        'texto': "Tecnicas",
        'numeroDePagina': 8
    },
    {
        'texto': "Arroz Con Huevo Cremoso",
        'numeroDePagina': 16
    },
    {
        'texto': "Tortilla De Papitas Criollas",
        'numeroDePagina': 18
    },
    {
        'texto': "Sandwich Tostado de Huevo,Quesito y Aguacate",
        'numeroDePagina': 20
    },
    {
        'texto': "Torticas de Calentao",
        'numeroDePagina': 22
    },
    {
        'texto': "Ceviche de Frijoles Rojos",
        'numeroDePagina': 24
    },
    {
        'texto': "Sopita De Arroz y Frijol Cabecita Negra",
        'numeroDePagina': 26
    },
    {
        'texto': "Albondigas de Lentejas y Cilantro en Salsa de Tomate",
        'numeroDePagina': 28
    },
    {
        'texto': "Pico De Gallo con Garbanzos,Mango y Aguacate",
        'numeroDePagina': 30
    },
    {
        'texto': "Arroz,Maicito y Arvejas con Vegetales Encurtidos",
        'numeroDePagina': 32
    },
    {
        'texto': "Ensalada Tipo Alemana",
        'numeroDePagina': 34
    },
    {
        'texto': "Salpicon de Atun y Yucas",
        'numeroDePagina': 36
    },
    {
        'texto': "Molde Cerdo Guisado y Platano",
        'numeroDePagina': 38
    },
    {
        'texto': "Tamal en Olla",
        'numeroDePagina': 40
    },
    {
        'texto': "Arroz Cremoso de Pollo Aguacate y Maduritos",
        'numeroDePagina': 42
    },
    {
        'texto': "Helado Rapido de Banano y Panela",
        'numeroDePagina': 44
    },
    {
        'texto': "Dulce de Tomate de Arbol y Cola",
        'numeroDePagina':46
    },
    {
        'texto': "Enyucado en Sarten",
        'numeroDePagina': 48
    }
]
select.addEventListener('change', function handleChange(event) {
    let index = datosDePdf[select.selectedIndex].numeroDePagina; 
    $currentIndex = index;
    updateImage();
});