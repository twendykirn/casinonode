$(document).ready(function () {
    function getTime() {
        socket.emit('time');
        socket.on('time', function (time) {
            let backgroundWidth = time / (45000 / 100);
            $('.jackpot-body__progress-bar__background').css('width', backgroundWidth + "%");
            $('.jackpot-body__timer label').html(time / 1000);
            if (time == 0) {
                $('.jackpot-body__bets__item').remove();
            }
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
    $('.jackpot-body__bet-amount').submit(function (e) {
        e.preventDefault();
        let betstats = { bet: $('.jackpot-body__bet-amount input').val() };
        socket.emit('bet', betstats);
        $('.jackpot-body__bet-amount input').val('');
        return false;
    });
    socket.on('bet', function (betStat) {
        $('.jackpot-body__bets').html(
            $('.jackpot-body__bets').html() +
            `<div class='jackpot-body__bets__item'>
                <div class='jackpot-body__bets__item__info'>
                    <div class='photo'>
                        <img ${betStat.photo}'>
                    </div>
                    <span>${betStat.name} ${betStat.surname}</span>
                </div >
                <span class="jackpot-body__bets__item__amount">
                    <label>Поставил: </label> ${betStat.bet} 
                    <img src="../img/coin.png">
                </span>
                <div class="jackpot-body__bets__item__chance">
                    <div class="jackpot-body__tickets">
                        <span>Билеты:</span>
                        <span class="jackpot-body__tickets__number">#4054-4055</span>
                    </div>
                    <div class="jackpot-body__percent">
                        <span>22%</span>
                    </div>
                </div>
            </div>`);
    });
});