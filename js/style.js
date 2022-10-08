        $(window).on("load", function() {
          setTimeout(() => {
            $(".loader").fadeOut();
            $("#preloader").fadeOut("slow", function() {
              new WOW().init();

              $(".owl-carousel").owlCarousel({
                items: 3,
                mouseDrag: true,
                autoplay: true,
                smartSpeed: 500,
                dotsEach: 1,
                autoplayHoverPause: true,
                responsive: {
                  0: {
                    items: 1,
                    loop: true
                  },
                  676: {
                    items: 2,
                    nav: false,
                    loop: true
                  },
                  1000: {
                    items: 3,
                    loop: true
                  }
                }
              });
            });
          }, 000);
        });

      
      $(window).scroll(function(){
          if ($(window).scrollTop() > 200) {
            $("nav").addClass("menu_background")
          } else {
            $("nav").removeClass("menu_background")
          }
      });
