$(document).ready(function() {
	
	//removes previous entry so repeated fizz buzz's don't keep appending
	var cleanUp = function () {
		$('ul > li').remove();
	}

	//fizz buzz function
	var fizzBuzz = function (inputNum) {
		
		cleanUp();

		//fizz buzz to a certain input number
		for (var i = 1; i <= inputNum; i++) {
			
			//divisible by 3 and 5
			if (i % 15 == 0) {
				$('ul').append('<li><div class = "fb" >FizzBuzz</div></li>');
			}

			//divisible by 3
			else if (i % 3 == 0) {
				$('ul').append('<li><div class = "f" >Fizz</div></li>');
			}
	
			//divisible by 5
			else if (i % 5 == 0) {
				$('ul').append('<li><div class = "b" >Buzz</div></li>');
			}

			//regular numbers
			else {
				$('ul').append('<li class = "other" ><div>'+i+'</div></li>');
			};
		}
	}

	//function to compute fizz buzz or show alert
	var compute = function () {

		//takes the value from input
		var inputNum = $('input[name=fizzbuzzinput]').val();
		
		//limits number to max 1000		
		if (+inputNum >= 1000) {

			cleanUp();
			$('ul').append('<li><div>No, no, no!!<br>Try a smaller number.</div></li>');


		//user must put in a positive number
		} else if (+inputNum >= 1) {

			//user must enter a whole number
			if (+inputNum % 1 != 0) {

				cleanUp();
				$('ul').append('<li><div>Don\'t be too challenging. <br> You can only FizzBuzz whole numbers.</div></li>');

			} else {

				cleanUp();
				fizzBuzz(inputNum);

			}
		
		//user gets a message if input is not a number
		} else {

			cleanUp();
			$('ul').append('<li><div>You can\'t fizz buzz this.<br>Please enter a number bigger than 1!</div></li>');
		};
	};

	//click go! to start fizz buzzing!
	$('.go').on('click', function() {
		
		compute();

	});

	//press enter to start fizz buzzing!
	$(document).on('keypress', function(e) {

		//press the enter key
		if (e.which == 13) {
			
			compute();

		}
	});

//end doc ready
});