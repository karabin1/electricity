(() => {
    // implementation button
    const button_1 = document.querySelector(".js-implementation__item-button_1");
    const button_2 = document.querySelector(".js-implementation__item-button_2");
    const button_3 = document.querySelector(".js-implementation__item-button_3");
    const imp_item_1 = document.querySelector(".js-implementation__items_1");
    const imp_item_2 = document.querySelector(".js-implementation__items_2");
    const imp_item_3 = document.querySelector(".js-implementation__items_3");

    const toggleClass_item_1 = () => {
        imp_item_1.classList.toggle("implementation__items--open");
    };
    const toggleClass_item_2 = () => {
        imp_item_2.classList.toggle("implementation__items--open");
    };
    const toggleClass_item_3 = () => {
        imp_item_3.classList.toggle("implementation__items--open");
    };

    button_1.addEventListener("click", toggleClass_item_1);
    button_2.addEventListener("click", toggleClass_item_2);
    button_3.addEventListener("click", toggleClass_item_3);

    // realization image
    const realization_img_1 = document.querySelector(".js-realization_div_1");
    const realization_img_2 = document.querySelector(".js-realization_div_2");
    const realization_img_3 = document.querySelector(".js-realization_div_3");
    const realization_img_4 = document.querySelector(".js-realization_div_4");

    const toggleClass_realization_img_1 = () => {
        realization_img_1.classList.toggle("implementation__item-div--open");
    };
    const toggleClass_realization_img_2 = () => {
        realization_img_2.classList.toggle("implementation__item-div--open");
    };
    const toggleClass_realization_img_3 = () => {
        realization_img_3.classList.toggle("implementation__item-div--open");
    };
    const toggleClass_realization_img_4 = () => {
        realization_img_4.classList.toggle("implementation__item-div--open");
    };

    realization_img_1.addEventListener("click", toggleClass_realization_img_1);
    realization_img_2.addEventListener("click", toggleClass_realization_img_2);
    realization_img_3.addEventListener("click", toggleClass_realization_img_3);
    realization_img_4.addEventListener("click", toggleClass_realization_img_4);

    // photovoltaics image
    const photovoltaics_img_1 = document.querySelector(".js-photovoltaics_div_1");
    const photovoltaics_img_2 = document.querySelector(".js-photovoltaics_div_2");
    const photovoltaics_img_3 = document.querySelector(".js-photovoltaics_div_3");
    const photovoltaics_img_4 = document.querySelector(".js-photovoltaics_div_4");

    const toggleClass_photovoltaics_img_1 = () => {
        photovoltaics_img_1.classList.toggle("implementation__item-div--open");
    };
    const toggleClass_photovoltaics_img_2 = () => {
        photovoltaics_img_2.classList.toggle("implementation__item-div--open");
    };
    const toggleClass_photovoltaics_img_3 = () => {
        photovoltaics_img_3.classList.toggle("implementation__item-div--open");
    };
    const toggleClass_photovoltaics_img_4 = () => {
        photovoltaics_img_4.classList.toggle("implementation__item-div--open");
    };

    photovoltaics_img_1.addEventListener("click", toggleClass_photovoltaics_img_1);
    photovoltaics_img_2.addEventListener("click", toggleClass_photovoltaics_img_2);
    photovoltaics_img_3.addEventListener("click", toggleClass_photovoltaics_img_3);
    photovoltaics_img_4.addEventListener("click", toggleClass_photovoltaics_img_4);

    // other image
    const other_img_1 = document.querySelector(".js-other_div_1");
    const other_img_2 = document.querySelector(".js-other_div_2");
    const other_img_3 = document.querySelector(".js-other_div_3");
    const other_img_4 = document.querySelector(".js-other_div_4");

    const toggleClass_other_img_1 = () => {
        other_img_1.classList.toggle("implementation__item-div--open");
    };
    const toggleClass_other_img_2 = () => {
        other_img_2.classList.toggle("implementation__item-div--open");
    };
    const toggleClass_other_img_3 = () => {
        other_img_3.classList.toggle("implementation__item-div--open");
    };
    const toggleClass_other_img_4 = () => {
        other_img_4.classList.toggle("implementation__item-div--open");
    };

    other_img_1.addEventListener("click", toggleClass_other_img_1);
    other_img_2.addEventListener("click", toggleClass_other_img_2);
    other_img_3.addEventListener("click", toggleClass_other_img_3);
    other_img_4.addEventListener("click", toggleClass_other_img_4);

})();