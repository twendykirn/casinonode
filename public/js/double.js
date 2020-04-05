$(document).ready(function () {
    function changeNum(e, val) {
        let int = 0;
        if (val != "") {
            int = parseInt(val, 10);
        }
        switch (e) {
            case "X":
                return "";
            case "+10":
                return int + 10;
            case "+100":
                return int + 100;
            case "+1000":
                return int + 1000;
            case "+10000":
                return int + 10000;
            case "1/2":
                return int / 2;
            case "x2":
                return int * 2;
            case "Всё":
                return $('.double-body__stats__balance .balance').html();
        }
    }

    $('.double-body__stats__buttons button').on('click', function () {
        let val = $('.double-body__stats input').val();
        let res = changeNum($(this).html(), val);
        if ($('.double-body__stats__balance .balance').html() >= res) {
            $('.double-body__stats input').val(res);
        }
    });
});