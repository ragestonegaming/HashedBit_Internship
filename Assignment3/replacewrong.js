function correctfn(string, wrong, correct) {
    // Use string.replace() to replace the first occurrence of the wrong word with the correct one
    return string.replace(wrong, correct);
  }
  
  // Example usage:
  let sentence = "I love my coutry.";
  let wrongWord = "coutry";
  let correctWord = "country";
  
  // Call the function and store the result
  let correctedSentence = correctfn(sentence, wrongWord, correctWord);
  
  console.log(correctedSentence); // Output: "I love my country."
  