let students = [
    { name: "Prakash", marks: 85 },
    { name: "Rina", marks: 92 },
    { name: "Sanjay", marks: 78 },
    { name: "Priya", marks: 95 }
]
// Use forEach to print each student's name and marks
students.forEach(student => console.log(student.name + " : " + student.marks))

// Use map to create a new list of just names
let studentsName = students.map(student => student.name)
console.log(studentsName)

// Use map to create a new list with name + pass/fail (pass = marks >= 80)
let studentResult = students.map(student => (
    {name: student.name, result: student.marks >= 80 ? "Pass" : "Fail"}
    )
)
console.log(studentResult)
