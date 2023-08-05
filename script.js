window.onload = function() {
    $(".logo").click(function() {
        if ($(window).width() < 1160) {
            $(".nav-ul-GSM").toggle();
        }
    });

    $(document).click(function(e) {
        if (!$(e.target).closest('.nav-ul-GSM').length && !$(e.target).is('.logo')) {
            $('.nav-ul-GSM').hide();
        }
    });

    $(window).scroll(function() {
        $('.nav-ul-GSM').hide();
    });
}