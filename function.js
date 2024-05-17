function add(num1,num2){
    const sum = num1 + num2;
    console.log({console:sum});   
    //returns {'sum':sum}
}
add(2,3);
add(4,5);


const student= 'jimin'//global
function item(){
    const names = ['Anne','Eunice'];
    console.log({names});//local scope-cannot be accessed anywhere else
    console.log({inside:student}) 
}
item();
console.log({outside:student})//global scope-can be access anywhere-inside or outside the function

//function expressions- a function that is a value to a variable
const substract= function (num1,num2){
console.log(num1-num2)
}
substract(20,10);

//arrow functions
const multiply = (num1,num2)=>console.log(num1*num2);
multiply(6,9); 

//IIFES-immediaty invoked function 
(function(){
    console.log('Hello Nisa');
})();

//hosting -calling a variable or a function before you declare it
console.log({person});
var person= 'human'
console.log('person 2...',person);

greet();
function greet(){
    console.log('Hi person');
}
