$(function () {
    $('tr td:nth-child(1)').addClass("key");
    $('tr td:nth-child(2)').addClass("english");
    $('tr td:nth-child(3)').addClass("chinese");
    $('img').click(function () {
        $('tr td:nth-child(2)').fadeToggle()

    });
});