var time=30;
var questions = [ {
		question: "What was the name of Brad Pitt's character when he guest starred in The One with the Rumor?",
		choices: ['Muriel','Will','Jack','Ron'],
		correctAnswer: 'Will',
		displayImage: 'assets/images/brad-pitt-friends.gif'
}, {
		question: "What is Chandler's middle name?",
		choices: ['Morty','Muriel','Miriam','Milton'],
		correctAnswer: 'Muriel',
		displayImage: 'assets/images/chandlermurielbing.gif'
	} , {
		question: "What is Chandler's father's stage name?",
		choices: ['Helena Handbasket','Lauren Order','Juana Bang','Rue Bella'],
		correctAnswer: 'Helena Handbasket',
		displayImage:'assets/images/chandlersdad.jpg'
	}, {
		question: "How many sisters does Joey have?",
		choices: ['8', '7', '6', '5'],
		correctAnswer: '7',
		displayImage:'assets/images/Friends_couch.gif'
	}, {
		question: "Which of Joey's sisters does Chandler not remember kissing after getting too drunk from jell-o shots?",
		choices: ['Cookie', 'Mary Therese', 'Dina', 'Mary Angela'],
		correctAnswer: 'Mary Angela',
		displayImage:'assets/images/Friends_couch.gif'
		
	}, {
		question: "Which of these actors/actresses NEVER guest starred in an episode of Friends?",
		choices: ['Bruce Willis', 'Billy Crystal', 'John Stamos','Debra Messing'],
		correctAnswer: 'Debra Messing',
		displayImage:'assets/images/Friends_couch.gif'
	}, {
		question: "What makes Ross' Thanksgiving leftover sandwich so special?",
		choices: ['It is super big', 'He adds some meatballs into it', 'He has a gravy soaked bread in the middle', 'He puts some marinara sauce to make his sandwich more moist'],
		correctAnswer: 'He has a gravy soaked bread in the middle',
		displayImage:'assets/images/Friends_couch.gif'
	},  {
		question: "What is the name of Chandler and Ross's college 'band'?",
		choices:['Way No Way', 'Emotional Knapsack', 'Betrayal in The Common Room', 'Electric Time'],
		correctAnswer: 'Way No Way',
		displayImage:'assets/images/Friends_couch.gif'

	}, {
		question: "In The One With The Embryos, what phenomenons scares the bejeezus out of Chandler?",
		choices: ['Animals dressed as humans', 'Michael Flatley, Lord of the Dance', 'The Number 11', 'Ice Cream (it hurts his teeth)'],
		correctAnswer: 'Michael Flatley, Lord of the Dance',
		displayImage:'assets/images/Friends_couch.gif'
	}, {
		question: "What name appears on the address label of Chandler and Joey's TV Guide?",
		choices: ['Chandler Bing', 'Miriam Bing', 'Chanandler Bong', 'Joey Tribianni'],
		correctAnswer: 'Chanandler Bong',
		displayImage:'assets/images/Friends_couch.gif'
	}, {
		question: "What is Chandler Bing's job (before he worked in advertising)?",
		choices: ['Transponster!', 'Transponder', 'Statistical Analysis and Data Reconfiguration', 'Statistician'],
		correctAnswer: 'Statistical Analysis and Data Reconfiguration',
		displayImage: 'assets/images/transponster.gif'
	}, {
		question: "Which of these companies/establishments has Rachel not worked in?",
		choices: ['Central Perk', 'Bloomingdales', 'Louis Vuitton', 'Ralph Lauren'],
		correctAnswer: 'Louis Vuitton',
		displayImage:'assets/images/Friends_couch.gif'
	},{
		question: "When Ross was mugged as a kid, the mugger stole his original comic book, who was the hero of that comic book?",
		choices:['Science Lad', 'Science Boy', 'Dinosaur Tamer', 'T-Rex Man'],
		correctAnswer: 'Science Boy',
		displayImage:'assets/images/Friends_couch.gif'
	},{
		question: "In The One With Ross' Tan, what tanning grade is Ross' back after many attempts?",
		choices:[8, 2, 'Puerto Rican', '0 (his front was tan)'],
		correctAnswer: '0 (his front was tan)',
		displayImage:'assets/images/Friends_couch.gif'
	}
];
// queryURL for Giphy API
var queryURL = "https://api.giphy.com/v1/gifs/search?q=brad+pitt&api_key=dc6zaTOxFJmzC";

//reset game
function reset(){
	$("#timer").text(`Time Remaining : ${time} Seconds`);
	time=30;
	timeReset();
	$("#question").empty();
	$('#choices').empty();
	randomQuestion= questions[Math.floor(Math.random()*questions.length)];
	setTimeout(displayQuestion(), 8000);
	setTimeout(displayChoices(),8000);	
}

//  function randomQuestion(){
//  	return questions[Math.floor(Math.random()*questions.length)];
//  }
var countdown;
function timer(){
	var displayTime;
	 countdown =setInterval(function(){
		if (time===0){
			alert('Ran out of time!')
			$(".correctOrwrong").html(`You ran out of time! The correct answer is ${randomQuestion.correctAnswer}. <img src="${randomQuestion.displayImage}" class="center-block">`);
			clearoutAnswerDisplayed();
		} else{	
			time--;
			$("#timer").text(`Time Remaining : ${time} Seconds`);
		}
	}, 1000);

}
function timeReset(){
		clearInterval(countdown);
		timer();

}

function clearoutAnswerDisplayed(){
	clearInterval(countdown);
	setTimeout(function(){
		$(".correctOrwrong").empty();
		reset();
	}, 5000);
}
var randomQuestion= questions[Math.floor(Math.random()*questions.length)];

//display question
function displayQuestion(){
	$("#question").text(randomQuestion['question']);
}
function displayChoices(){
	var arraypossibleChoices = randomQuestion['choices'];
	for(var i=0; i<arraypossibleChoices.length; i++){
		var btnChoices = $(`<button id="choice" class="btn-block" value="${arraypossibleChoices[i]}">`);
		$(btnChoices).html(arraypossibleChoices[i]);
		$('#choices').append(btnChoices);
	}
	$(".btn-block").on("click", function(){
		// console.log(this);
		// console.log(this.getAttribute("value"));
		// console.log(randomQuestion);
		if(this.getAttribute("value")===randomQuestion.correctAnswer){
			alert('Spot on!');
			$(".correctOrwrong").html(`You are correct! The correct answer is ${randomQuestion.correctAnswer}. <img src="${randomQuestion.displayImage}" class="center-block">`);
			clearoutAnswerDisplayed();
		} else if (this.getAttribute("value")!=randomQuestion.correctAnswer){
			alert('Incorrect!');
			$(".correctOrwrong").html(`Nope! The correct answer is ${randomQuestion.correctAnswer}. <img src="${randomQuestion.displayImage}" class="center-block">`);
			clearoutAnswerDisplayed();
		}
	
	})
}	


function startGame(){
	$("#timer").text(`Time Remaining : ${time} Seconds`);
	timer();
	$(".contains-btn").addClass("hidden");
	$("#startButton").addClass("hidden");
	$(".game").removeClass("hidden");
	$(".game").addClass("visible");

	
}

//player picks the right answer
function choosingcorrectAnswer(){
	clearInterval(countdown);
	// showAnswer;
	reset();
}


$("#startButton").on("click", function(){	
	startGame();
	//start game
	setTimeout(displayQuestion(), 5000);
	setTimeout(displayChoices(),5000);

})

