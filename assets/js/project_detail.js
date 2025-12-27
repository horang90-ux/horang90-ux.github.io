$(document).ready(function () {
    function init() {
        $('.op-0').each(function() {
            let bottom_obj = $(this).offset().top + $(this).outerHeight();
            let bottom_win = $(window).scrollTop() + $(window).height();

            if(bottom_win > (bottom_obj * 0.7)) {
                $(this).addClass('show');
            } 
        });
    }

    $(window).on("wheel", (e) => {
        init();
    });

    init();
});