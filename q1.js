  
// Q.1 > How to fetch the millisecond according to universal time from a given Date object?
                                    

 var date1 = new Date('October 15 1996 05:35:32.77');  

console.log(date1.toDateString());                     
console.log(date1);
console.log(date1.getMilliseconds()); 
/*

"Tue Oct 15 1996"
// [object Date] 

"1996-10-15T00:05:32.770Z"

770
*/
