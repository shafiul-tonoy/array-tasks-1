/*
problem -1 
Write a JavaScript code to reverse the array colors without using the reverse method.
Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']
Output:
['orange', 'yellow', 'green', 'blue', 'red']
*/

const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
let reverseColors = [];

for (let element of colors){
    reverseColors.unshift(element);
}
document.getElementById("one").innerHTML = reverseColors;

/* 
problem-2
Write a JavaScript code to get the even numbers from an array using any looping technique.
Input: const numbers = [12, 98, 5, 41, 23, 78, 46];
Output:
[12, 98, 78, 46]
*/

const numbers = [12, 98, 5, 41, 23, 78, 46];
let evenNumbers = [];

for (let element of numbers){
    if (element % 2 === 0){
        evenNumbers.push(element)
    }
}
document.getElementById("two").innerHTML = evenNumbers;