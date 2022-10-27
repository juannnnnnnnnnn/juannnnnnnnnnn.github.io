document.addEventListener("keyup", e =>
{
    

    if (e.target.matches("#buscador"))
    {
        document.querySelectorAll(".articulo").forEach(fruta =>{
            fruta.textContent.toLocaleLowerCase().includes(e.target.value.toLowerCase())
                ? fruta.classList.remove("filtro")
                :fruta.classList.add("filtro")

        })
    }
})

// Slider 
var $st = $('.pagination');
var $slickEl = $('.center');
$slickEl.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $st.text(i + ' of ' + slick.slideCount);
});

$slickEl.slick({
    centerMode: true,
    centerPadding: '170px',
    accessibility: false,
    slidesToShow: 1,
    focusOnSelect: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    responsive: [
        {
            breakpoint: 1800,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '20px',
                slidesToShow: 1
            }
        },
        {
            breakpoint: 768,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '20px',
                slidesToShow: 1
            }
        },
        {
            breakpoint: 300,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '20px',
                slidesToShow: 1
            }
        }
    ]
});

//Carrousel 

$('.responsive').slick({
    dots: false,
    infinite: true,
    autoplay:true,
    speed: 300,
    accessibility: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
        {
            breakpoint: 1324,
            settings: {
                slidesToShow: 10,
                slidesToScroll: 10,
                infinite: true,
                dots: false,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 5,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 5,
            }
        }
       
    ]
});

//borrar

document.getElementById("icon-menu").addEventListener("click", mostrar_menu);

function mostrar_menu() {

    document.getElementById("move-content").classList.toggle('move-container-all');
    document.getElementById("show-menu").classList.toggle('show-lateral');
}








//Buscador de contenido


//Ejecutando funciones
document.getElementById("icon-search").addEventListener("click", mostrar_buscador);
document.getElementById("cover-ctn-search").addEventListener("click", ocultar_buscador);

//Declarando variables
bars_search = document.getElementById("ctn-bars-search");
cover_ctn_search = document.getElementById("cover-ctn-search");
inputSearch = document.getElementById("inputSearch");
box_search = document.getElementById("box-search");


//Funcion para mostrar el buscador
function mostrar_buscador() {

    bars_search.style.top = "80px";
    cover_ctn_search.style.display = "block";
    inputSearch.focus();

    if (inputSearch.value === "") {
        box_search.style.display = "none";
    }

}

//Funcion para ocultar el buscador
function ocultar_buscador() {

    bars_search.style.top = "-10px";
    cover_ctn_search.style.display = "none";
    inputSearch.value = "";
    box_search.style.display = "none";

}


//Creando filtrado de busqueda

document.getElementById("inputSearch").addEventListener("keyup", buscador_interno);

function buscador_interno() {


    filter = inputSearch.value.toUpperCase();
    li = box_search.getElementsByTagName("li");

    //Recorriendo elementos a filtrar mediante los "li"
    for (i = 0; i < li.length; i++) {

        a = li[i].getElementsByTagName("a")[0];
        textValue = a.textContent || a.innerText;

        if (textValue.toUpperCase().indexOf(filter) > -1) {

            li[i].style.display = "";
            box_search.style.display = "block";

            if (inputSearch.value === "") {
                box_search.style.display = "none";
            }

        } else {
            li[i].style.display = "none";
        }

    }



}


