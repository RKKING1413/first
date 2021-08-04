/* Q.8 > How to copy values from one object to another in above mentioned example , merge and
print them?*/


const name = { 
    firstName: 'Philip',
    lastName: 'Fry' 
};

const details = {
    job: 'Delivery Boy',
    employer: 'Planet Express'
};
var final= Object.assign(name, details)     // copying the value from both objects and storing it in targeted obejects.
console.log(final);                           // dispalyinh the target object which holds properties of both objects.

/* output : 
Object
{
firstName: "Philip", 
lastName: "Fry", 
job: "Delivery Boy",
employer: "Planet Express"
}
*/
