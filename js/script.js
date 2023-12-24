let header_mobile = document.querySelector("#header_mobile")
let header__mobile__close = document.querySelector("#header__mobile__close")
let header__mobile__hamburger = document.querySelector("#header__mobile__hamburger")

header__mobile__hamburger.onclick = () => {
    header_mobile.classList.toggle("header__mobile-open");
    document.body.classList.toggle("nav--opened")
};

header__mobile__close.onclick = () => {
    header_mobile.classList.remove("header__mobile-open");
    document.body.classList.remove("nav--opened")
};

const menu = document.querySelector("#food-menu");
const food_catalog = document.querySelector("#food-catalog")
window.addEventListener("scroll", function () {
    menu.classList.toggle("sticky", window.scrollY > 520);
    food_catalog.classList.toggle("catalog-fixed", window.scrollY > 520);
});

let food_nav_links = document.querySelectorAll(".food-nav__layout__link")

food_nav_links.forEach((food_nav_link, index) => {
    food_nav_link.onclick = () => {
        changeLink(index)
    }
})

function changeLink(index) {
    for (let food_nav_link of food_nav_links) {
        food_nav_link.classList.remove('active')
    }
    food_nav_links[index].classList.add('active')

}



