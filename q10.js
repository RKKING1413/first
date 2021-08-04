/*Q10 > Consider below as an example of constructor function where we want name and level to be
referred to a function itself, is below example correct or not? Please explain?*/


function Hero(name, level)
{
name = name;
level = level;
}

/*

In js, a constructor function is basically a function that creates an object.
as we can see above that there is an either wrong or incomplete syntax for constructor function,


however the below function can be called as constructor function as it contain complete syntax

*/

function Hero (name, level)
{
name = name;
level = level;
  console.log(name , level);
}

const hero = new Hero("rk",10);
