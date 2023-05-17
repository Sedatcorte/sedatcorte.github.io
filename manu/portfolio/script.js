//welcome inspiration
// https://dribbble.com/shots/5293081--X-S

$( document ).ready(function() {
  $('.multiple-items').slick({
	  infinite: true,
	  slidesToShow: 4,
	  slidesToScroll: 2
	});

  $(".prev").on("click", function(){
  	$(".slick-prev")[0].click();
  });

  $(".nxt").on("click", function(){
  	$(".slick-next")[0].click();
  });

  //$('.about-title').text('About me');
  //$('.about-title').text('私について');

  
  		screenSlick();

  $(window).resize(function(){
  		screenSlick();
   });

function screenSlick(){
	if ($(window).width() <= 720){	
			$('.multiple-items').slick('unslick');
			$('.multiple-items').slick({
			  infinite: true,
			  slidesToShow: 1,
			  slidesToScroll: 1
			});
		}else if ($(window).width() <= 950 && $(window).width() > 720){	
			$('.multiple-items').slick('unslick');
			$('.multiple-items').slick({
			  infinite: true,
			  slidesToShow: 3,
			  slidesToScroll: 2
			});
		}else if ($(window).width() >= 951){	
			$('.multiple-items').slick('unslick');
			$('.multiple-items').slick({
			  infinite: true,
			  slidesToShow: 4,
			  slidesToScroll: 2
			});
		}	
}


});