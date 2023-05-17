$(document).ready(function() {
  $('.ryu').mouseenter(function() {
    $('.ryu-still').hide();
    $('.ryu-ready').show();
  })
    .mouseleave(function() {
    $('.ryu-ready').hide();
    $('.ryu-still').show();
  })
  .mousedown(function() {
    playHadouken();
    $('.ryu-ready').hide();
    $('.ryu-still').hide();
    $('.ryu-cool').hide();
    $('.ryu-throwing').show();
    $('.hadouken').show();
    $('.hadouken').finish().show()
        .animate(
        {'left': '300px'},
        500,
        function() {
          $(this).hide();
          $(this).css('left', '-212px');
        }
    );
  })
  .mouseup(function() {
    $('.ryu-throwing').hide();
    $('.ryu-ready').show();
  })
  
  $('body').keydown(function(e) {
		if (e.which == 88) {
			$('.ryu-still').hide();
			$('.ryu-ready').hide();
            $('.ryu-throwing').hide();
			$('.ryu-cool').show();
			$('.hadouken').hide();
		}
	})
	$('body').keyup(function(e) {
		if (e.which == 88) {
			$('.ryu-still').show();
			$('.ryu-ready').hide();
			$('.ryu-cool').hide();
            $('.ryu-throwing').hide();
			$('.hadouken').hide();

		}
	})
    
    $('body').keydown(function(e) {
		if (e.which == 75) {
			$('.ryu-still').hide();
			$('.ryu-ready').show();
			$('.ryu-cool').hide();
            $('.easteregg').show();
			$('.hadouken').hide();
            $('.main').css({'background-color': 'black'});
		}
	})
   $('body').keyup(function(e) {
		if (e.which == 75) {
			$('.ryu-still').show();
			$('.ryu-ready').hide();
			$('.ryu-cool').hide();
            $('.easteregg').hide();
			$('.hadouken').hide();
            $('.main').css({'background-color': 'white'});
		}
	})
   playFight ();
});

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}

function playFight () {
    $('#fight-sound')[0].volume = 0.1;
    $('#fight-sound')[0].load();
    $('#fight-sound')[0].play();
}