(() => {
    const button_1 = document.querySelector(".js-implementation__item-button_1");
    const imp_item_1 = document.querySelector(".js-implementation__items_1");
    const toggleClass_item_1 = () => {
        imp_item_1.classList.toggle("implementation__items--open");
    };
    button_1.addEventListener("click", toggleClass_item_1);

    const button_2 = document.querySelector(".js-implementation__item-button_2");
    const imp_item_2 = document.querySelector(".js-implementation__items_2");
    const toggleClass_item_2 = () => {
        imp_item_2.classList.toggle("implementation__items--open");
    };
    button_2.addEventListener("click", toggleClass_item_2);

    const button_3 = document.querySelector(".js-implementation__item-button_3");
    const imp_item_3 = document.querySelector(".js-implementation__items_3");
    const toggleClass_item_3 = () => {
        imp_item_3.classList.toggle("implementation__items--open");
    };
    button_3.addEventListener("click", toggleClass_item_3);


    const img_1 = document.querySelector(".js-realization_div_1");
    const imp_img_1 = document.querySelector(".js-realization_div_1");
    const toggleClass_img_1 = () => {
        imp_img_1.classList.toggle("implementation__item-div--open");
    };
    img_1.addEventListener("click", toggleClass_img_1);

    const img_2 = document.querySelector(".js-realization_div_2");
    const imp_img_2 = document.querySelector(".js-realization_div_2");
    const toggleClass_img_2 = () => {
        imp_img_2.classList.toggle("implementation__item-div--open");
    };
    img_2.addEventListener("click", toggleClass_img_2);

    const img_3 = document.querySelector(".js-realization_div_3");
    const imp_img_3 = document.querySelector(".js-realization_div_3");
    const toggleClass_img_3 = () => {
        imp_img_3.classList.toggle("implementation__item-div--open");
    };
    img_3.addEventListener("click", toggleClass_img_3);

    const img_4 = document.querySelector(".js-realization_div_4");
    const imp_img_4 = document.querySelector(".js-realization_div_4");
    const toggleClass_img_4 = () => {
        imp_img_4.classList.toggle("implementation__item-div--open");
    };
    img_4.addEventListener("click", toggleClass_img_4);
})();