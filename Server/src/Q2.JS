const num = 642531;
console.log(num);

const numArray = numToArray(num);
console.log(numArray);

const sortedNumArray = sortNumArray(numArray);
console.log(sortedNumArray);

const numArrayToNum = numArrayToNum(sortedNumArray);
console.log(numArrayToNum);

function numToArray(num) {
    const myFunc = numAsString => Number(numAsString);
    return Array.from(String(num), myFunc);
}

function sortNumArray(numArray) {
    for (let i = 0; i < numArray.length; i++) {

        let indexOfMin = i;
        for (let j = i; j < numArray.length; j++) {
            if (numArray[j] < numArray[indexOfMin]) {
                indexOfMin = j;
            }
        }

        swap(numArray, i, indexOfMin);
    }

    return numArray;

    function swap(array, a, b) {
        const valAtB = array[b];
        array[b] = array[a];
        array[a] = valAtB;
    }
}

function numArrayToNum(sortedNumArray){
    let sum = 0;
    // array[i]
    // 3 2 1
    // sum = sum * 10
    // sum = sum + array[i]
    // 0 * 10 = 0 ; 0 + 3 = 3
    // 3 * 10 = 30 ; 30 + 2 = 32
    // 32 * 10 = 320 ; 320 + 1 = 321
    for (const num in sortedNumArray) {
        sum *= 10;
        sum += num;
    }
    return sum;
}

