const reverseString = function(stringToReverse) {
    let stringToReverseLength = stringToReverse.length;
    let reversedString = ``;
    for(let i = stringToReverseLength - 1; i >= 0; i--)
    {
        reversedString += stringToReverse.charAt(i);
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
