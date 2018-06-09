$(document).ready(function(){

	//Client ID
		//9ac66315ec33c4b1b56866092498e66ec39dbe31c6ab13e0508d435ab0168f4a

		//Client Secret • Reset
		//34d331f776278ae664800adbad0232c6ca89a485c85eff0c9a7dfa74e7ddd8a1	

		//Dribbble Token
		//de4a1266174e38b65e5cfc76bd53cd0f27637aa296a22730e5c1d685a47d1481

		//code=b35933261bbd80e48954d2c76e2ffe4c9505bbb39db2d20b611263aa3e40d3d5

		// 		{
		//     "access_token": "e7c42ab5b31709d1b7f13e3d55bbe30f121e8d1af9f2f56519ac96fc4ecd56d3",
		//     "token_type": "bearer",
		//     "scope": "public",
		//     "created_at": 1522992727
		// }

		var accessToken = 'e7c42ab5b31709d1b7f13e3d55bbe30f121e8d1af9f2f56519ac96fc4ecd56d3';

		// Call Dribble v2 API
		$.ajax({
		    url: 'https://api.dribbble.com/v2/user/shots?per_page=30&access_token='+accessToken,
		    dataType: 'json',
		    type: 'GET',
		    success: function(data) {  
		      if (data.length > 0) { 
		        $.each(data.reverse(), function(i, val) {                
		          $('#grid').prepend(
		            '<div><a class="shot" target="_blank" href="'+ val.html_url +'"><div class="overlay animate-all"><h2>' + val.title + '</h2></div><img src="'+ val.images.hidpi +'"/></a></div>'
		            )
		        })
		      }
		      else {
		        $('#grid').append('<p>No shots yet!</p>');
		      }
		      $('#grid div:last-child').parent().append('<div class="comingsoon">content coming soon</div>');
		    }

		});

		// Gradient animation
		var granimInstance = new Granim({
		   element: '#granim-canvas',
		   name: 'granim',
		   opacity: [1, 1],
		   states : {
		       "default-state": {
		           gradients: [
		               ['#34E5F5', '#9F01EA'],
		               ['#bc4e9c', '#f80759'],
		               ['#43e97b', '#38f9d7'],
		               ['#FF8D00', '#EE0E6B']
		           ],
		           transitionSpeed: 9000
		       }
		   }
		});




		var theLetters = "(@#$%&?)"; //You can customize what letters it will cycle through
		var ctnt = "Creative"; // Your text goes here
		var speed = 20; // ms per frame
		var increment = 2; // frames per step. Must be >2

		    
		var clen = ctnt.length;       
		var si = 0;
		var stri = 0;
		var block = "";
		var fixed = "";
		//Call self x times, whole function wrapped in setTimeout
		(function rustle (i) {          
		setTimeout(function () {
		  if (--i){rustle(i);}
		  nextFrame(i);
		  si = si + 1;        
		}, speed);
		})(clen*increment+1); 
		function nextFrame(pos){
		  for (var i=0; i<clen-stri; i++) {
		    //Random number
		    var num = Math.floor(theLetters.length * Math.random());
		    //Get random letter
		    var letter = theLetters.charAt(num);
		    block = block + letter;
		  }
		  if (si == (increment-1)){
		    stri++;
		  }
		  if (si == increment){
		  // Add a letter; 
		  // every speed*10 ms
		  fixed = fixed +  ctnt.charAt(stri - 1);
		  si = 0;
		  }
		 // $("#output").html(fixed + block);
		  block = "";
		}


});