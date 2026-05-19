let students = [
    { name: "Prakash", marks: 85 },
    { name: "Rina", marks: 92 },
    { name: "Sanjay", marks: 78 },
    { name: "Priya", marks: 95 }
]

let studentsGrade = students.map(student => {
    student["grade"] = student.marks >= 90 ? "A" : student.marks >= 80 ? "B" : "C" 
    return student
})

console.log(studentsGrade)
