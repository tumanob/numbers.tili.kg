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
 
 /*var my_media = new Media('http://audio.ibeat.org/content/p1rj1s/p1rj1s_-_rockGuitar.mp3', onSuccess , onError);
	
 // onSuccess Callback
         function onSuccess() {
             my_media.release();
             console.log("playAudio():Audio Success");
         }

  // onError Callback 
         function onError(error) {
             console.log('code: '    + error.code    + '\n' + 
                   'message: ' + error.message + '\n');
         }
			   
		 */
 
 
// Put your custom code here
$('document').ready(function () {

	 number = 1;

	 
    $('#play').click(function(){  
		//alert('sukaaaaaa');
			PlaySound(number);
		  /* navigator.notification.alert(
		               'rabotai suka',  // message
		               'Game Over',            // title
		               'Done'                  // buttonName
		           );
				   */
				   
	      
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
		 
		 /* navigator.notification.alert(
		  		               'rabotai suka'+$param,  // message
		  		               'Game Over',            // title
		  		               'Done'                  // buttonName
		  		           );
						   */
						  // var url = "http://audio.ibeat.org/content/p1rj1s/p1rj1s_-_rockGuitar.mp3";
						    var url = "/android_asset/www/assets/"+$param+".mp3"; // blin nu pochemu ne ukazali eto v manuale
						   var my_media = new Media(url,
						           // success callback
						           function() {
						               console.log("playAudio():Audio Success");
									   my_media.release(); 
									  /* navigator.notification.alert(
									   		  		               'rabotait suka'+$param,  // message
									   		  		               'Game Over',            // title
									   		  		               'Done'                  // buttonName
									   		  		           );*/
						           },
						           // error callback
						           function(err) {
						               console.log("playAudio():Audio Error: "+err);
									   navigator.notification.alert(
									   		  		               'oshibka suka'+url,  // message
									   		  		               'Game Over',            // title
									   		  		               'Done'                  // buttonName
									   		  		           );
						       });

						       // Play audio
						       my_media.play();
	
	
		  	 // my_media.play();
		 // $.playSounds('assets/'+$param+'.mp3'); 
         
  
	   }; 
	   
	   
	  
	   var ChangeImage = function($param) {   $('#numberimage').attr("src", 'assets/'+$param+'.png');   }; 
	   
	   var ChangeText = function($param) {
		  
		   $('#ennum').replaceWith('<h3 id="ennum">'+nText[$param].en+'</h3>');
		   $('#kgnum').replaceWith('<h3 id="kgnum">'+nText[$param].kg+'</h3>');
		   $('#runum').replaceWith('<h3 id="runum">'+nText[$param].ru+'</h3>');  
	   		
     	}; 
 });
 
 





 /* -----------  --------------- */

 /*

 (function($){

   $.extend({
     playSounds: function(){
       return $("<embed src='"+arguments[0]+"' hidden='true' autostart='true' loop='false' class='playSound'>").appendTo('body');
     }
   });

 })(jQuery);*/
