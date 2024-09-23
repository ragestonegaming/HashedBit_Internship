function reverseString(str) {
    // Split the string into an array of characters, reverse it, and join it back into a string
    return str.split('').reverse().join('');
}


const input = "Hello";
const reversed = reverseString(input);

console.log(reversed); 
