/**function for ES5 */
//without return
let number1 = function(){
    console.log(10);
}
number1();

//with return
let number2 = function(){
    return 20
}
console.log(number2());

/**function for ES6(arrow function) */

//without return
let number3 = () => console.log(30);
number3();

//with return
let number4 = () => 40;
console.log(number4())
