
//Intro  1  1 to 5

alert("Hello world");
a="string";
b=56;
c= true;
console.log(a,b,c);
d=20;
console.log("add : "+(b+d)+"  sub  :"+(b-d)+" mul : "+(b*d)+" div :"+(b/d));
e="builder";
console.log(a+e);
console.log(typeof(a),typeof(b),typeof(c));


//Code struct 2

//singlelinecmt

//multilinecmt

console.log("with ;");
console.log("without ;")
for(let i=0;i<3;i++){
    for(let j=0;j<3;j++){
        console.log(i,j)
    };
};
a=4,b=5,c=10;


//use strict 3

a=7;
//"use strict";
b=5;
delete b;
let public=6;

//variables 4

let l=5
const v=6
var q=7;
//v=8
let g;
console.log(g)

//data types

a=Symbol(5)
console.log(a)
console.log(typeof(a))
a=null;
console.log(typeof(a))
function varScopeExample() {
    if (true) {
      var varVar = "I'm a var variable";
    }
    console.log(varVar); 
  }
  
  function letScopeExample() {
    if (true) {
      let letVar = "I'm a let variable";
    }
    console.log(letVar); 
  }
  
  //varScopeExample();
  //letScopeExample();

  console.log(true && false);   
  console.log(true || false);   
  console.log(!true);           
  console.log((true && false) || !false); 
  
  function isInRange(num, min, max) {
      return num >= min && num <= max;
  }
  
  console.log(isInRange(5, 1, 10));  
  console.log(isInRange(0, 1, 10));  
  
  let boolValue = true;
  boolValue = !boolValue;
  
  console.log(boolValue);  
  
  function shortCircuitExample() {
      return false && console.log("This won't be logged");
  }
  shortCircuitExample();  
  
  function anotherShortCircuitExample() {
      return true || console.log("This won't be logged either");
  }
  anotherShortCircuitExample();  
  
  console.log("Hello" && "World");  
  console.log(0 || 42);             
  console.log(null && "Some Value"); 
  console.log(undefined || "Default Value"); 
  
  
a="56"
b= +a
c=Number(a);
console.log(typeof c)
console.log(c)

console.log(++a)
console.log(a++) 
 function add(a=5,b=10){
  return a+b;
}
console.log(add());
function sum(){
  a=4
  b=100
  console.log(a+b)
}
sum()

greet =()=>{
  console.log("Hello")
}
greet();

adds=(a,b)=>{
  return a+b
}
console.log(adds(9,9))
isEven=(n)=>{
  if(n%2==0) return true
  else return false
}
console.log(isEven(4))

