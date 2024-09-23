const students = [
    {
        name: "student1",
        scores: {
            subject1: 44,
            subject2: 56,
            subject3: 87,
            subject4: 97,
            subject5: 37
        }
    },
    {
        name: "student2",
        scores: {
            subject1: 44,
            subject2: 56,
            subject3: 87,
            subject4: 97,
            subject5: 37
        }
    },
    {
        name: "student3",
        scores: {
            subject1: 44,
            subject2: 56,
            subject3: 87,
            subject4: 97,
            subject5: 37
        }
    }
];

// Calculate averages
const averages = students.map(student => {
    const scores = Object.values(student.scores); // Get scores as an array
    const average = scores.reduce((sum, score) => sum + score, 0) / scores.length; // Calculate average
    return { [student.name]: { average: average } }; // Return formatted object
});

// Output the result
console.log(averages);
