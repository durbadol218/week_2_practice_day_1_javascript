const leapYear = (year) => {
    if (year % 400 === 0 || (year%4===0 && year % 100!=0)){
        console.log(`${year} is a leap year!`);
    }
    else
    {
        console.log(`${year} is not a leap year!`);
    }
};

// const year = parseInt(prompt("Enter a year: "));
year=2019;
leapYear(year);