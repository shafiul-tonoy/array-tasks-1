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

/* 
Use a for...of loop to concatenate all the elements of an array into a single string.

Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

Output:

'TomTimTinTik'
*/
var numbers2 = ['Tom', 'Tim', 'Tin', 'Tik'];
let concatNumbers=""; 

for (let element of numbers2){
    concatNumbers+=element;
}
document.getElementById("three").innerHTML = concatNumbers;

/* 
Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

Input: const statement = 'I am a hard working person'

Output:

'person working hard a am I'
*/

const statement = 'I am a hard working person'
let arr = statement.split(" ").reverse().join(" ");
document.getElementById("four").innerHTML = arr;