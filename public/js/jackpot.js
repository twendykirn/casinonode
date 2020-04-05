$(document).ready(function () {
    function getTime() {
        socket.emit('time');
        socket.on('time', function (time) {
            let backgroundWidth = time / (45000 / 100);
            $('.jackpot-body__progress-bar__background').css('width', backgroundWidth + "%");
            $('.jackpot-body__timer label').html(time / 1000 + " сек");
        });
    }
    getTime();
    setInterval(() => {
        getTime();
    }, 1000);

    $('.jackpot-body__modes__item').on('click', function () {
        let position = $(this).position();
        $('.jackpot-body__modes__background').css({ left: position.left, top: position.top });
        $('.withdraw-body__methods div').removeClass('active');
        $(this).addClass('active');
    });

    $('#amountOfCoins').change(function () {
        let result = ($(this).val() / 10) / 100 * 98;
        $('.withdraw-body__result span').html(result.toFixed(2));
    });

    $('.jackpot-body__modes__background').css({ left: $('#classic').position().left, top: $('#classic').position().top });
});