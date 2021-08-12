// fix top nav
$(document).ready(function() {

    // top nav fixed position
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

    // teams list drop down
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
        function(){
            console.log('in teams list')
        },
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

    // fade in each block
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        $(".sc").each(function() {
            var elemPos = $(this).offset().top;
            if (scroll > elemPos - wh / 2) {
                // $(this).css({ opacity: 0.0, visibility: "visible" }).animate({ opacity: 1.0 }, 1500);
                $(this).css({ opacity: 0.0, visibility: "visible" }).animate({ opacity: 1.0, left: '0px'}, 1500);

            }
        });
        $(".sc2").each(function() {
            var elemPos = $(this).offset().top;
            if (scroll > elemPos - wh / 1.1) {
                $(this).css({ opacity: 0.0, visibility: "visible" }).animate({ opacity: 1.0 }, 1000);
            }
        });
    })

    // welcome
    const welcomePos = $("#welcome").offset().top;
    const intro = $("#welcome p");
    const desc = $("#welcome span") 
    var wh = $(window).height();
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > welcomePos - wh / 3) {
            intro.css({
                opacity: 1.0
            }).addClass('anim-typewriter')
            setTimeout(function(){
                desc.animate({
                    opacity: 1.0,
                    left: '0px'
                }, 1000)
            }, 4000)
        }
    })

    // comments fade in
    var commentsPos = $("#comments").offset().top;
    var c1 = $(".c1")
    var c2 = $(".c2")
    var c3 = $(".c3")
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > commentsPos) {
            console.log('triggered')
            c1.animate({
                opacity: 1.0
            }, 800)
            setTimeout(function() {
                c2.animate({
                    opacity: 1.0
                },800)
            },200)
            setTimeout(function() {
                c3.animate({
                    opacity: 1.0
                },800)
            },400)
        }

    })


    // if (team_btn.is(":hover") === false) {
    //     console.log('target')
    //     if (teams_list.is(":hover") === false) {
    //         teams_list.animate({
    //             opacity: 0.0,
    //         },300)

    //         setTimeout(function (){
    //             teams_list.css({
    //                 display: "none",
    //                 visibility: "visible",
    //             })
    //         },300
    //         )
    //     }
    // }

});