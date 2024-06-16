// Problem-7
var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

function remove(array)
{
    return [...new Set(array)];
}
console.log(...remove(numbers));

// Problem-8
console.log(Math.max(...numbers));