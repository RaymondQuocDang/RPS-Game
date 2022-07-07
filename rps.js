document.addEventListener("DOMContentLoaded", () => {

    // Adding click function to images
    document.querySelector("#rock").addEventListener("click", () => simulate("rock"));
    document.querySelector("#paper").addEventListener("click", () => simulate("paper"));
    document.querySelector("#scissors").addEventListener("click", () => simulate("scissors"));


});

// Simulate RPS game
function simulate(user_option) {

    // List of options for computer
    const list_options = ["rock", "paper", "scissors"];

    // Randomize computer's option
    const random_number = Math.floor(Math.random() * list_options.length);
    const cp_option = list_options[random_number];

    // Display both players' options
    let test = document.querySelector("#test");
    test.innerHTML = `You chose ${user_option} and the computer chose ${cp_option}.`

    // Display the results of the game
    let result = document.querySelector("#userOption")
    
    // Tie
    if (user_option === cp_option) {
        result.innerHTML = "Tie Game!"
        result.style.color = "grey"
        count_score("tie");
    } 
    // Win
    else if (user_option === "scissors" && cp_option === "paper") {
        result.innerHTML = "That's a W!"
        result.style.color = "#FFD700"
        count_score("win");
    }
    else if (user_option === "rock" && cp_option === "scissors") {
        result.innerHTML = "That's a W!"
        result.style.color = "#FFD700"
        count_score("win");
    } 
    else if (user_option === "paper" && cp_option === "rock") {
        result.innerHTML = "That's a W!"
        result.style.color = "#FFD700"
        count_score("win");
    }
    // Lose
    else {
        result.innerHTML = "You lose, try again!"
        count_score("loss");
        result.style.color = "#8b0000"
    }

}

// Set scores to 0
var draw = 0
var win = 0
var loss = 0

// Increase score on a win
function count_score(result) {

    if (result === "tie") {
        draw = draw + 1;
        document.querySelector("#draw").innerHTML = `Draws: ${draw}`;
    }
    else if (result === "win") {
        win = win + 1;
        document.querySelector("#win").innerHTML = `Wins: ${win}`;    
    }
    else {
        loss = loss + 1;
        document.querySelector("#loss").innerHTML = `Losses: ${loss}`;
    }

    
}