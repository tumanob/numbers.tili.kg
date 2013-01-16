 var number;
 
 nText = new Array(
 {"en":"text1","kg":"text2","ru":"text2"},
 {"en":"One","kg":"Бир","ru":"Один"},
 {"en":"Two","kg":"Эки","ru":"Два"},
 {"en":"Three","kg":"үч","ru":"Три"},
 {"en":"Four","kg":"Төрт","ru":"Четыре"},
 {"en":"Five","kg":"Беш","ru":"Пять"},
 {"en":"Six","kg":"Алты","ru":"Шесть"},
 {"en":"Seven","kg":"Жети","ru":"Семь"},
 {"en":"Eight","kg":"Сегиз","ru":"Восемь"},
 {"en":"Nine","kg":"Тогуз","ru":"Девять"},
 {"en":"Ten","kg":"Он","ru":"Десять"},
 {"en":"five","kg":"беш","ru":"пять"}
 );
 
 
 
// Put your custom code here
$('document').ready(function () {

	 number = 1;

	 
    $('#play').click(function(){  
			PlaySound(number);

	  });   
	  
      $('#next').click(function(){  
		  number=number+1;
  			if(number<=10 && number>0){
			ChangeImage(number);
			PlaySound(number);
			ChangeText(number);			
			
		}
		else 
		{
			number=number-1;
		}
			
  	  });  
	  
      $('#prev').click(function(){  
		  number=number-1;
  			if(number<=10 && number>0){
			ChangeImage(number);
			PlaySound(number);
			ChangeText(number);	
		}
		else
		{
			number=number+1;
		}
  	  });   
	  
	   var PlaySound = function($param) { 
	
		  // $.playSound('assets/'+$param+'.mp3'); 
		    
	   			playAudio('assets/'+$param+'.mp3');
	   }; 
	   
	   var ChangeImage = function($param) {   $('#numberimage').attr("src", 'assets/'+$param+'.png');   }; 
	   
	   var ChangeText = function($param) {
		  
		   $('#ennum').replaceWith('<h3 id="ennum">'+nText[$param].en+'</h3>');
		   $('#kgnum').replaceWith('<h3 id="kgnum">'+nText[$param].kg+'</h3>');
		   $('#runum').replaceWith('<h3 id="runum">'+nText[$param].ru+'</h3>');  
	   		
     	}; 
 });
 
 





 /* -----------  --------------- */

 

 (function($){

   $.extend({
     playSound: function(){
       return $("<embed src='"+arguments[0]+"' hidden='true' autostart='true' loop='false' class='playSound'>").appendTo('body');
     }
   });

 })(jQuery);