// Problem-5
var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50];

const dividedBy = (array) => {
    let tempArray = [];
    for (let i = 0; i < array.length; i++){
        if(array[i] % 3===0 && array[i] % 5 === 0)
        {
            tempArray.push(array[i]);
        }
    }
    return tempArray;
}

console.log(dividedBy(numbers));





// Problem-6
var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];

const biggestName = (array) => {
    let bigName=array[0];
    for(let i=1; i<array.length; i++){
        if(array[i].length > bigName.length)
        {
            bigName = array[i];
        }
    }
    return bigName;
}

console.log(biggestName(friends));