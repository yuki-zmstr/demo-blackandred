// fix top nav
$(document).ready(function() {

    // for top nav
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

    // for teams list
    var team_btn = $("#teams");
    var teams_list = $("#teams-list");
    team_btn.hover(
        function(){
            console.log("in function")
            teams_list.css({
                display: "block",
                visibility: "visible",
                opacity: 0.0
            }
            ).animate({
                opacity: 1.0,
            },500)
        }, 
        function(){
            // var hovering = teams_list(":hover")
            // if (hovering == false) {
            //     teams_list.animate({
            //         opacity: 0.0,
            //     },300)
    
            //     setTimeout(function (){
            //         teams_list.css({
            //             display: "none",
            //             visibility: "visible",
            //         })
            //     },300
            //     )
            // }
        });
    teams_list.hover(
        function(){},
        function(){
            console.log("out function")
            
            teams_list.animate({
                opacity: 0.0,
            },300)

            setTimeout(function (){
                teams_list.css({
                    display: "none",
                    visibility: "visible",
                })
            },300
            )
            
        }
    )

});