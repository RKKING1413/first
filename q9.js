//Q.9 > How to access and print greet function from the above object code ?

const gimli =
{
    name: "Gimli",
    race: "dwarf",
    weapon: "axe",
    greet: function () { 
        return `Hi, my name is ${this.name}!`; 
    },
};

console.log(gimli.greet());
/*
output :
start....
Hi, my name is Gimli!
*/
