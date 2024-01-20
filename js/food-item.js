let modal_window__close = document.querySelector('#modal_window__close');
let buy_button = document.querySelector('#buy_button');
let modal_window = document.querySelector('#modal_window')

buy_button.onclick = () => {
    modal_window.classList.toggle("modal-window--open");
    document.body.classList.toggle("nav--opened")
};

modal_window__close.onclick = () => {
    modal_window.classList.remove("modal-window--open");
    document.body.classList.remove("nav--opened")
};
  

window.onload = function () {
    var ingredient = document.getElementsByClassName('form__body__add-ingredients__item');
    var more_btn_ingredients = document.getElementById('more_button_ingredients');
    var sause = document.getElementsByClassName('form__body__add-sause__item');
    var more_btn_sause = document.getElementById('more_button_sause');

    if (document.documentElement.clientWidth < 950) {
        for (let i = 3; i < ingredient.length; i++) {
            ingredient[i].style.display = "none";
        }

        for (let i = 3; i < sause.length; i++) {
            sause[i].style.display = "none";
        }

        var countD = 3;
        more_btn_ingredients.addEventListener("click", function () {
            var ingredient = document.getElementsByClassName('form__body__add-ingredients__item');
            countD +=2;
            if (countD <= ingredient.length) {
                for (let i = 0; i < countD; i++) {
                    ingredient[i].style.display = "flex";
                }
            } else {
                more_btn_ingredients.style.display = "none"
            }

        })
        
        var countS = 3
        more_btn_sause.addEventListener("click", function () {
            var sause = document.getElementsByClassName('form__body__add-sause__item');
            countS += 2;
            if (countS <= sause.length) {
                for (let i = 0; i < countS; i++) {
                    sause[i].style.display = "flex";
                }
            } else {
                more_btn_sause.style.display = "none"
            }

        })
    }
}
