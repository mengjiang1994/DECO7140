
		//activity the function when scroll the page
		window.onscroll = function() {
			scrollFunction()
				};

		//display the "Top" button only in the situation that users is not visiting the 
		//top of the page, or hide it (by setting the css attribute "display" to none).
		function scrollFunction() {
		    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
		        document.getElementById("totop").style.display = "block";
		    } else {
		        document.getElementById("totop").style.display = "none";
		    }
		}

		//a smooth jQuery animate from the position to the top of website.
		$('#totop').click(function(){ 
      		$('body').animate({ scrollTop: 0 }, 500);
      		return false; 
			});


		
		

		function nightmode(){
			var el = document.getElementById('atc');
			//get the doucment with id="atc"
			var style = window.getComputedStyle(el, null).getPropertyValue('color');
			//get the (font) color of 'atc', in the case of this project, 
			//it should be gray firstly, which is rgb(128, 128,128) 
			if(style == "rgb(128, 128, 128)"){
				//if it is gray
				el.style.color = "white";
				document.body.style.background="black";
				//change the font color to white and
				//change the background of this website to black.
			}else{
				el.style.color = "gray";
				document.body.style.background="url(images/bg.jpg)";
				//else, in this case the color of article font could be either white or gray
				//So it has to be white when it's not gray.
				//now just change the font color to gray and background to a *.jpg file
			}
		}



		//the resizelarger() function, which can add 1px of the font with the tag ‘atc’. 
		//The similar thing is the resizessmaller() can reduce 1px of the font with 
		//the tag ‘atc’, which is the main article of each pages.
		function resizelarger(){
			var el = document.getElementById('atc');
			var style = window.getComputedStyle(el, null).getPropertyValue('font-size');
			var fontSize = parseFloat(style); 
			
			el.style.fontSize = (fontSize + 1) + 'px';

		}
		function resizesmaller(){
			var el = document.getElementById('atc');
			var style = window.getComputedStyle(el, null).getPropertyValue('font-size');
			var fontSize = parseFloat(style); 
			
			el.style.fontSize = (fontSize - 1) + 'px';

		}



			/*This block if jQuery code means when the pointer of mouse */
			/*moved to the button, the hint will show because of setting */
			/*the css attribute “display” to “block” to show the hint words. */
			/*If the pointer moved out the button, the hint words will disappear again.*/
		
			$(".start").mouseover(function(){
				$("#hint").css("display","block");
				//Press it to get started read from Chapter 1
				
			});

			$(".start").mouseout(function(){
				$("#hint").css("display","none");
			});



		/*Reference of below code*/ 
		/* www.w3schools.com/w3css/tryit.asp?filename=tryw3css_slideshow_fading*/
		/* this block of code is the logic of display a series of slideshow pictures.*/
		var myIndex = 0;
		carousel();

		function carousel() {
			console.log("carousel");
		    var i;
		    var x = document.getElementsByClassName("mySlides");
		    for (i = 0; i < x.length; i++) {
		       x[i].style.display = "none";  
		    }
		    myIndex++;
		    if (myIndex > x.length) {myIndex = 1}    
		    x[myIndex-1].style.display = "block";  
		    setTimeout(carousel, 2500);    
		}

