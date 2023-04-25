// navbar fixed
window.onscroll = function(){
    const header = document.querySelector("nav");
    const link = document.querySelectorAll(".linker")
    const mid = document.querySelector(".mid")
    const navFixed = header.offsetTop;
    // important
    if(window.pageYOffset > navFixed){
        header.classList.add("navbar-fixed");
        mid.classList.add("Ccolor-mid");
        for (let i = 0; i < link.length; i++){
            link[i].classList.add("change-color");
        }
    }
    else{
        header.classList.remove("navbar-fixed");
        mid.classList.remove("Ccolor-mid");
        for (let i = 0; i < link.length; i++){
            link[i].classList.remove("change-color");
        }
    }
}

// search
const search = document.querySelector(".searchclick");
const searchbar = document.querySelector(".hide");
search.addEventListener("click", function(){
    searchbar.classList.toggle("search-active");
})

// detail
const plasma = document.querySelector(".pls")
const Dplasma = document.querySelector(".dpls")
const spacedeb = document.querySelector(".sd")
const Dspacedeb = document.querySelector(".dsd")
const cosmic = document.querySelector(".cr")
const Dcosmic = document.querySelector(".dcr")
const pre =  document.querySelector(".pre")

plasma.addEventListener("click", function() {
    pre.classList.add("disActive")

    plasma.classList.add("buttonActive");
    spacedeb.classList.remove("buttonActive");
    cosmic.classList.remove("buttonActive");


    Dplasma.classList.add("desActives");
    Dspacedeb.classList.remove("desActives");
    Dcosmic.classList.remove("desActives");
})

spacedeb.addEventListener("click", function() {
    pre.classList.add("disActive")

    plasma.classList.remove("buttonActive");
    spacedeb.classList.add("buttonActive");
    cosmic.classList.remove("buttonActive");

    Dplasma.classList.remove("desActives");
    Dspacedeb.classList.add("desActives");
    Dcosmic.classList.remove("desActives");
})

cosmic.addEventListener("click", function() {
    pre.classList.add("disActive")

    plasma.classList.remove("buttonActive");
    spacedeb.classList.remove("buttonActive");
    cosmic.classList.add("buttonActive");

    Dplasma.classList.remove("desActives");
    Dspacedeb.classList.remove("desActives");
    Dcosmic.classList.add("desActives");
})

// planet
var swiper1 = new Swiper(".mySwiper1", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    spaceBetween: 0, 
    touchRatio: 0
});

var swiper4 = new Swiper(".mySwiper4", {
    slidesPerView: 3,
    spaceBetween: 0,
    centeredSlides: true,
    touchRatio: 0
    // rewind: true,
});

var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    touchRatio: 0,
    spaceBetween: 0, 
    // rewind: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
swiper2.controller.control = [swiper1, swiper4];

// phone ipad
var swiper3 = new Swiper(".mySwiper3", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
    },
});