  
// Q.1 > How to fetch the millisecond according to universal time from a given Date object?
                                    

 var date1 = new Date('january 15 2000 05:35:20.1320');  

console.log(date1.toDateString());                     
console.log(date1);
console.log(date1.getMilliseconds());  

/*
"2000-01-15T00:05:20.132Z"

132

*/
