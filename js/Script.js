$(document).ready(function(){
$('#banner').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    dots:false,
    autoplay:true,
    autoplayTimeout:5000,
    // autoplaySpeed:1600,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

var owl = $('#banner');
owl.owlCarousel();
owl.on('changed.owl.carousel', function(event) {
    new WOW().init();
})

wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
  }
  )
  wow.init();



$('#service').owlCarousel({
    loop:true,
    margin:25,
    nav:true,
    dots:true,
    autoplay:true,
    autoplayTimeout:4000,
    autoplaySpeed:1800,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        },
        1024:{
            items:1
        },
        1440:{
            items:3
        }
    }
})

});

$(document).ready(function () {

    $(".canvas-sub-menu").hide();
    $(".canvas-menu li a").click(function () {
        $(this).next(".canvas-sub-menu").slideToggle();
        $(this).find("i").toggleClass("bi-chevron-down bi-chevron-up");
    });
});

$(document).ready(function (){

    let nav = document.querySelector(".navbar");
    window.onscroll = function(){

        if(document.documentElement.scrollTop > 50){
            nav.classList.add("header-scrolled");
        }
        else
        {
            nav.classList.remove("header-scrolled");
        }

    }

});

$(document).ready(function(){
    $(window).on('scroll',function(){
      x=$(window).scrollTop()
      // console.log(x)
      if(x>=200){
        $('#scroll_top').css('opacity','1')
      }
      else{
        $('#scroll_top').css('opacity','0')
      }
    })
    $(document).click(function(){
    $(window).scrollTop({top:0})
    })
})

AOS.init();

setInterval(function(){

    $('.loader').fadeOut();

},3000)
