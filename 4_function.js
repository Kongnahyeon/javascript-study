// function
// - fundamental building block in the program :프로그램을 구성하는 중요한 역할
// - subprogram can be used multiple times : 여러번 재사용이 가능
// - performs a task or calculates a value

// 1. function declaration
// function mane(param1, param2) { body... return; }
// one function === one thing : 하나의 함수 = 한가지의 일을 하도록 지정
// naming: doSomething, command, verb : 이름은 동사의 형태로 지정
// e.g. createCarAndPoint -> createCard, createPoint : 하나의 함수에 여러가지 동작을 세분화 할 수 있는지 생각해보기!
// function is object in JS

//hello만 출력이 가능하여 효율적이지 X
function printHello(){
    console.log('Hello!');
}
printHello(); //Hello

//파라미터식으로 작성하면 원하는 메세지를 전달 가능
function log(message){
    console.log(message);
}
log('Hello@'); //Hello@
log(1234); //1234 - 문자열로 인식하여 출력이 가능

// typeScript에서 사용시 위 문법을 -> 파라미터나, return type의 type을 명시해주어야함
/* function log(message: string): number { 
    console.log(message);
    return 0; -> return에 숫자를 넣어줘야 오류가 생기지않음
}
*/


// 2. Parameters
// premitive parameters: passed by value :메모리에 value가 저장이 되어있기때문에 value가 전달이 됨
// object parameters: passed by reference :메모리에 reference가 저장이 되어있기때문에 reference가 전달이 됨

function changeName(obj){
    obj.name = 'hyoin';
}
const nahyeon = { name: 'nahyeon' };
changeName(nahyeon);
console.log(nahyeon); //hoyin


// 3. Default parameters (added in ES6)
// 기존의 경우 파라미터 2개다 입력해주지 않을 시 입력하지 않은 파라미터는 undefined가 출력이되어 if문을 통해 정의를 해줘야 했지만,
function showMessage(message, from){
    if (from === undefined){
        from = 'unknown';
    }
    console.log(`${message} by ${from}`);
}
showMessage('Hi!'); //from이 정의되지 않아 'Hi! by undefined'가 출력됨

// ES6에서 새롭게 추가가 되면서 사용자가 파라미터 값을 정하지 않을때 unknown이 대체되어 사용됨
function showMessage2(message, from = 'unknown'){
    console.log(`${message} by ${from}`);
}
showMessage2('Hi!!');


// 4. Rest parameters (added in ES6) :(...)해서 출력시 배열형태로 전달
function printAll(...args){
    for (let i = 0; i < args.length; i++){ //args의 갯수만큼 루프를 사용하여 배열로 출력함
        console.log(args[i]);
    }
}
printAll('nahyeon', 'hyoin', 'sinwoo');

//위 내용에서 더 간단하게 사용하는 방법
function printName(...args){
    for(const arg of args){
        console.log(arg);
    }
}
printName('nazzi', 'hyozzi', 'chichi');

//더 간단하게 적용하는 방법
function printName2(...args){
    args.forEach((arg) => console.log(arg)); 
}
printName2('chichi', 'hyunchi', 'mingchi');


// 5. Local scope
let globalMessage = 'global'; // global variable :전역변수
function printMessage(){
    let message = 'hello';
    console.log(message); // local variable :지역변수
    console.log(globalMessage);

    function printAnother(){
        console.log(message);
        let childMessage = 'hello!';
    }
    // console.log(childMessage); - error
    //return undefined; -> return값이 없는 것은 undefined와 동일 (return값이 없으면 return을 생략해도 됨)
}
printMessage();


// 6. Return a value
function sum(a, b){
    return a + b;
}
const result = sum(1, 2); //3
console.log(`sum: ${sum(1, 2)}`); //sum: 3


// 7. Early return, early exit
// bad
function upgradeUser(user){
    if(user.point > 10){
        //long upgrade logic...
        //block 안에서 조건문을 사용하면 코드가 너무 지저분해짐
    }
}

// good
function upgradeUser(user){
    if(user.point <= 10){
        return;
        //조건이 맞지 않을 시 return을 해서 함수를 종료 하고 다음 함수를 실행하게 설정
    }
    // long upgrade logic...
}




// First-class function
// functions are treated like any other variable.
// can be assigned as a value to variable
// can be passed as an argument to other function
// can be returned by another function

// 1. Function expression 
// a function declaration can be called earlier than it is defined. (hoisted)  : 함수가 선언되기 이전에 호출을 해도 가능
// a function expression is created when the execution reaches it. : 할당이 된 다음 부터 호출이 가능
const print = function(){ // anonymous function :이름이 없는 함수
    console.log('print');
};
print(); //print
const printAgain = print;
printAgain(); //print
const sumAgain = sum;
console.log(sumAgain(1, 3)); //4


// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo){
    if(answer === 'love you'){
        printYes();
    } else {
        printNo();
    }
}
// anonymous function
const printYes = function(){
    console.log('yes!');
};
// named function
// better debugging in debugger's stack traces
// recursions 
const printNo = function print(){
    console.log('No!');
    //print(); -> 함수안에서 함수를 호출할 시,
};
randomQuiz('wrong', printYes, printNo); //No!
randomQuiz('love you', printYes, printNo); //Yes!

// Arrow function
// always anonymous
/*
const simplePrint = function(){
    console.log('simplePrint!');
};
*/

const simplePrint = () => console.log('simplePrint!');
const add = (a,b) => a + b;
/*
const add =  function (a, b){
    return a + b;
};
*/

// 한줄로도 작성이 가능하지만, 함수 안에서 다양한 block들이 필요할시
const simpleMultiply = (a, b) => {
    // do something more
    return a * b; //block 에서 사용할 시 return을 해줘야함
};


// IIFE: Immediately Invoked Function Expression
// 기존에는 함수를 선언해주려고 한다면 hello();로 한번더 호출을 해줘야하는데
function hello(){
    console.log('IIFE');
}
hello();

// ()안에서 함수를 선언후 뒤에서 ()로 함수를 호출해주면 끝!
(function hell(){
    console.log('IIFE@');
})();


// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder