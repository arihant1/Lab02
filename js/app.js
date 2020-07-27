'use strict';

//Welcome statement and prompt for name

var name = prompt('Welcome and thanks for taking my quiz! May i please know your name\?');
//console.log('The User\'s name is' + name);

//Saying hello to our guest

alert('Welcome '+ name + '\! I\'m Baloo\.Thanks for visiting');

//beginning of question and answer time
//first question - just seeing if they realize what's happening

var test = confirm('Is this a test\?');

//saving it

console.log('This was saved: ' + test);

//Letting User Know about their answer

if (test == true) {
  alert('you are correct');
} else {
  alert(' you have choosen poorly ') ;
}

//first actual question regaring the quiz

var q1  = prompt('Was Baloo in the Air Force\? \"Yes or No\?\"');

//reformatting answer to something understandable

var q1edit = q1.toLowerCase();

//validating user's input

if (q1edit !=='no' && q1edit !=='n' && q1edit !=='yes' && q1edit !=='y') {
  q1 = prompt('Answer the question with a \"Yes or No\"');
  q1edit = q1.toLowerCase();
}

//checking to see if answer is correct

if (q1edit ==='yes' || q1edit ==='y') {
  //console.log(name + ' answered poorly');
  alert('You\'ve answered poorly ' + name);
} else {
  //console.log(name + ' answered correctly');
  alert('Congratulations ' + name + '! You\'re correct!');
}

//Second actual question regaring the quiz
var q2  = prompt('Was Baloo ever deployed\? \"Yes or No\?\"');

//reformatting answer to something understandable
var q2edit = q2.toLowerCase();

//validating user's input
if (q2edit !=='no' && q2edit !=='n' && q2edit !=='yes' && q2edit !=='y') {
  q2 = prompt('Answer the question with a \"Yes or No\"');
  q2edit = q2.toLowerCase();
}

//checking to see if answer is correct
if (q2edit ==='no' || q2edit ==='n') {
  //console.log(name + ' answered poorly');
  alert('You\'ve answered poorly ' + name);
} else {
  //console.log(name + ' answered correctly');
  alert('Congratulations ' + name + '! You\'re correct!');
}

//third question regaring the quiz
var q3  = prompt('Was Baloo born in America\? \"Yes or No\?\"');

//reformatting answer to something understandable
var q3edit = q3.toLowerCase();

//validating user's input
if (q3edit !=='no' && q3edit !=='n' && q3edit !=='yes' && q3edit !=='y') {
  q3 = prompt('Answer the question with a \"Yes or No\"');
  q3edit = q3.toLowerCase();
}

//checking to see if answer is correct
if (q3edit ==='yes' || q3edit ==='y') {
  //console.log(name + ' answered poorly');
  alert('You\'ve answered poorly ' + name);
} else {
  //console.log(name + ' answered correctly');
  alert('Congratulations ' + name + '! You\'re correct!');
}

//fourth question regaring the quiz
var q4  = prompt('Did Baloo ever live in New York\? \"Yes or No\?\"');

//reformatting answer to something understandable
var q4edit = q4.toLowerCase();

//validating user's input
if (q4edit !=='no' && q4edit !=='n' && q4edit !=='yes' && q4edit !=='y') {
  q4 = prompt('Answer the question with a \"Yes or No\"');
  q4edit = q4.toLowerCase();
}

//checking to see if answer is correct
if (q4edit ==='no' || q4edit ==='n') {
  //console.log(name + ' answered poorly');
  alert('You\'ve answered poorly ' + name);
} else {
  //console.log(name + ' answered correctly');
  alert('Congratulations ' + name + '! You\'re correct!');
}

//fifth actual question regaring the quiz
var q5  = prompt('Did Baloo ever work for the Yankees\? \"Yes or No\?\"');

//reformatting answer to something understandable
var q5edit = q5.toLowerCase();

//validating user's input
if (q5edit !=='no' && q5edit !=='n' && q5edit !=='yes' && q5edit !=='y') {
  q5 = prompt('Answer the question with a \"Yes or No\"');
  q5edit = q1.toLowerCase();
}

//checking to see if answer is correct
if (q5edit ==='yes' || q5edit ==='y') {
  //console.log(name + ' answered poorly');
  alert('You\'ve answered poorly ' + name);
} else {
  //console.log(name + ' answered correctly');
  alert('Congratulations ' + name + '! You\'re correct!');
}

//Last question regaring the quiz
var q6  = prompt('Is Baloo in the Jungle book\? \"Yes or No\?\"');

//reformatting answer to something understandable
var q6edit = q6.toLowerCase();

//validating user's input
if (q6edit !=='no' && q6edit !=='n' && q6edit !=='yes' && q6edit !=='y') {
  q6 = prompt('Answer the question with a \"Yes or No\"');
  q6edit = q6.toLowerCase();
}

//checking to see if answer is correct
if (q6edit ==='no' || q6edit ==='n') {
  //console.log(name + ' answered poorly');
  alert('You\'ve answered poorly ' + name);
} else {
  //console.log(name + ' answered correctly');
  alert('Congratulations ' + name + '! You\'re correct!');
}