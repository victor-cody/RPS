// this file contains / defines all the html elements used in the game

export const domElements ={
	scoreKeeper: document.querySelector("#current-score"),
	step1:document.querySelector("#step-1"),
	step2: document.querySelector("#step-2"),
	validation: document.querySelector("#validate"),
	rulesContainer: document.querySelector("#rules-container"),
		//game Items
	paper: document.querySelector(".paper"),
	rock: document.querySelector(".rock"),
	scissors: document.querySelector(".scissors"),
	empty: document.querySelector(".empty-choice"),
	message: document.querySelector(".message"),
	playButton: document.querySelector("#play-btn"),
	closeButton: document.querySelector("#close-btn"),
	ruleButton: document.querySelector("#rules"),
	//user && computer
	userDisplay:document.querySelector( "#user_choice_display"),
	computerDisplay: document.querySelector("#comp_side_display"),
	overlay: document.querySelector("#overlay"),
}
