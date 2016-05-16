
//start functions on page ready/change

jQuery(document).on("ready page:change", function() {
	
	if (navigator.userAgent.match(/Android|IEMobile|BlackBerry|iPhone|iPad|iPod|Opera Mini/i)) {
		
	}else{
		nice_scrollbar()
	}
	set_valign()
	charts()
	autocollapse();
	
});




// LOADER START/STOP - function for loader image. When page is fully load i hide loader image in html div <div class='loader'>
jQuery(window).load(function() {
	
	
	jQuery(".loader_container").fadeOut(1000).hide(); // fadeOut for loading animation ( preloader )
	jQuery(".loader_container").css('z-index','-1');
	jQuery('html').css('overflow','visible');
	

	init_tooltipster()
	menu_top()
	set_valign()
	performance()
	parallax()
	colorbox_images()
	owl()
	mapStart()
	validate_contact_form()
	social_plugin()
	nav()
	autocollapse();
	setInterval(set_valign,15)
});


// autocollapse top menu if do not fit in window
function autocollapse() {
	'use strict';
    var navbar = jQuery('#autocollapse');
	var nav_hover = jQuery('.navbar-collapse');
    navbar.removeClass('collapsed'); 
	if(navbar.innerHeight() > 80 || jQuery(window).width() <= 800){ 
        navbar.addClass('collapsed');
		nav_hover.removeClass('navbar-hover');
	}else{
		navbar.removeClass('collapsed');
		if ( !(nav_hover.hasClass('navbar-hover')) ){
			nav_hover.addClass('navbar-hover'); 
		}
	}
};


//NAVIGATION WITH SLIDE SCROLL PLUGIN - for more information check http://github.com/davist11/jQuery-One-Page-Nav
function nav(){
	jQuery('.nav').onePageNav({
	    currentClass: 'current',
	    changeHash: false,
	    scrollSpeed: 750,
	    scrollThreshold: 0.5,
	    filter: '',
	    easing: 'swing',
	    begin: function() {
	        //I get fired when the animation is starting
	    },
	    end: function() {
	        //I get fired when the animation is ending
	    },
	    scrollChange: function($currentListItem) {
	        //I get fired when you enter a section and I pass the list item of the section
	    }
	});
}



// function that init scrollReveal plugin https://github.com/julianlloyd/scrollReveal.js/tree/master
function performance(){
	window.sr = new scrollReveal({
		reset: true,
		vFactor:  0.30,	
	});	
}


// CUSTOM SCROLL BAR PLUGIN - this plugin put custom right scroll for browsers. If You want change behavior, 
// look at https://github.com/inuyaksa/jquery.nicescroll and in file jquery.nicescroll.js 
function nice_scrollbar(){
	jQuery("body").niceScroll({cursorcolor:"rgba(203,32,39,0.4)"});	
}

//function for init tooltipster plugin - more info http://iamceege.github.io/tooltipster/
function init_tooltipster(){
	jQuery('.tooltips').tooltipster({
		theme: 'tooltipster-punk',
		offsetY:-20,
		animation: 'grow',
		position: 'bottom'
	})
	
	jQuery('.tooltips-logo').tooltipster({
		theme: 'tooltipster-punk',
		offsetY:0,
		animation: 'grow'
	})
	
	jQuery('.tooltips-fb').tooltipster({
		theme: 'tooltipster-fb',
		offsetY:-20,
		animation: 'grow'
	})
	
	jQuery('.tooltips-tw').tooltipster({
		theme: 'tooltipster-tw',
		offsetY:-20,
		animation: 'grow'
	})
	
	jQuery('.tooltips-gp').tooltipster({
		theme: 'tooltipster-gp',
		offsetY:-20,
		animation: 'grow'
	})
	
	jQuery('.tooltips-p').tooltipster({
		theme: 'tooltipster-p',
		offsetY:-20,
		animation: 'grow'
	})
	
	jQuery('.tooltips-img').tooltipster({
		theme: 'tooltipster-punk',
		offsetY:0,
		animation: 'grow'
	})
	
	jQuery('.tooltips-news').tooltipster({
		theme: 'tooltipster-punk',
		offsetY:0,
		animation: 'grow'
	})
}



// CUSTOM BEHAVIOR FOR TOP NAV MENU on main page
function menu_top(){ 

	var d = jQuery('.s1')
	var nav = jQuery('.navbar-default')

	jQuery(window).scroll(function () {
	
		var offset = d.offset();
	
	    if ( jQuery(this).scrollTop() > offset.top + 100) {
	        
			nav.css({
				//'box-shadow' : '0px 2px 0px 0px rgba(0,0,0,0.05)',
				'background' : 'rgba(17,19,25,0.94)',
				'padding' : '0px 0px 0px 0px'
			})
			
	    } else {
	        
			nav.css({
				'background' : 'rgba(0,0,0,0)',
				'padding' : '4px 0px 4px 0px'
			});
			
	    }
	});
}


// small plugin for vertical align in middle
$.fn.vAlignDiv = function(div) {
  return this.each(function(i){
  var ah = jQuery(this).height();
  var ph = jQuery(div).height();
  var mh = (ph - ah) / 2;
  if(mh>0) {
    jQuery(this).css('margin-top', mh);
  } else {
    jQuery(this).css('margin-top', 0);
  }
})
}


// set contenten always verticaly aligned on middle
function set_valign(){
	jQuery('.s1-title-container').vAlignDiv('.s1')
}


//parallax effect for images https://github.com/IanLunn/jQuery-Parallax
function parallax(){
	
	//.parallax(xPosition, speedFactor, outerHeight) options:
	//xPosition - Horizontal position of the element
	//inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
	//outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
	jQuery('.s1-pattern').parallax("50%", 0.1);
	jQuery('.s6').parallax("50%", 0.1);
	jQuery('.s12').parallax("50%", 0.1);
}

/// colorbox for images in modal box  https://github.com/jackmoore/colorbox
function colorbox_images(){
	jQuery('.colorbox').colorbox({
		maxWidth:'95%', 
		maxHeight:'95%',
		closeButton:false,
		fixed:true,
	});
}


//owl carousel plugin for logos and reviews http://owlgraphic.com/owlcarousel/'
function owl(){
	
	//owl-portfolio
	jQuery('.owl-portfolio').owlCarousel({
		  autoPlay: 6000, //Set AutoPlay to 6 seconds
		  pagination:false,
		  singleItem:true
	});
	
	//owl-reviews
	jQuery('.owl-reviews').owlCarousel({
		  autoPlay: 4000, //Set AutoPlay to 6 seconds
		  pagination:false,
		  singleItem:true
	});
	
	//owl-logotypes
	jQuery('.owl-logotypes').owlCarousel({
		  autoPlay: 3000, //Set AutoPlay to 3 seconds
		  pagination:false,
		  //how many items display for browser width >= X
	      itemsCustom : [
		        [0, 1],
		        [450, 2],
		        [600, 3],
		        [700, 4],
		        [1000, 4],
				[1060, 5],
		        [1200, 4],
		        [1400, 5],
		        [1600, 6],
				[1800, 6]
		      ],
	});
}

//plugin for create line chart http://www.chartjs.org/
function charts(){
	
		var randomScalingFactor = [163,432,132,65,46]

		var barChartData = {
			labels : ["HTML PROJECTS","RUBY ON RAILS","WORDPRESS","JQUERY","SOCIAL NETWORKS"],
			datasets : [
				{
					//colors for each bar
					fillColor : ["rgba(217,15,48,1)","#373a4a","rgba(217,15,48,1)","#373a4a","rgba(217,15,48,1)"],
					strokeColor : "rgba(220,220,220,0)",
					highlightFill: "rgba(220,220,220,0.75)",
					highlightStroke: "rgba(220,220,220,0)",
					// data get from randomScalingFactor array
					data : [randomScalingFactor[0],randomScalingFactor[1],randomScalingFactor[2],randomScalingFactor[3],randomScalingFactor[4]]
				},
				
			]

		}
		//create chart on load
		window.onload = function(){
			
			if ( jQuery(window).width() <= 660) {
				 jQuery('#canvas').attr('height',400)
			}
			
			var ctx = document.getElementById("canvas").getContext("2d");
			window.myBar = new Chart(ctx).Bar(barChartData, {
				//options for chartnew.js. Full documentation in https://github.com/FVANCOP/ChartNew.js/wiki 
				responsive: true,
				scaleOverride: true, scaleStartValue: 0, scaleStepWidth: 50, scaleSteps: 10,
				inGraphDataShow:true,
				inGraphDataFontFamily: 'Raleway',
				inGraphDataFontStyle: 'bold',
				inGraphDataFontSize: 18,
				inGraphDataVAlign: 'bottom',
				inGraphDataPaddingY: 5,
				inGraphDataFontColor: '#ffffff',
				scaleFontFamily: 'Raleway',
				scaleFontColor: '#abb2c4',
				scaleFontStyle: 'bold',
				yAxisLeft:false,
			});
		}
}


// google maps with setted coordins and custom stylers 
function mapStart(){   
	var axis = new google.maps.LatLng(52.1991917,21.0326114);
	var options = {
    zoom: 13,
    center: axis,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
	scrollwheel: false,
	
	}
	
	
	var styles = [
	  {
	    stylers: [
	      { saturation: -100 },
		  { "lightness": 0 },	
	    ]
	  }
	]
	var gmap = new google.maps.Map(document.getElementById("gmap"), options);
	
	var marker = new google.maps.Marker({
	      position: axis,
	      map: gmap,
	      title: 'Hello World!'
	});
    gmap.setOptions({styles: styles});
	 
};



/* NOTY notifications plugin settings */
// generate function that can be used when user click on button or submit something http://ned.im/noty/  WHOLE options can (jQ and CSS) be changed in default.js 
function generate_1(type,text) {
  	var n = noty({
  		text: text,
  		type: type,
		timeout : 5000,
        dismissQueue: true,
		maxVisible: 5,
  		layout: 'center',
  		theme: 'defaultTheme'
  	});
}


//validation for contact form https://github.com/chriso/validator.js
function validate_contact_form(){
	
	
	jQuery('.validate-contact').submit(function(event){
		
		var email_ = jQuery('.contact-email').val();
		var sender_ = jQuery('.contact-sender').val();
		var content_ = jQuery('.contact-content').val();
		//validate email in contact form
		if ( validator.isEmail( jQuery('.contact-email').val()  ) ){
			
		}else{
			generate_1('error', 'Email adress in not valid <br> Please write valid email adress');
			event.preventDefault();
		}
		
		//validate name in contact form
		if (validator.isAlphanumeric( jQuery('.contact-sender').val()  ) ){
			
		}else{
			generate_1('error', 'Name can only contain letters and numbers');
			event.preventDefault();
		}
		
		//if everything is valid, run Your sending email function
		if ( validator.isAlphanumeric( jQuery('.contact-sender').val() ) && validator.isEmail( jQuery('.contact-email').val() ) &&  jQuery('.contact-content').val() !=''  ){
			generate_1('success', 'Thank You for Contact with Us');
			//console.log('success validate')
			
			jQuery.ajax({
			       url: "mails.php", 
			       type: "post", //can be post or get
			       data: {email:email_ , name:sender_ , message:content_}, 
			       success: function(){
						//console.log('success ajax')
						jQuery('.contact-email').val('') ;
						jQuery('.contact-sender').val('') ;
						jQuery('.contact-content').val('');
			       }
			});
			event.preventDefault();
		}
	});
}

// plugin for social buttons behavior https://github.com/sonnyt/prettySocial
function social_plugin(){
	// social plugin for sharing Your page on social media */
	
	// IN HTML FILE, use:
	// data-url= "" - for url to share
	// data-title= "" - for title in shared element
	// data-description= "" - for description in shared element
	// data-media="" - for og:image in shared element
	$('.prettySocial').prettySocial();
}











