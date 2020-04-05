$(document).ready(function () {
    function doubleNum(e) {
        return e * 2;
    }

    $('.double-amount').on('click', function () {
        let element = $('.nvuti-body__stats__user-amount input');
        element.val(doubleNum(element.val()));
    });

    $('.double-percent').on('click', function () {
        let element = $('.nvuti-body__stats__user-percent input');
        element.val(doubleNum(element.val()));
    });
});