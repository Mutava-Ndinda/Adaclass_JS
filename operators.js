//arithmetic
let a = 20;
let b = 30;
 let add = a+b;
 console.log({add});

 let subtraction = a-b;
 console.log({subtraction});

 let division = a/b;
 console.log({division});

 let multiply = a*b;
 console.log({multiply});

 //comparision
 let c = "20";
 let looselyEqualTo = a==c; //checks for the value only
 console.log({looselyEqualTo});

 let strictlyEqualTo = a===c;  //checks for the value and datatype
 console.log({strictlyEqualTo});

 let notEqualTo = a!=c;
 console.log({notEqualTo});

 let strictlyNotEqualTo = a!==c;
 console.log({strictlyNotEqualTo});

 //increment
 a++;
 console.log({a});
  
 a+=5;
 console.log({a});
 //decrement
 b--;
 console.log({b});

 // Implicit coercion - internally by JS
 let d =1*c;   //change the datatype 
 console.log({d});

 let e = +c;
 console.log({e});

 //explicit coercion -Externally by user
 let f = Number(c);
 console.log({f});
