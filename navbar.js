$(document).ready(function(){
    
    var scroll = new SmoothScroll('a[href*="#"]')

    var homeBottom = $('#home').offset().top + $('#home').height()*1.5;
    
    $(window).on("scroll",function(){
        var stop = Math.round($(window).scrollTop());
        if(stop > homeBottom){
            $(".navbar").removeClass("homeNavbar");
            $(".navbar").addClass("fadeInDown");
            $(".navbar").addClass("scrollNavbar")
        }
        else{  
            $(".navbar").removeClass("fadeInDown");
            $(".navbar").removeClass("scrollNavbar");
            $(".navbar").addClass("homeNavbar")
        }
    });
    
});