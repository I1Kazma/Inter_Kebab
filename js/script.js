let header_mobile = document.querySelector("#header_mobile");
let header__mobile__close = document.querySelector("#header__mobile__close");
let header__mobile__hamburger = document.querySelector(
  "#header__mobile__hamburger"
);

header__mobile__hamburger.onclick = () => {
  header_mobile.classList.toggle("header__mobile-open");
  document.body.classList.toggle("nav--opened");
};

header__mobile__close.onclick = () => {
  header_mobile.classList.remove("header__mobile-open");
  document.body.classList.remove("nav--opened");
};

let login_window__close = document.querySelector("#login_window__close");
let btn_auth = document.querySelector("#btn_auth");
let login_window = document.querySelector("#login_window");

let login = document.querySelector(".login");
let recovery = document.querySelector(".recovery");
let signup = document.querySelector(".signup");
let link__signup = document.querySelector("#link__signup");
let link__recovery = document.querySelector("#link__recovery");
let btn__recovery = document.querySelector("#btn__recovery");
let recovery__success = document.querySelector("#recovery__success");
let back_to_login = document.querySelector("#back_to_login");
let btn__signup = document.querySelector("#btn__registration");
let signup__success = document.querySelector("#signup__success");

btn__signup.onclick = () => {
  signup__success.style.display = "flex";
  signup.style.display = "none ";
};

btn__recovery.onclick = () => {
  recovery__success.style.display = "flex";
  recovery.style.display = "none";
};

link__signup.onclick = () => {
  signup.style.display = "flex";
  login.style.display = "none";
};

link__recovery.onclick = () => {
  recovery.style.display = "flex";
  login.style.display = "none";
};

back_to_login.onclick = () => {
  signup__success.style.display = "none";
  login.style.display = "flex";
};

btn_auth.onclick = () => {
  login_window.classList.toggle("modal-window--open");
  document.body.classList.toggle("nav--opened");
  login.style.display = "flex";
};

login_window__close.onclick = () => {
  login_window.classList.remove("modal-window--open");
  document.body.classList.remove("nav--opened");
  signup.style.display = "none";
  recovery.style.display = "none";
  login.style.display = "none";
  recovery__success.style.display = "none";
  signup__success.style.display = "none";
};

let vacancies__window = document.querySelector("#vacancies__window");
let vacancies__close = document.querySelector("#vacancies_window__close");
let vacancies__open = document.querySelector("#vacancies__modal");

vacancies__open.onclick = () => {
  vacancies__window.classList.toggle("modal-window--open");
  document.body.classList.toggle("nav--opened");
};

vacancies__close.onclick = () => {
  vacancies__window.classList.remove("modal-window--open");
  document.body.classList.remove("nav--opened");
};

$(document).ready(function () {
  var toggleLabel = function (element) {
    if (element.val()) {
      element.addClass("c-input__field--full");
    } else {
      element.removeClass("c-input__field--full");
    }
  };

  $(".c-input__field").each(function () {
    toggleLabel($(this));
  });

  $(".c-input__field").on("blur", function () {
    toggleLabel($(this));
  });
});

const menu = document.querySelector("#food-menu");
const food_catalog = document.querySelector("#food-catalog");
window.addEventListener("scroll", function () {
  menu.classList.toggle("sticky", window.scrollY > 520);
  food_catalog.classList.toggle("catalog-fixed", window.scrollY > 520);
});

let food_nav_links = document.querySelectorAll(".food-nav__layout__link");

food_nav_links.forEach((food_nav_link, index) => {
  food_nav_link.onclick = () => {
    changeLink(index);
  };
});

function changeLink(index) {
  for (let food_nav_link of food_nav_links) {
    food_nav_link.classList.remove("active");
  }
  food_nav_links[index].classList.add("active");
}
