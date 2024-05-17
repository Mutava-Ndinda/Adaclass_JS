let fruits = ["Mango","Banana","Orange"];
let arr = new Array(20,30);

console.log({fruits});
console.log({arr}); 

fruits[1] = 2;
console.log({fruits});

console.log("last items", fruits.slice(-1));
console.log(fruits[fruits.length -1])

let addlast = fruits.push("Apples");//push adds items at the end of the array
console.log({fruits});

let addstart = fruits.unshift("Pineapple")//unshift adds items at the begining of an array
console.log({fruits})

let removelast = fruits.pop();//removes the last item in the array
console.log({fruits})

let removefirst = fruits.shift();//removes the first item in the array
console.log({fruits});

let newfruits = fruits.push(["Tomato","Pear"]);
console.log({fruits})

//sum of items in an array
//1.reduce method- take another function(accumulator and current value)
let items = [20,30,40,50,60];
let add = items.reduce((acc, cur)=> acc+cur);
console.log({add});

//multipy
//2.map-goesthrough each item in an array, manipulates it and returns a new array
let multiply = items.map(item=> item * 2);
console.log({multiply})

//return the square
//3.forEach-
let square = items.forEach(item => item * item);//you get undefined-cannot return
console.log({square});


let square1 = [];
let total = 0;
items.forEach(item =>{
     // const multiple=item * item;
     // console.log(multiple);
     // square1.push(multiple);
     total+= item
});
console.log({square1});
console.log({total});

//destructuring
//rest -spread operator
let [num1,num2,num3, ...rest]=items;
console.log({num1});
console.log({num2});
console.log({num3});
console.log({rest});