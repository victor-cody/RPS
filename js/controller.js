import { domElements } from './base.js';
import { appView } from './view.js';

//The Controller. Combines functions from the view and model
//----------------------------------------------------------

const gameController = ( function (viewCtrl) { 
	let userChoice, compChoice;
	//an array holding the choices the computer can choice from
	const compChoices = ["rock", "paper", "scissors"];
	//our score
	let score = 0;
	// localStorage.setItem("score", score);

	function computerSelection(array = compChoices) {
		//function to get the computer choice
		let compChoice = array[Math.floor(Math.random() * array.length)]
		return compChoice;
	}

	function checkWinner(choice1, choice2) {
	//our function that evaluates our inputs (user and computer) and returns a winner
	let result;
	//condition 1
	if (choice1 == choice2) 
	{
		result = "It's a Draw ";
	} 
	else if (choice1 == "rock") 
	{ //condition 2
		if (choice2 == "scissors") {
			result = "You Win";
		} else {
			result = "You Lose";
		}
	} 
	else if (choice1 == "paper") 
	{ //condition 3
		if (choice2 == "rock") {
			result = "You Win";
		} else {
			result = "You Lose";
		}
	} 
	else if (choice1 == "scissors") 
	{ //condition 4
		if (choice2 == "rock") {
			result = "You Lose";
		} else {
			result = "You Win";
		}
	}
	domElements.message.classList.add("view");
	domElements.message.textContent = result;
	return result;
	}

	function reset() {
	//our function to reset the game
	userChoice = "";
	compChoice = "";
	viewCtrl.resetView();
	domElements.message.classList.remove("view");
	viewCtrl.removeUIItem("user");
	viewCtrl.removeUIItem("computer");
	}
	// public function that contains all event listeners to keep things organized.
	  const setupEventListeners = function () {

		domElements.step1.addEventListener("click", function (event) {
			//
			userChoice = viewCtrl.playerSelection(event);
			compChoice = computerSelection(compChoices);
			viewCtrl.stepUpView();
			//output elements to the DOM
			viewCtrl.addItemToUI("user", userChoice);
			setTimeout(() => {
				viewCtrl.removeEmpty();
			}, 300);
			setTimeout(() => {
				//output elements to the DOM
				viewCtrl.addItemToUI("computer", compChoice);
			}, 620);
			setTimeout(() => {
				checkWinner(userChoice, compChoice);
			}, 800);
			// UICtrl.addItem('computer',compChoice)
		});

	  domElements.playButton.addEventListener("click", (e) => {
		  e.preventDefault();
		  if (checkWinner(userChoice, compChoice) === "You Win") {
		  	score += 1;
			localStorage.setItem("score", score);
		  	//output scores to the DOM
		  	scoreContainer.textContent = localStorage.getItem("score");;
		  }
		  setTimeout(() => {
		  	reset();
		  }, 320);
	  });

	  domElements.rulesButton.addEventListener("click", (e) => {
		  // adding an EventListener to our rulesBtn to popup the rules
		  e.preventDefault();
		  viewCtrl.openModal(domElements.rulesContainer);
	  });

	domElements.closeButton.addEventListener("click", function (e) {
		// adding an EventListener to our close Button to close the rules dialog
		e.preventDefault();
		UICtrl.closeModal(model);
	});

	window.addEventListener("DOMContentLoad", () => {
		let score = localStorage.getItem("score")
		domElements.scoreKeeper.textContent = parseInt(score);
	})
	}
	return {
		init : function () {  
			console.log("Game Started");
			reset()
			setupEventListeners()
		}
	}
 })(appView);

gameController.init()
