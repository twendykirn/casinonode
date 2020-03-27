$(document).ready(function () {

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

  $(".faq-answers__answer").on("click", function () {
    $(this)
      .children("p")
      .toggle("normal");
    $(this)
      .find(".faq-arrow")
      .toggleClass("active");
  });
});
