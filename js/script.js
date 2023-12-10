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


