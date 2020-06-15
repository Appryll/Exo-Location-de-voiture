var app = {};

(function($){

"use strict";

	var $window =  $(window),
	$document = $(document); 

// menu burger
app.animations = function() {

	$("#menu-burger").click(function(){
		$("#rideau").slideToggle();
		$(this).toggleClass("menu-burger-background");
	});

};

app.background = function(){
    var imgs = ["./img/background.jpg", "./img/background2.jpg", "./img/background4.jpg"];
    var imgs_last_index = imgs.length -1;
    var compteur = 0;
    changeBackGround();

    function changeBackGround(){
        console.log(compteur);
        if(compteur < imgs_last_index){
            compteur++;
        }else{
            compteur = 0;
        }
        $("header").css("background-image", "url(" + imgs[compteur] + ")");
        setTimeout(changeBackGround, 15000);
    }

};

//carrousel

	app.loadScroll = function(){

		setTimeout(function(){
			$('.carousel').carousel('pause');
		},500);

		$window.scroll(function() {
			var scrollHeight = $(document).height();
			var scrollPosition = $(window).height() + $(window).scrollTop();
			if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
			 
	    		setTimeout(function(){
					$("#spinner").remove();
					$("#vehicules_to_be_loaded").each( function( index, element ){
				    	$(this).fadeIn(2000);
					});
				},1000);

			}
		});

	}

//textfooter

	app.textfooter = function(){

		$(".textfooter").hover(function(){
			$(this).animate({cursor:"pointer", 
						fontSize: "16px",
						height:"130px"}, 500);
		},

		function(){
			$(this).animate({fontSize:"12px"},500);
		});

	}
	
//imgfooter

	app.imgfooter = function(){

		$(".img").hover(function(){
			$(this).animate({opacity:"0"},600);
			$("iframe").animate({opacity:"1"},600);

	},

	function(){
		$(this).animate({opacity:"1"},6000);
		$("iframe").animate({opacity:"0"},6000);
	
	});
	}
	

	$document.ready(function(){
        app.animations();
        app.background();
		app.loadScroll();
		app.textfooter();
        app.imgfooter();
       
		
	});


})(jQuery);