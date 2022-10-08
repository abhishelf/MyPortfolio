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

        var app = (function() {
        var body = undefined;
        var menu = undefined;
        var menuItems = undefined;

        var init = function init() {
          body = document.querySelector("body");
          menu = document.querySelector(".menu-icon");
          menuItems = document.querySelectorAll(".nav__list-item");

          applyListeners();
        };

        var applyListeners = function applyListeners() {
          menu.addEventListener("click", function() {
            return toggleClass(body, "nav-active");
          });
        };

        $(".nav__list-item").on("click", function() {
          $("body").removeClass("nav-active");
        });

        var toggleClass = function toggleClass(element, stringClass) {
          if (element.classList.contains(stringClass))
            element.classList.remove(stringClass);
          else element.classList.add(stringClass);
        };

        init();
      })();

      $(".bg-nav").scrollie({
        direction: "both",
        scrollOffset: 0,
        scrollRatio: 0,
        scrollingOutOfView: function(
          elem,
          offset,
          direction,
          coords,
          scrollRatio,
          thisTop,
          winPos
        ) {
          var bgColor = elem.data("background");

          $(".menu-icon__line").css("background-color", bgColor);
        }
      });