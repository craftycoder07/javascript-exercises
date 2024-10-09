const removeFromArray = function(originalArr, ...theArgs) {
    let resultArr = [];
    for (let i = 0; i < originalArr.length; i++)
    {
        let isPresent = false;
        for(let j = 0; j < theArgs.length; j++)
        {
            if(originalArr[i] === theArgs[j])
                isPresent = true;
        }

        if(isPresent === false)
            resultArr.push(originalArr[i]);
    }
    return resultArr;
};

// Do not edit below this line
module.exports = removeFromArray;
