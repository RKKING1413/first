//Q.6 > How to delete 'Beethoven' from set

console.log("start....");     

const set = new Set(['Beethoven', 'Mozart', 'Chopin', 'Chopin']);
console.log(set);                   
set.delete("Beethoven");            
console.log(set);  

/* output :
Set(3) [ "Beethoven", "Mozart", "Chopin" ]         
Set [ "Mozart", "Chopin" ]                           
 */
