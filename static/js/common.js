var step = false
$('.search-b').click(function() {
    if (step == false) {
        step = true;
        $('input[type=search]').animate({
            'height': "150px"
        }, 500);
        $('.hide').animate({
            'top': "150px"
        }, 500);
        setTimeout(function() {
            $('.hide').animate({
                'height': "25px",
                boxShadow: '0 10px 10px 5px rgba(0, 0, 0, .5)'
            }, 250);
        }, 500);
    }
    else if (step == true) {
        step = false;
        setTimeout(function() {
            $('input[type=search]').animate({
                'height': 0
            }, 500);
            $('.hide').animate({
                'top': "150px"
            }, 500);
        }, 250);
        $('.hide').animate({
            'height': 0,
            'box-shadow': 'none'
        }, 250);
    }
});
$('.hide').click(function() {
    step = false;
    setTimeout(function() {
        $('input[type=search]').animate({
            'height': 0
        }, 500);
        $('.hide').animate({
            'top': "150px"
        }, 500);
    }, 250);
    $('.hide').animate({
        'height': 0,
        'box-shadow': 'none'
    }, 250);
});
