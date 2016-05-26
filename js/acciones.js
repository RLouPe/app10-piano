// JavaScript Document

var audio;
$(document).ready(function(e) {
	
    document.addEventListener("deviceready",function(){
		
		audio = window.plugins.LowLatencyAudio;
		
		audio.preloadFX('do', 'audio/DO.mp3',function(msg){},function(msg){alert('Error: ' + msg ); }); 
		audio.preloadFX('re', 'audio/RE.mp3',function(msg){},function(msg){alert('Error: ' + msg ); });
		audio.preloadFX('mi', 'audio/MI.mp3',function(msg){},function(msg){alert('Error: ' + msg ); });
		audio.preloadFX('fa', 'audio/FA.mp3',function(msg){},function(msg){alert('Error: ' + msg ); });
		audio.preloadFX('sol', 'audio/SOL.mp3',function(msg){},function(msg){alert('Error: ' + msg ); });
		audio.preloadFX('la', 'audio/LA.mp3',function(msg){},function(msg){alert('Error: ' + msg ); });
		audio.preloadFX('si', 'audio/SI.mp3',function(msg){},function(msg){alert('Error: ' + msg ); });
		
		$('.nota').bind('touchstart' ,function(){
			$(this).addClass('tocada');
			audio.play($(this).attr('id'));
		}).bind('touchend', function(){
			$(this).removeClass('tocada');
		});
		});
});