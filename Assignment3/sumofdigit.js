function repeatedSumOfDigits(num) {
    while (num >= 10) {
        num = num.toString()
                  .split('')
                  .map(Number)
                  .reduce((sum, digit) => sum + digit, 0);
    }
    return num;
}

function calculateSum() {
    const input = prompt("Enter a number:");
    const number = parseInt(input, 10);
    if (!isNaN(number)) {
        const result = repeatedSumOfDigits(number);
        console.log(`The repeated sum of digits is: ${result}`);
    } else {
        console.log('Please enter a valid number.');
    }
}

// Call the function to execute
calculateSum();
