const sumAll = function(num1, num2) {

    if(num1 < 0 || num2 < 0)
        return `ERROR`;

    if(Number.isInteger(num1) === false || Number.isInteger(num2) === false)
        return `ERROR`;
    
    let result = 0;
    let smallerNumber = (num1 < num2) ? num1 : num2;
    let largerNumber = (num1 > num2) ? num1 : num2;
    while(smallerNumber <= largerNumber)
    {
        result += smallerNumber;
        smallerNumber++;
    }

    return result;
};

// Do not edit below this line
module.exports = sumAll;
