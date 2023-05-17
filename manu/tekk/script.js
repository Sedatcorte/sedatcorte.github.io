$(document).ready(function(){
	
	var $ryu = $('#ryu');
	
	var $ControlBtn = $('.controls-ctn button');
	
	$ControlBtn.click(function(){
		var animName = $(this).attr('id');
		var animSpritePos = $(this).attr('data-pos');
		var timeToCompleteAnim = $(this).attr('data-time');
		fight(animName,animSpritePos,timeToCompleteAnim);
	});
	
	function fight(animName,animSpritePos,timeToCompleteAnim){
		$ryu.css('background-position',animSpritePos);
		$ryu.addClass(animName);
		setTimeout(function(){
			$ryu.removeClass(animName).css('background-position','0px 0px');
		},timeToCompleteAnim);
	}
	
});