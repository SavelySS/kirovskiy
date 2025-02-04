"use strict";

document.addEventListener('DOMContentLoaded', () => {

    const SWIPER_GOODS = new Swiper('.swiper-goods', {
        slidesPerView: 'auto',

        loop: false,
        navigation: {
            nextEl: '.arrow-right-goods',
            prevEl: '.arrow-left-goods',
        },
        on: {
            init: function () {
                updateNavigationButtons(this);
            },
            slideChange: function () {
                updateNavigationButtons(this);
            },
        },
    });
});
