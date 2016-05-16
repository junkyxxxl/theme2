
/**
  * Check the sectrion title is on viewport
  * 
  */

function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top + 30;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

$(document).ready(function() {
	"use strict";
	

    /* ========================================================================= */
    /*  Preloader
    /* ========================================================================= */

    $(window).on("load", function() {
        $("#preloader").slideUp("slow")
    });

    /* ========================================================================= */
    /*  Init WOW js for css3 animation
    /* ========================================================================= */

    var wow = new WOW({
        mobile: false // trigger animations on mobile devices (default is true)
    });
    wow.init();

	/* ========================================================================= */
	/*	Navigation
	/* ========================================================================= */

	$(".header-bottom").sticky({
		topSpacing: 0
	});

	// home slider
	$(".navbar-nav").singlePageNav({
		offset: $('.header-bottom').outerHeight(),
		filter: ':not(.external)',
		speed: 1200,
		currentClass: 'active',
		easing: 'easeInOutExpo',
		updateHash: false
	});

    $(".navigation .navbar-toggle").on("click", function() {
        $(this).toggleClass("active");
    });

    // home slider
    $(".home-slider").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        autoplay: true,
        smartSpeed: 800,
        autoplayHoverPause: true,
    });

	//portfolio filtering

	$(window).on("load", function() {
        var $container = $('.project-wrapper');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 5050,
                easing: 'easeInOutExpo',
                queue: false
            },
            masonry: {
                columnWidth: 0
            }
        });

        $(".work-filter a").on("click", function(){
            $(".work-filter .active").removeClass("active");
            $(this).addClass('active');
        
            var selector = $(this).attr("data-filter");
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 1250,
                    easing: 'easeInOutExpo',
                    queue: false
                }
             });
             return false;
        });
    });
	


    //lightbox setup

    //lightbox single image
    $(".img-single").magnificPopup({
        type: "image",
        gallery: {
            preload: [0,2],
            navigateByImgClick: true,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button
            tPrev: 'Previous (Left arrow key)', // title for left button
            tNext: 'Next (Right arrow key)', // title for right button
            tCounter: '<span class="mfp-counter">%curr% of %total%</span>' // markup of counter
        },
        removalDelay: 500, //delay removal by X to allow out-animation
          callbacks: {
            beforeOpen: function() {
              // just a hack that adds mfp-anim class to markup 
               this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
               this.st.mainClass = this.st.el.attr('data-effect');
            }
          },
        closeOnContentClick: true,
        midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
    });

    //lightbox image gallery
    $(".img-popup").magnificPopup({
        type: "image",
        gallery: {
            enabled: true,
            preload: [0,2],
            navigateByImgClick: true,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button
            tPrev: 'Previous (Left arrow key)', // title for left button
            tNext: 'Next (Right arrow key)', // title for right button
            tCounter: '<span class="mfp-counter">%curr% of %total%</span>' // markup of counter
        },
        removalDelay: 500, //delay removal by X to allow out-animation
          callbacks: {
            beforeOpen: function() {
              // just a hack that adds mfp-anim class to markup 
               this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
               this.st.mainClass = this.st.el.attr('data-effect');
            }
          },
        closeOnContentClick: true,
        midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
    });
    
    //lightbox ajax content
    $(".ajax-popup").magnificPopup({
        type: "ajax",
        gallery: {
            enabled: true,
            preload: [0,2],
            navigateByImgClick: true,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button
            tPrev: 'Previous (Left arrow key)', // title for left button
            tNext: 'Next (Right arrow key)', // title for right button
            tCounter: '<span class="mfp-counter">%curr% of %total%</span>' // markup of counter
        },
        removalDelay: 500, //delay removal by X to allow out-animation
          callbacks: {
            beforeOpen: function() {
              // just a hack that adds mfp-anim class to markup 
               this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
               this.st.mainClass = this.st.el.attr('data-effect');
            }
          },
        closeOnContentClick: true,
        midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
    });

    /* ========================================================================= */
    /*  Fun fatct
    /* ========================================================================= */

    $(".counter-item").appear(function () {
        $(".counter-item [data-to]").each(function () {
            var e = $(this).attr("data-to");
            $(this).delay(6e3).countTo({
                from: 50,
                to: e,
                speed: 3e3,
                refreshInterval: 50
            })
        })
    });

	/* ========================================================================= */
	/*	Section Title
	/* ========================================================================= */

    $(window).scroll(function () {
       $('.sec-head').each(function () {
            if (isScrolledIntoView(this) === true) {
                $(this).addClass('in-view')
            }else {
                $(this).removeClass('in-view')
            }
       });
    });


	/* ========================================================================= */
	/*	Testimonial
	/* ========================================================================= */

	$(".testimonial").owlCarousel({
		items: 1,
		loop: true,
		nav: true,
		dots: false,
		autoplay: true,
		smartSpeed: 800,
		autoplayTimeout: 2000,
		autoplayHoverPause: true,
		animateOut: 'slideOutDown',
		animateIn: 'flipInX'
	});

	/* ========================================================================= */
	/*	Parallax
	/* ========================================================================= */

    $(window).on("load", function() {
        if ($(window).width() > 1024) {
            $(".parallax1").parallax("50%", 0.5);
            $(".parallax2").parallax("50%", 0.5);
        }
    });

	/* ========================================================================= */
	/*	Contact Form
	/* ========================================================================= */
	
	$(".contact-form").validate({
		rules: {
			name: {
				required: true,
				minlength: 2
			},
            email: {
                required: true,
                email: true
            },
			subject: {
				required: true,
                minlength: 2
			},
			message: {
				required: true,
                minlength: 2
			}
		},
		messages: {
			name: {
				required: "come on, you have a name don't you?",
				minlength: "your name must consist of at least 2 characters"
			},
            email: {
                required: "no email, no support"
            },
			subject: {
				required: "you have a reason to contact, write it here",
                minlength: "thats all? really?"
			},
			message: {
				required: "um...yea, you have to write something to send this form.",
				minlength: "thats all? really?"
			}
		},
		submitHandler: function(form) {
			$(form).ajaxSubmit({
				type:"POST",
				data: $(form).serialize(),
				url:"mail.php",
				success: function() {
					$(".contact-form").fadeTo( "slow", 1, function() {
                        $(".contact-form").resetForm();
						$(".success").slideDown("slow");
					});
				},
				error: function() {
					$(".contact-form").fadeTo( "slow", 1, function() {
						$(".error").slideDown("slow");
					});
				}
			});
		},
        errorPlacement: function(error, element) {
            element.after(error);
            error.hide().slideDown();
        }
	});

    /* ========================================================================= */
    /*  Twitter Feed
    /* ========================================================================= */
    
    $(".tweet-feed").twittie({
        dateFormat: "%b. %d, %Y",
        template: '{{tweet}} <div class="twieet-date"><i class="fa fa-twitter"></i> {{date}}</div>',
        count: 4
    });
    

    /* ========================================================================= */
    /*  Blog post Gallery
    /* ========================================================================= */

    $(".post-gallery").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        autoHeight: true,
        autoplay: true,
        smartSpeed: 800,
        autoplayHoverPause: true,
    });

    /* ========================================================================= */
    /*  Similar Post Carousel
    /* ========================================================================= */

    $(".similar-post").owlCarousel({
        items: 3,
        loop: true,
        nav: true,
        autoHeight: true,
        autoplay: true,
        margin: 20,
        smartSpeed: 800,
        autoplayHoverPause: true,
        responsive : {
            // breakpoint from 0 up
            0 : {
                items: 1
            },
            // breakpoint from 480 up
            480 : {
                items: 1
            },
            // breakpoint from 768 up
            768 : {
                items: 2
            },
            // breakpoint from 768 up
            1050 : {
                items: 3
            }
        }
    });

    /* ========================================================================= */
    /*  Next Prev Post
    /* ========================================================================= */

    $(".previous-post").on("mouseover", function() {
        $(this).addClass("opened");
    });

    $(".previous-post").on("mouseleave", function() {
        $(this).removeClass("opened");
    });

    $(".next-post").on("mouseover", function() {
        $(this).addClass("opened");
    });

    $(".next-post").on("mouseleave", function() {
        $(this).removeClass("opened");
    });

    /* ========================================================================= */
    /*  jFlickr Feed
    /* ========================================================================= */

    $(".flickr-feed").jflickrfeed({
        limit: 9,
        qstrings: {
            id: '114653435@N05'
        },
        itemTemplate:
        '<li>' +
            '<a class="flickr-img" data-effect="mfp-3d-unfold" href="{{image_b}}" title="{{title}}">' +
                '<img src="{{image_m}}" alt="{{title}}">' +
            '</a>' +
        '</li>'
    }, function(data) {
        $(".flickr-img").magnificPopup({
            type: "image",
            gallery: {
                enabled: true,
                preload: [0,2],
                navigateByImgClick: true,
                arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button
                tPrev: 'Previous (Left arrow key)', // title for left button
                tNext: 'Next (Right arrow key)', // title for right button
                tCounter: '<span class="mfp-counter">%curr% of %total%</span>' // markup of counter
            },
            removalDelay: 500, //delay removal by X to allow out-animation
              callbacks: {
                beforeOpen: function() {
                  // just a hack that adds mfp-anim class to markup 
                   this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                   this.st.mainClass = this.st.el.attr('data-effect');
                }
              },
            closeOnContentClick: true,
            midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
        });
    });


	/* ========================================================================= */
	/*	Back to Top
	/* ========================================================================= */
	
	
    $(window).scroll(function () {
        if ($(window).scrollTop() > 400) {
            $("#back-top").fadeIn(200)
        } else {
            $("#back-top").fadeOut(200)
        }
    });
    $("#back-top").click(function () {
        $("html, body").stop().animate({
            scrollTop: 0
        }, 1500, "easeInOutExpo")
    });

});


/* ========================================================================= */
/*	Google Map
/* ========================================================================= */

// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions

    var latlong = new google.maps.LatLng(23.752159, 90.384893);

    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 16,
        disableDefaultUI: true,
        scrollwheel: false,
        navigationControl: true,
        mapTypeControl: true,
        scaleControl: true,
        draggable: true,
        // The latitude and longitude to center the map (always required)
        center: latlong,
        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
        styles:[
        	    {
        	        "featureType": "administrative",
        	        "elementType": "labels.text.fill",
        	        "stylers": [
        	            {
        	                "color": "#0c0b0b"
        	            }
        	        ]
        	    },
        	    {
        	        "featureType": "landscape",
        	        "elementType": "all",
        	        "stylers": [
        	            {
        	                "color": "#f2f2f2"
        	            }
        	        ]
        	    },
        	    {
        	        "featureType": "poi",
        	        "elementType": "all",
        	        "stylers": [
        	            {
        	                "visibility": "off"
        	            }
        	        ]
        	    },
        	    {
        	        "featureType": "poi.attraction",
        	        "elementType": "geometry.fill",
        	        "stylers": [
        	            {
        	                "visibility": "off"
        	            },
        	            {
        	                "color": "#ff0000"
        	            }
        	        ]
        	    },
        	    {
        	        "featureType": "poi.attraction",
        	        "elementType": "labels.text.fill",
        	        "stylers": [
        	            {
        	                "visibility": "on"
        	            },
        	            {
        	                "color": "#000000"
        	            }
        	        ]
        	    },
        	    {
        	        "featureType": "poi.attraction",
        	        "elementType": "labels.text.stroke",
        	        "stylers": [
        	            {
        	                "visibility": "off"
        	            }
        	        ]
        	    },
        	    {
        	        "featureType": "poi.business",
        	        "elementType": "labels.text",
        	        "stylers": [
        	            {
        	                "visibility": "on"
        	            },
        	            {
        	                "color": "#ff0000"
        	            }
        	        ]
        	    },
        	    {
        	        "featureType": "poi.business",
        	        "elementType": "labels.text.fill",
        	        "stylers": [
        	            {
        	                "visibility": "on"
        	            },
        	            {
        	                "color": "#000000"
        	            }
        	        ]
        	    },
        	    {
        	        "featureType": "poi.business",
        	        "elementType": "labels.text.stroke",
        	        "stylers": [
        	            {
        	                "visibility": "off"
        	            }
        	        ]
        	    },
        	    {
        	        "featureType": "poi.government",
        	        "elementType": "all",
        	        "stylers": [
        	            {
        	                "visibility": "on"
        	            },
        	            {
        	                "saturation": "-100"
        	            }
        	        ]
        	    },
        	    {
        	        "featureType": "poi.medical",
        	        "elementType": "all",
        	        "stylers": [
        	            {
        	                "visibility": "on"
        	            },
        	            {
        	                "saturation": "-100"
        	            }
        	        ]
        	    },
        	    {
        	        "featureType": "poi.park",
        	        "elementType": "all",
        	        "stylers": [
        	            {
        	                "visibility": "on"
        	            },
        	            {
        	                "saturation": "-100"
        	            },
        	            {
        	                "lightness": "30"
        	            }
        	        ]
        	    },
        	    {
        	        "featureType": "poi.place_of_worship",
        	        "elementType": "all",
        	        "stylers": [
        	            {
        	                "visibility": "on"
        	            }
        	        ]
        	    },
        	    {
        	        "featureType": "poi.place_of_worship",
        	        "elementType": "labels.text",
        	        "stylers": [
        	            {
        	                "visibility": "on"
        	            }
        	        ]
        	    },
        	    {
        	        "featureType": "poi.place_of_worship",
        	        "elementType": "labels.text.fill",
        	        "stylers": [
        	            {
        	                "visibility": "on"
        	            },
        	            {
        	                "color": "#ff0000"
        	            }
        	        ]
        	    },
        	    {
        	        "featureType": "poi.place_of_worship",
        	        "elementType": "labels.text.stroke",
        	        "stylers": [
        	            {
        	                "visibility": "off"
        	            }
        	        ]
        	    },
        	    {
        	        "featureType": "poi.place_of_worship",
        	        "elementType": "labels.icon",
        	        "stylers": [
        	            {
        	                "visibility": "on"
        	            }
        	        ]
        	    },
        	    {
        	        "featureType": "poi.school",
        	        "elementType": "all",
        	        "stylers": [
        	            {
        	                "visibility": "on"
        	            },
        	            {
        	                "saturation": "-100"
        	            }
        	        ]
        	    },
        	    {
        	        "featureType": "poi.sports_complex",
        	        "elementType": "geometry.fill",
        	        "stylers": [
        	            {
        	                "visibility": "on"
        	            },
        	            {
        	                "saturation": "-100"
        	            }
        	        ]
        	    },
        	    {
        	        "featureType": "poi.sports_complex",
        	        "elementType": "labels.text.fill",
        	        "stylers": [
        	            {
        	                "visibility": "on"
        	            },
        	            {
        	                "color": "#000000"
        	            }
        	        ]
        	    },
        	    {
        	        "featureType": "poi.sports_complex",
        	        "elementType": "labels.text.stroke",
        	        "stylers": [
        	            {
        	                "visibility": "off"
        	            }
        	        ]
        	    },
        	    {
        	        "featureType": "road",
        	        "elementType": "all",
        	        "stylers": [
        	            {
        	                "saturation": -100
        	            },
        	            {
        	                "lightness": 45
        	            }
        	        ]
        	    },
        	    {
        	        "featureType": "road",
        	        "elementType": "labels.text.fill",
        	        "stylers": [
        	            {
        	                "color": "#090909"
        	            }
        	        ]
        	    },
        	    {
        	        "featureType": "road.highway",
        	        "elementType": "all",
        	        "stylers": [
        	            {
        	                "visibility": "simplified"
        	            }
        	        ]
        	    },
        	    {
        	        "featureType": "road.arterial",
        	        "elementType": "labels.icon",
        	        "stylers": [
        	            {
        	                "visibility": "off"
        	            }
        	        ]
        	    },
        	    {
        	        "featureType": "transit",
        	        "elementType": "all",
        	        "stylers": [
        	            {
        	                "visibility": "off"
        	            }
        	        ]
        	    },
        	    {
        	        "featureType": "transit.line",
        	        "elementType": "geometry.fill",
        	        "stylers": [
        	            {
        	                "visibility": "on"
        	            },
        	            {
        	                "weight": "1"
        	            }
        	        ]
        	    },
        	    {
        	        "featureType": "transit.station.airport",
        	        "elementType": "geometry",
        	        "stylers": [
        	            {
        	                "visibility": "on"
        	            }
        	        ]
        	    },
        	    {
        	        "featureType": "transit.station.rail",
        	        "elementType": "geometry.fill",
        	        "stylers": [
        	            {
        	                "visibility": "on"
        	            },
        	            {
        	                "color": "#ff0000"
        	            },
        	            {
        	                "weight": "1"
        	            }
        	        ]
        	    },
        	    {
        	        "featureType": "transit.station.rail",
        	        "elementType": "labels.text",
        	        "stylers": [
        	            {
        	                "visibility": "on"
        	            },
        	            {
        	                "hue": "#ff0000"
        	            }
        	        ]
        	    },
        	    {
        	        "featureType": "transit.station.rail",
        	        "elementType": "labels.icon",
        	        "stylers": [
        	            {
        	                "visibility": "on"
        	            }
        	        ]
        	    },
        	    {
        	        "featureType": "water",
        	        "elementType": "all",
        	        "stylers": [
        	            {
        	                "color": "#d4e4eb"
        	            },
        	            {
        	                "visibility": "on"
        	            }
        	        ]
        	    },
        	    {
        	        "featureType": "water",
        	        "elementType": "geometry.fill",
        	        "stylers": [
        	            {
        	                "visibility": "on"
        	            },
        	            {
        	                "color": "#fef7f7"
        	            }
        	        ]
        	    },
        	    {
        	        "featureType": "water",
        	        "elementType": "labels.text.fill",
        	        "stylers": [
        	            {
        	                "color": "#9b7f7f"
        	            }
        	        ]
        	    },
        	    {
        	        "featureType": "water",
        	        "elementType": "labels.text.stroke",
        	        "stylers": [
        	            {
        	                "color": "#fef7f7"
        	            }
        	        ]
        	    }
        	]
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map-canvas');

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Let's also add a marker while we're at it
    var marker = new google.maps.Marker({
        position: latlong,
        map: map,
    	icon: 'img/icons/map.png',
        title: 'Vertex!'
    });
}