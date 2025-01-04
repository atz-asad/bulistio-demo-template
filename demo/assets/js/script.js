!(function ($) {
    "use strict";

    /*============================================
        Preloader
    ============================================*/
    $("#preLoader").delay(1000).queue(function () {
        $(this).remove();
    });


    /*============================================
        Sticky header
    ============================================*/
    $(window).on("scroll", function () {
        var header = $(".header-area");
        // If window scroll down .is-sticky class will added to header
        if ($(window).scrollTop() >= 100) {
            header.addClass("is-sticky");
        } else {
            header.removeClass("is-sticky");
        }
    });


    /*============================================
        Mobile menu
    ============================================*/
    var mainMenu = {
        init: function() {
            this.mobileMenu()
        },
        mobileMenu () {
            // Variables
            var mainNavbar = $(".main-navbar"),
                mobileNavbar = $(".mobile-menu"),
                cloneInto = $(".mobile-menu-wrapper"),
                cloneItem = $(".mobile-item"),
                menuToggler = $(".menu-toggler")

            menuToggler.on("click", function () {
                $(this).toggleClass("active");
                $("body").toggleClass("mobile-menu-active")
            })

            mainNavbar.find(cloneItem).clone(!0).appendTo(cloneInto);
            
            mobileNavbar.find("li").each(function(index) {
                var toggleBtn = $(this).children(".toggle")

                toggleBtn.on("click", function(e) {
                    $(this)
                        .parent("li")
                        .children("ul")
                        .stop(true, true)
                        .slideToggle(350);
                    $(this).parent("li").toggleClass("show");
                })
            })

            // check browser width in real-time
            var checkBreakpoint = function () {
                var winWidth = window.innerWidth;
                if (winWidth <= 1199) {
                    mainNavbar.hide();
                    mobileNavbar.show()
                } else {
                    mainNavbar.show();
                    mobileNavbar.hide()
                }
            }
            checkBreakpoint();

            $(window).on('resize', function () {
                checkBreakpoint();
            });
        }
    }


    /*============================================
        Image to background image
    ============================================*/
    $(".bg-img.blur-up").parent().addClass('blur-up lazyload');

    $(".bg-img").each(function () {
        var el = $(this),
            src = el.attr("src"),
            parent = el.parent();

        parent.css({
            "background-image": "url(" + src + ")",
            "background-size": "cover",
            "background-position": "center",
            "display": "block"
        });

        el.hide();
    });


    /*============================================
        Price range
    ============================================*/
    var slider = document.getElementById("priceSlider");
    null != slider && (noUiSlider.create(slider, {
        start: [200, 500],
        connect: !0,
        step: 10,
        margin: 10,
        range: {
            min: 0,
            max: 1000
        }
    }), slider.noUiSlider.on("update", function (slider, i) {
        $("#filter-price-range").text("$" + slider.join(" - " + "$"))
    }))
    
    /*============================================
        password toggle
    ============================================*/
    $(".toggle-password").click(function() {
        // Toggle the eye icon
        $(this).find("i").toggleClass("fa-eye fa-eye-slash");
        var input = $($(this).attr("data-toggle"));
        if (input.attr("type") === "password") {
            input.attr("type", "text");
        } else {
            input.attr("type", "password");
        }
    });
    
    


    /*============================================
        Sidebar toggle
    ============================================*/
    $(".category-toggle").on("click", function (t) {
        var i = $(this).closest("li"),
            o = i.find("ul").eq(0);

        if (i.hasClass("open")) {
            o.slideUp(300, function () {
                i.removeClass("open")
            })
        } else {
            o.slideDown(300, function () {
                i.addClass("open")
            })
        }
        t.stopPropagation(), t.preventDefault()
    })

    /*============================================
        Sliders
    ============================================*/

    // Home Slider
    $(".home-slider").each(function () {
        var id = $(this).attr("id");
        var sliderId = "#" + id;

        var homeSlider = new Swiper(sliderId, {
            speed: 700,
            autoplay: {
                delay: 3000
            },
            effect: "fade",
            pagination: true,

            pagination: {
                el: ".swiper-pagination",
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="' + className + '">' + "0" + (index + 1) + "</span>";
                },
            },

            scrollbar: {
                el: ".swiper-scrollbar"
            },
        })

    })

    // Category Slider
    var categorySlider1 = new Swiper("#category-slider-1", {
        speed: 400,
        loop: true,
        slidesPerView: 6,
        spaceBetween: 25,
        pagination: true,

        pagination: {
            el: "#category-slider-1-pagination",
            clickable: true,
        },

        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1
            },
            // when window width is >= 640px
            768: {
                slidesPerView: 3
            },
            // when window width is >= 640px
            992: {
                slidesPerView: 5
            },
            1200: {
                slidesPerView: 6
            }
        }
    })
    var categorySlider2 = new Swiper("#category-slider-2", {
        speed: 400,
        loop: true,
        slidesPerView: 5,
        spaceBetween: 25,
        pagination: true,

        pagination: {
            el: "#category-slider-2-pagination",
            clickable: true,
        },

        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1
            },
            // when window width is >= 640px
            768: {
                slidesPerView: 3
            },
            // when window width is >= 640px
            992: {
                slidesPerView: 4
            },
            1200: {
                slidesPerView: 5
            }
        }
    })

    // City Slider
    var citySlider1 = new Swiper("#city-slider-1", {
        speed: 400,
        loop: false,
        slidesPerView: 4,
        spaceBetween: 24,
        navigation: true,

        // Navigation arrows
        navigation: {
            nextEl: '#city-slider-btn-next',
            prevEl: '#city-slider-btn-prev',
        },

        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1
            },
            // when window width is >= 640px
            768: {
                slidesPerView: 3
            },
            // when window width is >= 640px
            992: {
                slidesPerView: 4
            },
        }
    })

    // Featured Slider
    var productSlider1 = new Swiper("#product-slider-1", {
        speed: 400,
        spaceBetween: 24,
        loop: true,
        pagination: true,

        pagination: {
            el: "#product-slider-1-pagination",
            clickable: true,
        },

        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1
            },
            // when window width is >= 400px
            400: {
                slidesPerView: 2
            },
            // when window width is >= 640px
            768: {
                slidesPerView: 2
            },
            // when window width is >= 640px
            992: {
                slidesPerView: 3
            }
        }
    });

    // testimonial Slider
    var testimonialSlider1 = new Swiper("#testimonial-slider-1", {
        speed: 400,
        spaceBetween: 25,
        loop: true,
        slidesPerView: 2,

        // Navigation arrows
        navigation: {
            nextEl: '#testimonial-slider-btn-next',
            prevEl: '#testimonial-slider-btn-prev',
        },

        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1
            },
            // when window width is >= 400px
            576: {
                slidesPerView: 2
            }
        }
    });
    var testimonialSlider2 = new Swiper("#testimonial-slider-2", {
        speed: 400,
        spaceBetween: 25,
        loop: true,
        slidesPerView: 1,
        effect: "creative",

        creativeEffect: {
          prev: {
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        },

        pagination: {
            el: "#testimonial-slider-2-pagination",
            clickable: true,
        }
    });

    // Product single slider
    var proSingleThumbs = new Swiper(".slider-thumbnails", {
        loop: true,
        spaceBetween: 24,
        slidesPerView: 5,
        breakpoints: {
            0: {
                slidesPerView: 2
            },
            576: {
                slidesPerView: 3
            },
            992: {
                slidesPerView: 4
            },
            1200: {
                slidesPerView: 5
            }
        }
    });
    var proSingleSlider = new Swiper(".product-single-slider", {
        loop: true,
        spaceBetween: 30,
        effect: "fade",
        pagination: true,

        // Navigation arrows
        navigation: {
            nextEl: ".slider-btn-next",
            prevEl: ".slider-btn-prev",
        },
        thumbs: {
            swiper: proSingleThumbs,
        },
    });
    
    // Product single slider
    var proThumb = new Swiper(".pro-thumbnails", {
        loop: true,
        spaceBetween: 24,
        slidesPerView: 5,
        breakpoints: {
            0: {
                slidesPerView: 2
            },
            480: {
                slidesPerView: 3
            },
            576: {
                slidesPerView: 4
            },
            992: {
                slidesPerView: 4
            },
            1200: {
                slidesPerView: 5
            }
        }
    });
    var proSingleSlider = new Swiper(".pro-single-slider", {
        loop: true,
        spaceBetween: 30,
        effect: "fade",
        pagination: true,

        // Navigation arrows
        navigation: {
            nextEl: ".pro-btn-next",
            prevEl: ".pro-btn-prev",
        },
        thumbs: {
            swiper: proThumb,
        },
    });

    /*============================================
        Pricing toggle
    ============================================*/
    $("#toggleSwitch").on("change", function (event) {
        if (event.currentTarget.checked) {
            $("#yearly").addClass("active");
            $("#monthly").removeClass("active");
        } else {
            $("#monthly").addClass("active");
            $("#yearly").removeClass("active");
        }
    })


    /*============================================
        Pricing show more toggle
    ============================================*/
    $(".pricing-list").each(function (i) {
        var list = $(this).children();

        if (list.length > 4) {
            this.insertAdjacentHTML('afterEnd', '<span class="show-more">Show More</span>');
            const showLink = $(this).next(".show-more");

            list.slice(4).toggle(300);

            showLink.on("click", function () {
                list.slice(4).toggle(300);

                showLink.html(showLink.html() === "Show More" ? "Show Less" : "Show More")
            })
        }
    })


    /*============================================
        Product single popup
    ============================================*/
    $(".lightbox-single").magnificPopup({
        type: "image",
        mainClass: 'mfp-with-zoom',
        gallery: {
            enabled: true
        }
    });


    /*============================================
        Youtube popup
    ============================================*/
    $(".youtube-popup").magnificPopup({
        disableOn: 300,
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    })


    /*============================================
        Go to top
    ============================================*/
    $(window).on("scroll", function () {
        // If window scroll down .active class will added to go-top
        var goTop = $(".go-top");

        if ($(window).scrollTop() >= 200) {
            goTop.addClass("active");
        } else {
            goTop.removeClass("active")
        }
    })
    $(".go-top").on("click", function (e) {
        $("html, body").animate({
            scrollTop: 0,
        }, 0);
    });


    /*============================================
        Lazyload image
    ============================================*/
    var lazyLoad = function () {
        window.lazySizesConfig = window.lazySizesConfig || {};
        window.lazySizesConfig.loadMode = 2;
        lazySizesConfig.preloadAfterLoad = true;
    }


    /*============================================
        Tooltip
    ============================================*/
    var tooltipTriggerList = [].slice.call($('[data-tooltip="tooltip"]'))

    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })


    /*============================================
        Aos animation
    ============================================*/
    AOS.init({
        easing: "ease-out",
        duration: 700,
        once: true
    });


    /*============================================
        Nice select
    ============================================*/
    $("select").niceSelect();

    var selectList = $(".nice-select .list")
    $(".nice-select .list").each(function () {
        var list = $(this).children();
        if (list.length > 5) {
            $(this).css({
                "height": "160px",
                "overflow-y": "scroll"
            })
        }
    })


    /*============================================
        Odometer
    ============================================*/
    $(".counter").counterUp({
        delay: 10,
        time: 1000
    });


    /*============================================
        Data picker
    ============================================*/
    $(".datepicker").datepicker({
        format: 'mm/dd/yyyy',
        startDate: '-3d',
        clearBtn: true
    });


    /*============================================
        Data tables
    ============================================*/
    var dataTable = function () {
        var dTable = $("#myTable");

        if (dTable.length) {
            dTable.DataTable()
        }
    }


    /*============================================
        Image upload
    ============================================*/
    var fileReader = function (input) {
        var regEx = new RegExp(/\.(gif|jpe?g|tiff?|png|webp|bmp)$/i);
        var errorMsg = $("#errorMsg");

        if (input.files && input.files[0] && regEx.test(input.value)) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('#imagePreview').css('background-image', 'url(' + e.target.result + ')');
                $('#imagePreview').hide();
                $('#imagePreview').fadeIn(650);
            };
            reader.readAsDataURL(input.files[0]);
        } else {
            errorMsg.html("Please upload a valid file type")
        }
    }
    $("#imageUpload").on("change", function () {
        fileReader(this);
    });


    /*============================================
        Cookiebar
    ============================================*/
    window.setTimeout(function () {
        $(".cookie-bar").addClass("show")
    }, 1000);
    $(".cookie-bar .btn").on("click", function () {
        $(".cookie-bar").removeClass("show")
    });

    /*============================================
        Footer date
    ============================================*/
    var date = new Date().getFullYear();
    $("#footerDate").text(date);


    /*============================================
        Document on ready
    ============================================*/
    $(document).ready(function () {
        lazyLoad(),
        dataTable(),
        mainMenu.init()
    })

    // $('.section-title .title').each(function(){
    //     var me = $(this), 
    //         t = me.text().split(' '),
    //         lastNameInArray = t[t.length - 1];
    //         console.log(lastNameInArray)
    //     me.html(t.join(' ') + '<span>'+ lastNameInArray + '</span>');
    // });

})(jQuery);