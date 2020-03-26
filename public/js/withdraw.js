$(document).ready(function () {
    $('.withdraw-body__categories__in').on('click', function () {
        $('.withdraw-body__categories__background').css({ left: '50%' });
        $('.withdraw-body__categories__out').removeClass('active');
        $('.withdraw-body__categories__in').addClass('active');
    })

    $('.withdraw-body__categories__out').on('click', function () {
        $('.withdraw-body__categories__background').css({ left: 0 });
        $('.withdraw-body__categories__in').removeClass('active');
        $('.withdraw-body__categories__out').addClass('active');
    })
});