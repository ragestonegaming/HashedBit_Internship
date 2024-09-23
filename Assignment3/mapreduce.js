const students = [
    { name: "Ram", scores: [80, 70, 60] },
    { name: "Mohan", scores: [80, 70, 90] },
    { name: "Sai", scores: [60, 70, 80] },
    { name: "Hemang", scores: [90, 90, 80, 80] },
  ];
  
  // Use array.map() to create a new array with name and average score
  const result = students.map(student => {
    // Use reduce to calculate the sum of scores and then divide by the length to get the average
    const average = student.scores.reduce((sum, score) => sum + score, 0) / student.scores.length;
  
    // Return a new object with the student's name and their average score
    return { name: student.name, average: average };
  });
  
  console.log(result);
  