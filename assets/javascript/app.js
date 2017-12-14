var time=30;
var questions = [ {
	question: "What was the name of Brad Pitt's character when he guest starred in The One with the Rumor?",
	choices: ['Muriel','Will','Jack','Ron'],
	correctAnswer: 'Will'
}, {
		question: "What is Chandler's middle name?",
		choices: ['Morty','Muriel','Miriam','Milton'],
		correctAnswer: 'Muriel'
	} , {
		question: "What is Chandler's father's stage name?",
		choices: ['Helena Handbasket','Lauren Order','Juana Bang','Rue Bella'],
		correctAnswer: 'Helena Handbasket'
	}, {
		question: "How many sisters does Joey have?",
		choices: ['8', '7', '6', '5'],
		correctAnswer: '7'
	}, {
		question: "Which of Joey's sisters does Chandler not remember kissing after getting too drunk from jell-o shots?",
		choices: ['Cookie', 'Mary Therese', 'Dina', 'Mary Angela'],
		correctAnswer: 'Mary Angela'
	}, {
		question: "Which of these actors/actresses NEVER guest starred in an episode of Friends?",
		choices: ['Bruce Willis', 'Billy Crystal', 'John Stamos','Debra Messing'],
		correctAnswer: 'Debra Messing'
	}, {
		question: "What makes Ross' Thanksgiving leftover sandwich so special?",
		choices: ['It is super big', 'He adds some meatballs into it', 'He has a gravy soaked bread in the middle', 'He puts some marinara sauce to make his sandwich more moist'],
		correctAnswer: 'He has a gravy soaked bread in the middle'
	},  {
		question: "What is the name of Chandler and Ross's college 'band'?",
		choices:['Way No Way', 'Emotional Knapsack', 'Betrayal in The Common Room', 'Electric Time'],
		correctAnswer: 'Electric Time'

	}, {
		question: "In The One With The Embryos, what phenomenons scares the bejeezus out of Chandler?",
		choices: ['Animals dressed as humans', 'Michael Flatley, Lord of the Dance', 'The Number 11', 'Ice Cream (it hurts his teeth)'],
		correctAnswer: 'Michael Flatley, Lord of the Dance'
	}, {
		question: "What name appears on the address label of Chandler and Joey's TV Guide?",
		choices: ['Chandler Bing', 'Miriam Bing', 'Chanandler Bong', 'Joey Tribianni'],
		correctAnswer: 'Chanandler Bong'
	}, {
		question: "What is Chandler Bing's job (before he worked in advertising)?",
		choices: ['Transponster!', 'Transponder', 'Statistical Analysis and Data Reconfiguration', 'Statistician'],
		correctAnswer: 'Statistical Analysis and Data Reconfiguration'
	}, {
		question: "Which of these companies/establishments has Rachel not worked in?",
		choices: ['Central Perk', 'Bloomingdales', 'Louis Vuitton', 'Ralph Lauren'],
		correctAnswer: 'Louis Vuitton'
	},
];
function reset(){
	$("#timer").text(`Time Remaining : ${time} Seconds`);
}



function timer(){
	setInterval(function(){
		var displayTime=time--;
		$("#timer").text(`Time Remaining : ${displayTime} Seconds`);
	}, 1000)
}

function startGame(){
	$("#timer").text(`Time Remaining : ${time} Seconds`);
	setTimeout(timer(),0);
	$(".contains-btn").addClass("hidden");
	$(".game").removeClass("hidden");
	$(".game").addClass("visible");
}




$("#startButton").on("click", function(){	
	startGame();
	//start game
})
