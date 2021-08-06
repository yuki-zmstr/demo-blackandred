// fix top nav
$(document).ready(function() {
    var topnavPos = $("#topnav").offset().top;
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        // console.log(scroll);
        if (scroll > topnavPos) {
            $("#topnav").css({"position":"fixed", "top":"0px"});
            // console.log('modified')
        } else {
            $("#topnav").css({"position":"absolute", "top":"75vh"})
        }
    });
});