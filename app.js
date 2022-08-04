$(function () {
    $('.calc-btn').on('click', function () {
        $('.result').val($('.result').val() + $(this).html());
    })

    $('.equal').on('click', function () {
        exp = $('.result').val();
        if (exp.includes('X')) {
            exp = exp.replace('X', '*');
        }
        $('.result').val(eval(exp));


    })
    $('.clear').on('click', function () {
        $('.result').val('');
    })
    $('.back').on('click', function () {
        ex = $('.result').val();
        $('.result').val(ex.substring(0, ex.length - 1));

    })


})