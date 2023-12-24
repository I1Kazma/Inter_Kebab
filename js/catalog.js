const btns = document.querySelectorAll(".category-items__layout__tab-head__item")
const contents = document.querySelectorAll(".category-items__layout__tab-content .food-element")

for (let btn of btns) {
    btn.onclick = function () {
        filterContent(this.dataset.filter)
    }
}

function filterContent(sel) {
    for (let content of contents) {
        if (!content.classList.contains(sel)) {
            content.style.display = "none"
        } else {
            content.style.display = "block"
        }
    }

    for (let btn of btns) {
        if (btn.dataset.filter === sel) {
            btn.classList.add('active')
        } else {
            btn.classList.remove('active')
        }
    }
}


window.onload = function () {
    var food_element = document.getElementsByClassName('food-element');
    var more_btn = document.getElementById('more_button');

    if (document.documentElement.clientWidth > 1000) {
        for (let i = 12; i < food_element.length; i++) {
            food_element[i].style.display = "none";
        }

        var countD = 12;
        more_btn.addEventListener("click", function () {
            var food_element = document.getElementsByClassName('food-element');
            countD += 12;
            if (countD <= food_element.length) {
                for (let i = 0; i < countD; i++) {
                    food_element[i].style.display = "block";
                }
            } else {
                more_btn.style.display = "none"
            }

        })
    } else if ((document.documentElement.clientWidth < 1000) && (document.documentElement.clientWidth > 480)) {
        for (let i = 9; i < food_element.length; i++) {
            food_element[i].style.display = "none";
        }

        var countD = 9;
        more_btn.addEventListener("click", function () {
            var food_element = document.getElementsByClassName('food-element');
            countD += 9;
            if (countD <= food_element.length) {
                for (let i = 0; i < countD; i++) {
                    food_element[i].style.display = "block";
                }
            } else {
                more_btn.style.display = "none"
            }

        })


    } else if ((document.documentElement.clientWidth < 480) && (document.documentElement.clientWidth > 380)) {
        for (let i = 6; i < food_element.length; i++) {
            food_element[i].style.display = "none";
        }
        var countD = 6;
        more_btn.addEventListener("click", function () {
            var food_element = document.getElementsByClassName('food-element');
            countD += 6;
            if (countD <= food_element.length) {
                for (let i = 0; i < countD; i++) {
                    food_element[i].style.display = "block";
                }
            } else {
                more_btn.style.display = "none"
            }

        })

    } else {
        for (let i = 4; i < food_element.length; i++) {
            food_element[i].style.display = "none";
        }

        var countD = 4;
        more_btn.addEventListener("click", function () {
            var food_element = document.getElementsByClassName('food-element');
            countD += 4;
            if (countD <= food_element.length) {
                for (let i = 0; i < countD; i++) {
                    food_element[i].style.display = "block";
                }
            } else {
                more_btn.style.display = "none"
            }

        })
    }


}

const contents__layout = document.querySelector(".category-items__layout__tab-content")
const layout__btns = document.querySelector(".layout-btns button")
const layout_grid = document.querySelector("#layout_grid")
const layout_list = document.querySelector("#layout_list")

layout__btns.onclick = function () {
    changeLayout()
}

function changeLayout() {
    layout_grid.onclick = () => {
        contents__layout.classList.remove("layout-list");
        contents__layout.classList.add("layout-grid");
    };

    layout_list.onclick = () => {
        contents__layout.classList.remove("layout-grid");
        contents__layout.classList.add("layout-list");
    };
}