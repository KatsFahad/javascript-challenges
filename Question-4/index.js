/*Write a function named firstPalindrome which takes a parameter: words. 
Given an array of string words, return the first palindromic string in the array. 
If there is no such string, return an empty string "".
A string is palindromic if it reads the same forward and backward.*/

let words = ['abc', 'car', 'ada', 'racecar', 'cool'];

function firstPalindrome(words){
    for (let i = 0; i < words.length; i++){
        if (words[i].split('').reverse().join('') === words[i]){
            return words[i]
        }
    }
}

let output = firstPalindrome(words)

console.log(output);
