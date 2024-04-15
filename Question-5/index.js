/*Given an integer num, 
write a function that repeatedly adds all its digits until the result 
has only one digit, and return it.*/




function addNos(num){
    let toaString = num.toString().split('');
    let numberArray = [];
    for (let i = 0; i < toaString.length; i++){
        numberArray.push(Number(toaString[i]));
        // numberArray.push(parseInt(toaString[i])); Another method to convert string to number

    }
    let sum = 0;
    for (let n = 0; n < numberArray.length; n++){
        sum += numberArray[n];
    }
    return sum

    
}

console.log(addNos(38));

console.log(addNos(11));