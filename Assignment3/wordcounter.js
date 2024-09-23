function countWords(paragraph) {
    // Trim the paragraph and split it into words using whitespace as the delimiter
    const words = paragraph.trim().split(/\s+/);
    // Return the count of words
    return words.length;
}

const paragraph = "This is my internship work provided by my senior";
const wordCount = countWords(paragraph);

console.log(`Number of words: ${wordCount}`); 
