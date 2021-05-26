// task4
let result = [1, 3, 4, 1, 1, 3, 4, 5, -5, -5, -5, 5, 5, 5];

function mode(array)
{
    if(array.length === 0)
        return null;
    const modeMap = {};
    let maxEl = array[0], maxCount = 1;
    for(let i = 0; i < array.length; i++)
    {
        const el = array[i];
        if(modeMap[el] == null)
            modeMap[el] = 1;
        else
            modeMap[el]++;
        if(modeMap[el] > maxCount)
        {
            maxEl = el;
            maxCount = modeMap[el];
        }
    }
    return maxEl;
}

console.log(mode(result));