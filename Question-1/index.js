/*Write a function named fizzBuzz that takes in two(2) parameters 
which are expected to be strings. The function should 
return the string Fizz if the combined length of the parameters is divisible by 3, 
the string Buzz if it is divisible by 5, 
and the string FizzBuzz if it is divisible by both 5 and 3.*/


function fizzBuzz(firstStr, SecondStr){

    let combinedLength = firstStr.length + SecondStr.length;

    if (combinedLength % 5 === 0 && combinedLength % 3 === 0){
        return 'FizzBuzz';
    }else if (combinedLength % 3 === 0){
        return 'Fizz';
    }else if (combinedLength % 5 === 0){
        return 'Buzz';
    }else{
        return 'Not divisible by 3 and 5';
    }

}

let output1 = fizzBuzz('fahadlikesJavaS', 'fahadlikesJavaS');
console.log(output1);


let output2 = fizzBuzz('Java', 'Py');
console.log(output2);

let output3 = fizzBuzz('JavaSt', 'Ruby');
console.log(output3);

let output4 = fizzBuzz('C', 'Kotlin');
console.log(output4);


let bodyEl = document.querySelector('body');

let h1 = document.createElement('h1');
h1.innerText = output1;

let h2 = document.createElement('h2');
h2.innerText = output2;

let h3 = document.createElement('h3');
h3.innerText = output3;

let h4 = document.createElement('h4');
h4.innerText = output4;

bodyEl.append(h1, h2, h3, h4);