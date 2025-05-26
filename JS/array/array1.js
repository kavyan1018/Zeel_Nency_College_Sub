// mutable array

var marks = [10, 20, 30, 40, 50];

console.log(marks);

// starting from index ; condition ; increment
for (let i = 0; i < marks.length; i++) {
    console.log(marks[i]);
}

console.log("Using Each Element");
console.log(marks[0]);
console.log(marks[1]);
console.log(marks[2]);
console.log(marks[3]);
console.log(marks[4]);
// console.log(marks[5]); // undefined


var sum = 0;
for (let i = 0; i < marks.length; i++) {

    sum = sum + marks[i];

}

console.log("Sum of Marks: " + sum);