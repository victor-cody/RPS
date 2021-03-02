//  Frontend Mentor - Rock, Paper, Scissors Game

/**
 * Game Functionality
 * Your users should be able to:
- View the optimal layout for the game depending on their       device's screen size
- Play Rock, Paper, Scissors against the computer
- Maintain the state of the score after refreshing the browser _(optional)_
- **Bonus**: Play Rock, Paper, Scissors, Lizard, Spock against the computer _(optional)_

*/

/*
### Rules

If the player wins, they gain 1 point. If the computer wins, the player loses one point.
 */

/**
  * #### Original

- Paper beats Rock
- Rock beats Scissors
- Scissors beats Paper
  */

//our function that evaluates our inputs (user and computer) and returns a winner

//the UI Module
const UIModule = (function () {
  //an object that contains all the strings will use to select our elements
  const DomStrings = {
    //header
    score: "#current-score",
    // game Steps
    step1: "#step-1",
    step2: "#step-2",
    box: "#validate",
    rulesContainer: "#rules-container",
    //game Items
    paper: ".paper",
    rock: ".rock",
    scissors: ".scissors",
    empty: ".empty-choice",
    message: ".message",
    playBtn: "#play-btn",
    closeBtn: "#close-btn",
    ruleBtn: "#rules",
    //user && computer
    userDisplay: "#user_choice_display",
    computerDisplay: "#comp_side_display",
    overlay: "#overlay",
  };
  const emptyElement = document.querySelector(DomStrings.empty);
  const overlay = document.querySelector(DomStrings.overlay);
  return {
    DomStrings,
    changeView(step1, step2) {
      //our function to change the view of the game
      step1.classList.add("hide");
      step2.classList.add("view");
    },
    playerSelection(event) {
      //our function to get and know the user choice
      let userChoice;
      if (event.target.id == "rock" || event.target.parentNode.id == "rock") {
        // console.log("user choice is rock");
        userChoice = "rock";
      } else if (
        event.target.id == "paper" ||
        event.target.parentNode.id == "paper"
      ) {
        // console.log("user choice is paper");
        userChoice = "paper";
      } else if (
        event.target.id == "scissors" ||
        event.target.parentNode.id == "scissors"
      ) {
        // console.log("user choice is scissors");
        userChoice = "scissors";
      }
      return userChoice;
    },
    //our function to add the user choice to the UI
    addItem(type, choice) {
      let item, container;

      if (choice === "rock") {
        item = `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" class="user-choice rock">
            <path fill="#3B4262" d="M45.06 12.22c-.642-8.096-9.734-7.269-9.734-7.269-3.837-6.765-9.832-1.865-9.832-1.865-4.606-6.63-10.38-.486-10.38-.486-9.957-1.074-9.571 7.066-9.571 7.066-.234 2.588 1.403 10.593 1.403 10.593-1.477-4.614-4.68-.784-4.68-.784-3.94 6.078-.975 9.405-.975 9.405 5.33 6.246 16.688 13.743 16.688 13.743 4.113 2.356 2.373 4.457 2.373 4.457l24.876-4.11.571-4.718c3.782-11.436-.739-26.032-.739-26.032z"/>
          </svg >`;
      } else if (choice === "paper") {
        item = `<svg xmlns="http://www.w3.org/2000/svg" width="49" height="59" class="user-choice paper">
            <path fill="#3B4262" d="M47.125 11.832a2.922 2.922 0 00-1.232-.198c-.57.04-1.029.271-1.302.65-1.604 2.248-2.919 6.493-3.979 9.905-.486 1.577-1.14 3.688-1.612 4.69-.493-2.807.064-13.09.28-17.05l.003-.064c.15-2.751.17-3.234.138-3.446-.238-1.509-.843-2.5-1.799-2.943-.966-.45-2.22-.25-3.572.563-.677.41-.865 1.816-1.446 8.19l-.002.028c-.32 3.502-1.058 11.566-1.965 12.91-1.023-1.88-2.431-12.555-3.039-17.176-.425-3.236-.673-5.094-.84-5.655-.35-1.176-1.83-2.176-3.295-2.232-1.22-.06-2.22.56-2.698 1.638-.894.995-.578 4.292.41 12.102.47 3.718 1.44 11.395.83 12.257-1.219-.133-3.31-4.942-6.215-14.299-.816-2.62-1.068-3.408-1.318-3.753-.494-1.202-2.172-2.129-3.676-2.024a3.183 3.183 0 00-.377.049c-.787.156-2.584.881-2.2 4.226 1.06 4.637 2.213 8.041 3.331 11.346l.023.066c.669 1.98 1.302 3.85 1.89 5.925 1.385 4.9.846 7.94.84 7.975-.046.312-.143.503-.288.57a.556.556 0 01-.195.045c-.44.03-1.098-.26-1.437-.45-.776-1.482-4.636-8.544-8.134-9.524l-.126-.037-.127.012c-1.283.121-2.226.606-2.803 1.441-.914 1.32-.535 3.002-.444 3.34l.052.12c.028.051 2.834 5.165 3.268 7.544.374 2.04 2.311 4.25 3.869 6.026l.064.073c.508.58.946 1.083 1.292 1.548 4.519 4.713 11.665 8.677 11.723 8.71.892.657 1.387 1.293 1.44 1.84a.798.798 0 01-.16.58l-.155.162.988.96 18.853-1.324.804-3.684c2.486-10.402 1.967-19.272 1.958-19.33.01-.327.706-3.483 1.266-6.033l.017-.065c1.117-5.08 2.505-11.4 2.772-13.803.116-1.028-.542-1.972-1.675-2.401z"/>
          </svg>`;
      } else if (choice === "scissors") {
        item = `<svg xmlns="http://www.w3.org/2000/svg" width="51" height="58" class="user-choice scissors">
            <path fill="#3B4262" d="M13.971 25.702l6.012-8.415c-2.499-.415-7.088-.507-10.846 3.235C3.212 26.421.812 39.163.312 42.248L15.37 57.24c2.711-.232 14.713-1.827 26.279-13.34.122-.249 2.94-2.321.636-4.614-1.1-1.095-2.919-1.074-4.042.044-.572.57-1.461.577-2.021.02-.56-.557-.552-1.443.02-2.012l4.087-4.069c2.076-2.067.119-5.555-2.78-4.717l-3.345 2.851c-.611.53-1.52.439-2.022-.14-.519-.597-.408-1.503.183-2.013 11.687-10.208 9.98-8.979 17.5-15.995 2.809-2.329-.725-6.447-3.493-4.09L28.182 25.45c-.529.448-1.34.457-1.86-.02-.601-.517-.615-1.262-.222-1.85L38.787 3.944c1.854-2.5-1.795-5.277-3.749-2.757L16.28 27.307c-.452.65-1.364.8-1.985.345a1.377 1.377 0 01-.323-1.95z"/>
          </svg>`;
      }

      if (type === "user") {
        container = DomStrings.userDisplay;
      } else if (type === "computer") {
        container = DomStrings.computerDisplay;
      }

      //inserting the element into the DOM
      const itemContainer = document.querySelector(container);
      itemContainer.insertAdjacentHTML("beforeend", item);
    },
    removeEmpty() {
      emptyElement.remove();
    },
    stepDown(step1, step2) {
      //our function to change the view of the game
      step1.classList.remove("hide");
      step2.classList.remove("view");
    },
    removeItem(type) {
      let item, container;
      if (type === "user") {
        container = document.querySelector(DomStrings.userDisplay);
        item = container.querySelector(".user-choice");
      } else if (type === "computer") {
        container = document.querySelector(DomStrings.computerDisplay);
        item = container.querySelector(".user-choice");
      }
      if (item === null) return;
      container.removeChild(item);
    },
    //function to popup the rules onto the screen
    openModal(mod) {
      if (mod === null) return;
      mod.classList.add("active-popup");
      overlay.classList.add("active");
    },
    //function to pop off the rules off  the screen
    closeModal(mod) {
      if (mod === null) return;
      mod.classList.remove("active-popup");
      overlay.classList.remove("active");
    },
  };
})();

const GameController = (function (UICtrl) {
  let userChoice, compChoice;
  //getting our DomStrings values
  const DOM = UICtrl.DomStrings;
  //an array holding the choices the computer can choice from
  const compChoices = ["rock", "paper", "scissors"];
  //our score
  let score = 0;
  //defining our elements
  //Game Steps
  const Step1 = document.querySelector(DOM.step1);
  const Step2 = document.querySelector(DOM.step2);
  //Game Elements and Containers
  const model = document.querySelector(DOM.rulesContainer);
  const scoreContainer = document.querySelector(DOM.score);
  const Message = document.querySelector(DOM.box);
  let message = document.querySelector(DOM.message);
  //Game Buttons
  const playBtn = document.querySelector(DOM.playBtn);
  const rulesBtn = document.querySelector(DOM.ruleBtn);
  const closeModalBtn = document.querySelector(DOM.closeBtn);
  //function to get the computer choice
  function computerSelection(array = compChoices) {
    let compChoice = array[Math.floor(Math.random() * array.length)];
    return compChoice;
  }

  function checkWinner(choice1, choice2) {
    //our function that evaluates our inputs (user and computer) and returns a winner
    let result;
    //condition 1
    if (choice1 == choice2) {
      result = "It's a Draw ";
    } else if (choice1 == "rock") {  //condition 2
      if (choice2 == "scissors") {
        result = "You Win";
      } else {
        result = "You Lose";
      }
    } else if (choice1 == "paper") { //condition 3
      if (choice2 == "rock") {
        result = "You Win";
      } else {
        result = "You Lose";
      }
    } else if (choice1 == "scissors") { //condition 4
      if (choice2 == "rock") {
        result = "You Lose";
      } else {
        result = "You Win";
      }
    }
    Message.classList.add("view");
    message.textContent = result;
    return result;
  }

  function reset() {
    //our function to reset the game
    userChoice = "";
    compChoice = "";
    UICtrl.stepDown(Step1, Step2);
    Message.classList.remove("view");
    UICtrl.removeItem("user");
    UICtrl.removeItem("computer");
  }

/*adding event listeners to game elements
using event delegation and event bubbling*/

  Step1.addEventListener("click", function (event) {
    //
    userChoice = UICtrl.playerSelection(event);
    compChoice = computerSelection(compChoices);
    UICtrl.changeView(Step1, Step2);
    //output elements to the DOM
    UICtrl.addItem("user", userChoice);
    setTimeout(() => {
      UICtrl.removeEmpty();
    }, 300);
    setTimeout(() => {
      //output elements to the DOM
      UICtrl.addItem("computer", compChoice);
    }, 620);
    setTimeout(() => {
      checkWinner(userChoice, compChoice);
    }, 800);
    // UICtrl.addItem('computer',compChoice)
  });

  playBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (checkWinner(userChoice, compChoice) === "You Win") {
      score += 1;
      //output scores to the DOM
      scoreContainer.textContent = score;
    }
    setTimeout(() => {
      reset();
    }, 320);
  });

  rulesBtn.addEventListener("click", function (e) {
    // adding an EventListener to our rulesBtn to popup the rules
    e.preventDefault();
    UICtrl.openModal(model);
  });

  closeModalBtn.addEventListener("click", function (e) {
    // adding an EventListener to our close Button to close the rules dialog
    e.preventDefault();
    UICtrl.closeModal(model);
  });

  return {
    inti() {
      console.log("Game Started");
      reset();
    },
  };
})(UIModule);

GameController.inti();
