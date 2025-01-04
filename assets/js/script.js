!(function($) {
    'use strict';

    // Preloader
    $(window).on("load", function() {
        $("#preLoader").fadeOut(500);
    })

    // Navbar Toggle Butoon
    $(".navbar-toggler").on("click", function() {
        $(this).toggleClass("active");
    });

    // Go to Top
    $(window).on("scroll", function() {
        // If window scroll down .active class will added to go-top
        var goTop = $(".go-top");
        if ($(window).scrollTop() >= 200) {
            goTop.addClass("active");
        } else {
            goTop.removeClass("active")
        }
    })
    $(".go-top").on("click", function(e) {
        $("html, body").animate({
            scrollTop: 0,
        }, 0);
    });

    // Image to background image
    var bgImage = $(".bg-img")
    bgImage.each(function() {
        var el = $(this),
            src = el.attr("data-bg-img");

        el.css({
            "background-image": "url(" + src + ")",
            "background-repeat": "no-repeat"
        });
    });

    // Lazy-load Image
    function lazyLoad() {
        window.lazySizesConfig = window.lazySizesConfig || {};
        window.lazySizesConfig.loadMode = 2;
        lazySizesConfig.preloadAfterLoad = true;
    }
    $(document).ready(function() {
        lazyLoad();
    })


    // 13. Smooth Scroll Js
    function smoothSctoll() {
        $('a.smooth').on('click', function(event) {
            var target = $(this.getAttribute('href'));
            if (target.length) {
                event.preventDefault();
                $('html, body').stop().animate({
                    scrollTop: target.offset().top - -60
                }, 1500);
            }
        });
    }
    smoothSctoll();

    gsap.registerPlugin(ScrollTrigger, ScrollSmoother, TweenMax, ScrollToPlugin);

    gsap.config({
        nullTargetWarn: false,
    });


    let smoother = ScrollSmoother.create({
        smooth: 2,
        effects: true,
        smoothTouch: 0.1,
        normalizeScroll: false,
        ignoreMobileResize: true,
    });

    if ($('.char_anim').length > 0) {
        // 25. Title Animation
        let char_come = gsap.utils.toArray(".char_anim");
        char_come.forEach(splitTextLine => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: splitTextLine,
                    start: 'top 90%',
                    end: 'bottom 60%',
                    scrub: false,
                    markers: false,
                    toggleActions: 'play none none none'
                }
            });

            const itemSplitted = new SplitText(splitTextLine, {
                type: "chars, words"
            });
            gsap.set(splitTextLine, {
                perspective: 300
            });
            itemSplitted.split({
                type: "chars, words"
            })
            tl.from(itemSplitted.chars, {
                duration: 1,
                delay: 0.5,
                x: 100,
                autoAlpha: 0,
                stagger: 0.05
            });
        });
    }

    if ($('.hero-img-anim').length > 0) {
        // inner-page-animation
        let t2 = gsap.timeline({
            scrollTrigger: {
                trigger: ".hero-img-anim",
                start: "top 100%",
            }
        })
        t2.from(".img", {
            y: 100,
            duration: 1
        })
    }


    if ($('.inner-img-anim').length > 0) {
        // inner-page-animation
        let t1 = gsap.timeline({
            scrollTrigger: {
                trigger: ".inner-img-anim",
                start: "top 100%",
            }
        })
        t1.from(".img1", {
            y: 100,
            opacity: 0,
            duration: 1
        })
        t1.from(".img2", {
            y: 100,
            opacity: 0,
            duration: 1
        })
    }

    // zoom in
    $(".anim-zoomin").each(function() {

        // Add wrap <div>.
        $(this).wrap('<div class="anim-zoomin-wrap"></div>');

        // Add overflow hidden.
        $(".anim-zoomin-wrap").css({
            "overflow": "hidden"
        })

        var $this = $(this);
        var $asiWrap = $this.parents(".anim-zoomin-wrap");

        let tp_ZoomIn = gsap.timeline({
            scrollTrigger: {
                trigger: $asiWrap,
                start: "top 100%",
                markers: false,
            }
        });
        tp_ZoomIn.from($this, {
            duration: 1.5,
            autoAlpha: 0,
            scale: 1.2,
            ease: Power2.easeOut,
            clearProps: "all"
        });

    });

})(jQuery);