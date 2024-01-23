const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");
const phoneNumberRegex = /^[1]?[\s]?(?:[(]+[\d]{3}[)]+|[\d]{3})[\s]?[-\s]?[\d]{3}[-\s]?[\d]{4}$/;

const checkNumber = () => {
    inputIsEmpty();

    phoneNumberRegex.test(userInput.value) 
        ? resultsDiv.textContent = "Valid US number: " + userInput.value
        : resultsDiv.textContent = "Invalid US number: " + userInput.value;
};

const inputIsEmpty = () => {
    if (!userInput.value) {
        alert("Please provide a phone number");
    }
};

const cleanInput = () => {
    resultsDiv.textContent = "";
    userInput.value = "";
}

checkBtn.addEventListener("click", checkNumber);
clearBtn.addEventListener("click", cleanInput);