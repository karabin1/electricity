(() => {
    const button_1 = document.querySelector(".js-implementation__item-button_1");
    const implementation_item_1 = document.querySelector(".js-implementation__items_1");
    const toggleClass_item_1 = () => {
        implementation_item_1.classList.toggle("implementation__items--open");
    };
    button_1.addEventListener("click", toggleClass_item_1);

    const button_2 = document.querySelector(".js-implementation__item-button_2");
    const implementation_item_2 = document.querySelector(".js-implementation__items_2");
    const toggleClass_item_2 = () => {
        implementation_item_2.classList.toggle("implementation__items--open");
    };
    button_2.addEventListener("click", toggleClass_item_2);

    const button_3 = document.querySelector(".js-implementation__item-button_3");
    const implementation_item_3 = document.querySelector(".js-implementation__items_3");
    const toggleClass_item_3 = () => {
        implementation_item_3.classList.toggle("implementation__items--open");
    };
    button_3.addEventListener("click", toggleClass_item_3);
})();