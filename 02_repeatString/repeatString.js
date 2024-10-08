const repeatString = function(inputString, num) {

    if(num < 0)
        return `ERROR`;
    let result = ``;
    for(let i = 0; i < num; i++)
        result += inputString;

    return result;
};

// Do not edit below this line
module.exports = repeatString;
