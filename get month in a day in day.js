// write a program which tells the number of days in a months
var getdaymonth = function( month ,year){
    return new Date(year,month ,0).getDate();
};
console.log(getdaymonth(1,2021));
console.log(getdaymonth(2,2019));
console.log(getdaymonth(6,2019))