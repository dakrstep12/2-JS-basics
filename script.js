/******************************
* Variables and data types 
*/

// var firsName = 'John';
// console.log(firsName);

// var lastName = 'Smith';
// var age = 28;

// var fullAge = true;
// console.log(fullAge);

// var job;
// console.log(job);

// job = 'Teacher';
// console.log(job);

// // Variable naming rules
// var _3years = 3;
// var johnMark = 'John and Mark';
// var if = 23;


/******************************
* Variables mutation and data coercion 
*/

// var firstName = 'John';
// var age = 28;

// console.log(firstName + ' ' + age);

// var job, isMarried;
// job = 'teacher';
// isMarried = false

// console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is hemarried? ' + isMarried);

// // Variable mutation
// age = 'twenty eight';

// alert(firstName + ' is a ' + age + ' year old ' + job + '. Is hemarried? ' + isMarried);

// var lastName = prompt('What is his last Name?');
// console.log(firstName + ' ' + lastName);



/******************************
* Basic operators
*/

// var year, yearJohn, yearMark;
// now = 2018;
// ageJohn = 28;
// ageMark = 33;

// // Math Operators
// yearJohn = now - ageJohn;
// yearMark = now - ageMark;

// console.log(yearJohn);

// console.log(now + 2);
// console.log(now * 2);
// console.log(now / 10);


// // Logical operators
// var johnOlder = ageJohn < ageMark;
// console.log(johnOlder);

// // typeof operator
// console.log(typeof johnOlder);
// console.log(typeof ageJohn);
// console.log(typeof 'Mark is older than John');
// var x;
// console.log(typeof x);



/******************************
* Operator precedence
*/

// var now = 2018;
// var yearJohn = 1989;
// var fullAge = 18;

// // Multiple operators
// var isFullAge = now - yearJohn >= fullAge; // true
// console.log(isFullAge);

// // Grouping
// var ageJohn = now - yearJohn;
// var ageMark = 35;
// var average = (ageJohn + ageMark) / 2;
// console.log(average);

// // Multiple assignments
// var x, y;
// x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
// console.log(x, y);

// // More operators
// x *= 2;
// console.log(x);
// x += 10;
// console.log(x);
// x--;
// console.log(x);



/******************************
* CODING CHALLENGE 1
*/

// var massMark = 78; //kg
// var heightMark = 1.69; //meters

// var massJohn = 92;
// var heightJohn = 1.95;

// var BMIMark = massMark / (heightMark * heightMark);
// var BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);

// var markHigherBMI = BMIMark > BMIJohn;
// console.log('Is Mark\'s BMI higher than John\'s? ' + markHigherBMI); 



/******************************
* If / else statements
*/

// var firstName = 'John';
// var civilStatus = 'single';

// if(civilStatus === 'married') {
//     console.log(firstName + ' is married!');
// }
// else {
//     console.log(firstName + ' will hopefuly arry soon :)');
// }

// var isMarried = true;
// if(isMarried) {
//     console.log(firstName + ' is married!');
// }
// else {
//     console.log(firstName + ' will hopefuly arry soon :)');
// }

// var massMark = 78; //kg
// var heightMark = 1.69; //meters

// var massJohn = 92;
// var heightJohn = 1.95;

// var BMIMark = massMark / (heightMark * heightMark);
// var BMIJohn = massJohn / (heightJohn * heightJohn);

// if(BMIMark > BMIJohn) {
//     console.log('Mark\' BMI is higher than John\'s.');
// } else {
//     console.log('John\' BMI is higher than Mark\'s.');
// }


/******************************
* Boolean logic
*/

// var firstName = 'John';
// var age = 20;

// if(age < 13) {
//     console.log(firstName + ' is a boy.');
// } else if (age >= 13 && age < 20) {
//     console.log(firstName + ' is a teenager.');
// } else if (age >= 20 && age < 30) {
//     console.log(firstName + ' is a young man.');
// } else {
//     console.log(firstName + ' is a man.');
// }



/******************************
* The Ternary Operator and Switch Statements
*/

var firstName = 'John';
// var age = 14;

// age >= 18 ? console.log(firstName + ' drinks beer.')
// : console.log(firstName + ' drinks juice.')

// var drink = age >= 18 ? 'beer' : 'juice';
// console.log(drink);

// if (age >= 18) {
//     var drink = 'beer';
// } else {
//     var drink = 'juice';
// }

// Switch statement
// var job = 'cop';
// switch (job) {
//     case 'teacher':
//     case 'instructor':
//         console.log(firstName + ' teaches kids how to code.');
//     case 'driver':
//         console.log(firstName + ' drives an uber in Lisbon.');
//     case 'designer':
//         console.log(firstName + ' disigns beautiful websites.');
//         break;
//     default:
//         console.log(firstName + ' does something else.');
// }

// age = 56;
// switch(true) {
//     case age < 13:
//         console.log(firstName + ' is a boy.');
//         break;
//     case age >= 13 && age < 20:
//         console.log(firstName + ' is a teenager.');
//         break;
//     case age >= 20 && age < 30:
//         console.log(firstName + ' is a young man.');
//         break;
//     default:
//         console.log(firstName + ' is a man.');
        
// }



/******************************
* Truthy and Falsy values and equality operators
*/

// falsy values: undefined, null, 0, '', NaN
// truthy values: NOT falsy values

// var height;

// height = 23;

// if(height || height === 0) {
//     console.log('Variable is defined');
// } else {
//     console.log('Variable has NOT been defined');
// }

// // Equality operators
// if (height === '23'){
//     console.log('The == operator does type coercio!');
// }



/******************************
* CODING CHALLENGE 2
*/

// var scoreJohn = (189 + 120 + 103) / 3;
// var scoreMike = (129 + 94 + 123) / 3;
// var scoreMary = (97 + 134 + 105) / 3;
// console.log(scoreJohn, scoreMike, scoreMary);

// if(scoreJohn > scoreMike && scoreJohn > scoreMary) {
//     console.log('John\'s team wins with ' + scoreJohn + ' points');
// } else if(scoreMike > scoreJohn && scoreMike > scoreMary) {
//     console.log('Mike\'s team wins with ' + scoreMike + ' points');
// } else if (scoreMary > scoreJohn && scoreMary > scoreMike) {
//     console.log('Marry\'s team wins with ' + scoreMary + ' points');
// } else {
//     console.log('There is a draw');
// }



/******************************
* Functions
*/

// function calculateAge(birthYear) {
//     return 2018 - birthYear;
// }

// var ageJohn = calculateAge(1990);
// var ageMike = calculateAge(1948);
// var ageJane = calculateAge(1969);
// console.log(ageJohn, ageMike, ageJane);

// function yearsUntilRetirement(year, firstName){
//     var age = calculateAge(year);
//     var retirement = 65 - age;

//     if(retirement > 0) {
//         console.log(firstName + ' retires in ' + retirement + ' years.')
//     } else {
//         console.log(firstName + ' is already retired.');
//     }
// }

// yearsUntilRetirement(1990, 'John')
// yearsUntilRetirement(1948, 'Mike')
// yearsUntilRetirement(1969, 'Jane')



/******************************
* Functions Statements and Expressions
*/

// Function declaration
// function whatDoYouDo(job, firstName) {}

//Function expression
// var whatDoYouDo = function (job, firstName) {
//     switch(job) {
//         case 'teacher':
//             return firstName + ' teaches kids how to code';
//         case 'driver':
//             return firstName + ' drives a cab in Lisbon.'
//         case 'designer':
//             return firstName + ' designs beautiful websites'
//         default:
//             return firstName + ' does somthing else';
//     }
// }

// console.log(whatDoYouDo('teacher', 'John'));
// console.log(whatDoYouDo('designer', 'Jane'));
// console.log(whatDoYouDo('retired', 'Mark'));



/******************************
* Arrays
*/

// Initialize new array
// var names = ['John', 'Mark', 'Jane'];
// var years = new Array(1990, 1969, 1948)

// console.log(names[2]);
// console.log(names.length)

// // Mutate array data
// names[1] = 'Ben';
// names[names.length] = 'Mary';
// console.log(names);

// // Different data types
// var john = ['John', 'Smith', 1990, 'designer', false];

// john.push('blue');
// john.unshift('Mr.');
// console.log(john);

// john.pop();
// john.pop();
// john.shift();
// console.log(john);

// console.log(john.indexOf(23));

// var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
// console.log(isDesigner);



/******************************
* CODING CHALLENGE 2
*/

// function tipCalculator(bill) {
//     var percentage;
//     if (bill < 50) {
//         percentage = .2;
//     } else if(bill >= 50 && bill < 200) {
//         percentage = .15;
//     } else {
//         percentage = .1;
//     }
//     return percentage * bill;
// }

// var bill = [124, 48, 268]
// var tips = [tipCalculator(bill[0]), tipCalculator(bill[1]), tipCalculator(bill[2])];
// var finalValues = [bill[0] + tips[0], bill[1] + tips[1], bill[2] + tips[2]];

// console.log(tips, finalValues);




/******************************
* Objects and properties
*/

// var john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     birthYear: 1990,
//     family: ['Jane', 'Mark', 'Bob', 'Emily'],
//     job: 'teacher',
//     isMarried: false
// };
// console.log(john.firstName);
// console.log(john['lastName']);
// var x = 'birthYear';
// console.log(john[x]);

// john.job = 'designer';
// john['isMarried'] = true;
// console.log(john);

// // new Object syntax
// var jane = new Object();
// jane.firstName = 'Jane';
// jane.birthYear = 1969;
// jane['lastName'] = 'Smith';
// console.log(jane);




/******************************
* Objects and methods
*/

// var john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     birthYear: 1992,
//     family: ['Jane', 'Mark', 'Bob', 'Emily'],
//     job: 'teacher',
//     isMarried: false,
//     calcAge: function() {
//         this.age = 2018 - this.birthYear;
//     }
// };

// john.calcAge();
// console.log(john);




/******************************
* CODING CHALLENGE 4
*/

// var john = {
//     fullName: 'John Smith',
//     mass: 110,
//     height: 1.95,
//     calcBMI: function() {
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     }
// }

// var mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function() {
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     }
// }

// if (john.calcBMI() > mark.calcBMI()) {
//     console.log(john.fullName + ' has a higher BMI of ' + john.bmi);
// } else if (mark.bmi > john.bmi) {
//     console.log(mark.fullName + ' has a higher BMI of ' + mark.bmi);
// } else {
//     console.log('They have the same BMI');
// }




/******************************
* Loops and iteration
*/

// for loop
// for (var i = 1; i <= 20; i = i + 2) {
//     console.log(i);
// }

// // i = 0, 0 < 10 true, log i to console, i++
// // i = 1, 1 < 10 true, log i to the console, i++
// //...
// // i = 9, 9 < 10 true, log i to the console, i++
// // i = 10, 10 < 10 FALSE, exit the loop!


// var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
// for (var i = 0; i < john.length; i++) {
//     console.log(john[i]);
// }

// // While loop
// var i = 0;
// while(i < john.length) {
//     console.log(john[i]);
//     i++;
// }


// continue and break statements
// var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];

// for (var i = 0; i < john.length; i++) {
//     if (typeof john[i] !== 'string') continue;
//     console.log(john[i]);
// }

// for (var i = 0; i < john.length; i++) {
//     if (typeof john[i] !== 'string') break;
//     console.log(john[i]);
// }

// // Looping backwards
// for (var i = john.length - 1; i >= 0; i--) {
//     console.log(john[i]);
// }




/******************************
* CODING CHALLENGE 5
*/

// var john = {
//     fullName: 'John Smith',
//     bills: [124, 48, 268, 180, 42],
//     calcTips: function() {
//         this.tips = [];
//         this.finalValues = [];
                
//         for (var i = 0; i < this.bills.length; i++) {
//             // Determine percentage based on tipping rules
//             var percentage;
//             var bill = this.bills[i];
            
//             if (bill < 50) {
//                 percentage = .2;
//             } else if (bill >= 50 && bill < 200) {
//                 percentage = .15;
//             } else {
//                 percentage = .1;
//             }
            
//             // Add results to the corresponing arrays
//             this.tips[i] = bill * percentage;
//             this.finalValues[i] = bill + bill * percentage;
//         }
//     }
// }

// var mark = {
//     fullName: 'Mark Miller',
//     bills: [77, 475, 110, 45],
//     calcTips: function() {
//         this.tips = [];
//         this.finalValues = [];
                
//         for (var i = 0; i < this.bills.length; i++) {
//             // Determine percentage based on tipping rules
//             var percentage;
//             var bill = this.bills[i];
            
//             if (bill < 100) {
//                 percentage = .2;
//             } else if (bill >= 100 && bill < 300) {
//                 percentage = .1;
//             } else {
//                 percentage = .25;
//             }
            
//             // Add results to the corresponing arrays
//             this.tips[i] = bill * percentage;
//             this.finalValues[i] = bill + bill * percentage;
//         }
//     }
// }

// function calcAverage(tips) {
//     var sum = 0;
//     for (var i = 0; i < tips.length; i++) {
//         sum = sum + tips[i];
//     }
//     return sum / tips.length;
// }

// Do the calculations
// john.calcTips();
// mark.calcTips();

// john.average = calcAverage(john.tips);
// mark.average = calcAverage(mark.tips);
// console.log(john, mark);

// if (john.average > mark.average) {
//     console.log(john.fullName + '\'s family pays higher tips, with an average of $' + john.average);
// } else if (mark.average > john.average) {
//     console.log(mark.fullName + '\'s family pays higher tips, with an average of $' + mark.average);
// }
