$(document).ready(function () {
    $('.withdraw-body__methods__background').css({ left: $('#qiwiOut').position().left - 2, top: $('#qiwiOut').position().top - 2 });
    $('.withdraw-body__categories__in').on('click', function () {
        $('.withdraw-body__categories__background').css({ left: '50%' });
        $('.withdraw-body__categories__out').removeClass('active');
        $('.withdraw-body__categories__in').addClass('active');
        $('.withdraw-body__in').css('display', 'flex');
        $('.withdraw-body__out').css('display', 'none');
        $('.withdraw-body__methods__background').css({ left: $('#qiwiIn').position().left - 2, top: $('#qiwiIn').position().top - 2 });
    })

    $('.withdraw-body__categories__out').on('click', function () {
        $('.withdraw-body__categories__background').css({ left: 0 });
        $('.withdraw-body__categories__in').removeClass('active');
        $('.withdraw-body__categories__out').addClass('active');
        $('.withdraw-body__in').css('display', 'none');
        $('.withdraw-body__out').css('display', 'flex');
        $('.withdraw-body__methods__background').css({ left: $('#qiwiOut').position().left - 2, top: $('#qiwiOut').position().top - 2 });
    })

    $('.withdraw-body__methods .method').on('click', function () {
        let position = $(this).position();
        $('.withdraw-body__methods__background').css({ left: position.left - 2, top: position.top - 2 });
        $('.withdraw-body__methods div').removeClass('active');
        $(this).addClass('active');
    });

    $('#amountOfCoins').change(function () {
        let result = $(this).val() / 100 * 98;
        $('.withdraw-body__result span').html(result.toFixed(2));
    });
});