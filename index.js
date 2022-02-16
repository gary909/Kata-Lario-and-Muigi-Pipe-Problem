function pipeFix(numbers){
    let myArr = [];
    var firstElement  = numbers[0]
    var lastElement = numbers[numbers.length - 1]
    for (var i = firstElement; i <= lastElement; i++){
        myArr.push(i);
    }
    return myArr;
}

console.log(pipeFix([1,2,3,5,6,8,9])); // [1,2,3,4,5,6,7,8,9]
console.log(pipeFix([1,2,3,12])); // [1,2,3,4,5,6,7,8,9,10,11,12]
console.log(pipeFix([6,9])); // [6,7,8,9]