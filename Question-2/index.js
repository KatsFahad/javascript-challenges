/*Write a JavaScript program that prompts a user to enter their year of birth
and in turn prints a string in the console stating whether the user is a minor, a youth, or an elder.
Anyone below 18 years is a minor,
anyone between 18 and 36 years is a youth
and the rest are elders.*/

let userBitrhYear = prompt('Enter your year of birth: ');

let currentDate = new Date();

let currentYear = currentDate.getFullYear();

if (currentYear - userBitrhYear >= 18 && currentYear - userBitrhYear <= 36){
    console.log('You are a youth');
}else if (currentYear - userBitrhYear < 18){
    console.log('You are a minor');
}else{
    console.log('You are an elder');
}


