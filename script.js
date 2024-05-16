// (1)

let number1 = (prompt('enter number1'))
let number2 = (prompt('enter number2'))
let number3 = (prompt('enter number3'))
let maxNumber = Math.max(number1,number2,number3)
let minNumber = Math.min(number1,number2,number3)
console.log(`max element = ${maxNumber}`)
console.log(`min element = ${minNumber}`)

// // (2)

let character = prompt('Enter a character:');
if (character == 'a' || character == 'e' || character == 'i' || character == 'o' || character == 'u') {
    console.log('output: vowel')
} 
else {
    console.log('output:consonant')
}

// (3)

const numbers = prompt('inter the number')
    console.log('output');
    for (let i = 1; i <= 12; i++) {
        console.log(numbers*i)
    }

// (4)

var number = prompt('Enter a number:')
console.log('output:') 
for (var i = 1; i <= number; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

// (5)

let markes = []
for (let i = 0; i < 5; i++) {
    let subjectMarks = parseFloat (prompt(`Enter marks for subject ${i+1}:`))
    markes.push(subjectMarks)
}
let totalMarkes = markes.reduce((acc, curr) => acc + curr, 0)
let averageMarks = totalMarkes / 5
let percentages = (totalMarkes / 500) * 100
console.log(`Total marks = ${totalMarkes}`)
console.log(`Average marks = ${averageMarks}`)
console.log(`Percentage = ${percentages}%`)

// // (6)
let marks = [];
for (let i = 0; i < 5; i++) {
    let subjectMarks = parseFloat(prompt(`Enter marks for subject ${i+1}:`));
    marks.push(subjectMarks);
}
let totalMarks = marks.reduce((acc, curr) => acc + curr, 0);
let percentage = (totalMarks / 500) * 100;
let grade;
if (percentage >= 90) {
    grade = 'A';
} else if (percentage >= 80) {
    grade = 'B';
} else if (percentage >= 70) {
    grade = 'C';
} else if (percentage >= 60) {
    grade = 'D';
} else if (percentage >= 40) {
    grade = 'E';
} else {
    grade = 'F';
}
console.log(`Grade ${grade}`);
