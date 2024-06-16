function monthlySavings(arr, cost) {
    let total = 0;
    if (Array.isArray(arr) && typeof cost === "number") 
    {
        for (let index = 0; index < arr.length; index++) {
            if (arr[index] >= 3000)
            {
                total += arr[index] * 0.8;
            }
            else 
            {
                total += arr[index];
            }
        }
        total -= cost;
        if (total < 0)
        {
            return "earn more";
        } 
        else
        {
            return total;
        }
    }
    else 
    {
        return "invalid input";
    }
}

const incomes = [1000, 2000, 2500];
let cost = 5000;
console.log(monthlySavings(incomes, cost));