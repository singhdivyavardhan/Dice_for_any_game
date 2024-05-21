function dice_Function() {
    let guess = Math.floor(Math.random() * 6) + 1;
    return guess;
}

// Calling the function
let result = dice_Function();
console.log(result); // This will print the result of the dice roll to the console
