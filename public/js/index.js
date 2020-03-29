$(document).ready(function () {
  function checkMenu() {
    if ($('html').css('width') < '730px') {
      if (!$('main .menu').hasClass('menu-opened')) {
        $('main .menu').addClass('menu-opened').css('width', '100vw');
        $('.mob-menu').html('<i class="fas fa-times"></i>');
      } else {
        $('main .menu').removeClass('menu-opened').css('width', '0');
        $('.mob-menu').html('<i class="fas fa-bars"></i>');
      }
    }
  }

  $('.mob-menu').on('click', function () {
    checkMenu();
  });

  $('#faq').on('click', function () {
    $('.menu__items__item').removeClass('focus');
    $('#faq').addClass('focus');
    $.post({
      url: '/faq',
      data: { word: "faq" }
    }).done(function (res) {
      if (res != 'error') {
        $('main .fixed-container').html(res);
        $.getScript('../js/faq.js');
      } else {
        location.reload(true);
      }
    })
  });

  $('#youtube').on('click', function () {
    $('.menu__items__item').removeClass('focus');
    $('#youtube').addClass('focus');
    $.post({
      url: '/youtube',
      data: { word: "youtube" }
    }).done(function (res) {
      if (res != 'error') {
        $('main .fixed-container').html(res);
      } else {
        location.reload(true);
      }
    })
  });

  $('.btn-add-balance').on('click', function () {
    $('.menu__items__item').removeClass('focus');
    $('#withdraw').addClass('focus');
    $.post({
      url: '/withdraw',
      data: { word: "withdraw" }
    }).done(function (res) {
      if (res != 'error') {
        $('main .fixed-container').html(res);
        $.getScript('../js/withdraw.js');
      } else {
        location.reload(true);
      }
    })
  });

  $('#withdraw').on('click', function () {
    $('.menu__items__item').removeClass('focus');
    $('#withdraw').addClass('focus');
    $.post({
      url: '/withdraw',
      data: { word: "withdraw" }
    }).done(function (res) {
      if (res != 'error') {
        $('main .fixed-container').html(res);
        $.getScript('../js/withdraw.js');
      } else {
        location.reload(true);
      }
    })
  });

  $('#ref').on('click', function () {
    $('.menu__items__item').removeClass('focus');
    $('#ref').addClass('focus');
    $.post({
      url: '/ref',
      data: { word: "ref" }
    }).done(function (res) {
      if (res != 'error') {
        $('main .fixed-container').html(res);
        $.getScript('../js/ref.js');
      } else {
        location.reload(true);
      }
    })
  });

  $('#jackpot').on('click', function () {
    $('.menu__items__item').removeClass('focus');
    $('#jackpot').addClass('focus');
    $.post({
      url: '/jackpot',
      data: { word: "jackpot" }
    }).done(function (res) {
      if (res != 'error') {
        $('main .fixed-container').html(res);
        $.getScript('../js/jackpot.js');
      } else {
        location.reload(true);
      }
    })
  });

  $('#bonus').on('click', function () {
    $('.menu__items__item').removeClass('focus');
    $('#bonus').addClass('focus');
    $.post({
      url: '/bonus',
      data: { word: "bonus" }
    }).done(function (res) {
      if (res != 'error') {
        $('main .fixed-container').html(res);
      } else {
        location.reload(true);
      }
    })
  });

  $(".menu__btn").on("click", function () {
    $(".menu__items__item span").toggle("normal");
    $('.menu__btn img').toggleClass("active");
  });
});
