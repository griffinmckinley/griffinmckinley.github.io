const button = document.getElementById("btn");
const textField = document.getElementById("text-input");
const output = document.getElementById("result");

const checkUserInput = () => {
    const input = textField.value;
    if (typeof input !== 'string') {
        alert("Please provide a string");
        return;
    }
  
    checkPalindrome(input);
    textField.value = ""; // Clearing the input field after checking
};

const checkPalindrome = (input) => {
    storedInput = input
    input = input.replace(" ", "").toLowercase();
    const reversedInput = reverseString(input).replace(" ", "").toLowercase();
    output.innerText = input === reversedInput ? `${storedInput} is a palindrome` : `${storedInput} is not a palindrome`;
};

const reverseString = (input) => input.split("").reverse().join("");

button.addEventListener("click", checkUserInput);