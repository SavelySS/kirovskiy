"use strict";

document.addEventListener('DOMContentLoaded', () => {

    const SWIPER_GOODS = new Swiper('.swiper-goods', {
        slidesPerView: 'auto',

        loop: false,
        navigation: {
            nextEl: '.arrow-right-goods',
            prevEl: '.arrow-left-goods',
        },
        // on: {
        //     init: function () {
        //         updateNavigationButtons(this);
        //     },
        //     slideChange: function () {
        //         updateNavigationButtons(this);
        //     },
        // },
    });

    const SWIPER_SALE = new Swiper('.sale-swiper', {
        slidesPerView: 'auto',
        spaceBetween: 20,
        loop: false,
        navigation: {
            nextEl: '.sale__arrows-right',
            prevEl: '.sale__arrows-left',
        },
    });

    const SWIPER_BRAND = new Swiper('.swiper-brands', {
        slidesPerView: 'auto',
        spaceBetween: 20,
        loop: false,
        navigation: {
            nextEl: '.brands__arrows-right',
            prevEl: '.brands__arrows-left',
        },
    });
});
