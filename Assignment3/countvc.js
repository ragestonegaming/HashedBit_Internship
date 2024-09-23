let str = "This is my Internship .";
let vowels = "AEIOUaeiou";

// Variables to store counts
let vowelCount = 0;
let consonantCount = 0;

// Loop through each character in the string
for (let i = 0; i < str.length; i++) {
  let char = str[i];

  // Check if the character is a letter
  if (/[a-zA-Z]/.test(char)) {
    // Check if it's a vowel
    if (vowels.includes(char)) {
      vowelCount++;
    } else {
      consonantCount++;
    }
  }
}

console.log(`Vowels: ${vowelCount}`);      
console.log(`Consonants: ${consonantCount}`); 
