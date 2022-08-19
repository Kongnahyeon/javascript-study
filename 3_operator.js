// 1. String concatenation
console.log('my' + 'cart'); //my cart
console.log('1' + 2); //12
console.log(`string literals:
''''''''
1 + 2 = ${1 + 2}`); //string literals: 1 + 2 = 3
//string literals의 경우 중간에 '''' 이렇게 작성을 해도 문자열로 변경해서 출력이 가능

//'를 출력하고자하는 경우
console.log('nahyeon\'s book'); // \' 를 같이 넣어줘야함
//새로 줄바꿈을 할 경우
console.log('nahyeon\'s \nbook'); // \n을 넣어주면됨
//tab key
console.log('nahyeon\'s \n\tbook'); // \t는 tab key의 역할을 해줌



// 2. Numeric operators
console.log(1 + 1); //add
console.log(1 - 1); //subtract
console.log(1 / 1); //divide
console.log(1 * 1); //multiply
console.log(5 % 2); //remainder
console.log(2 ** 3); //exponentiation




// 3. Increment and decrement operators
let counter = 2;
const preIncrement =  ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);

const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);

const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);
// counter = counter - 1;
// preDecrement = counter;

const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);
// postDecrement = counter;
// counter = counter - 1;



// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x +y;
x -= y; 
x *= y;
x /= y;



// 5. Comparison operators
console.log(10 < 6); //less than //false
console.log(10 <= 6); //less than or equal //false
console.log(10 > 6); //greater tan //true
console.log(10 >= 6); //greater than or equal //true



// 6. Logical operators: ||(or), &&(and), !(not)
const value1 = false;
const value2 = 4 < 2;

// || (or) - finds the first truthy value: 3개중 하나라도 참이면 true
console.log(`or: ${value1 || value2 || check()}`); //true
// check()와 같이 용량이 크고 함수를 호출하는 종류들은 제일 뒤에 호출하는 것이 좋다.

// &&(and) - finds the first falsy value : 3개 모두 참이여야 true
console.log(`and: ${value1 && value2 && check()}`); //false

// often used to compress long if-statement
// nullableObject && nullableObject.something
// if ( nullableObject != null ) {
//    nullableObject.something;
// }


function check(){
for(let i = 1; i < 10; i++){
    //wasting time
    console.log('oops');
    }
    return true;
}

// ! (not)
console.log(!value1); //value1의 값이 false이기 때문에 반대로 true가 출력됨




// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
// type상관없이 숫자가 같으면 동일하게 인식
console.log(stringFive == numberFive); // true
console.log(stringFive != numberFive); // false

// === strict equality, no type conversion
// type이 다르면 다르다고 인식
console.log(stringFive === numberFive); // false
console.log(stringFive !== numberFive); // true

// object equality by reference
const nahyeon1 = { name: 'nahyeon' };
const nahyeon2 = { name: 'nahyeon' };
const nahyeon3 = nahyeon1;
console.log(nahyeon1 == nahyeon2); //false 레퍼런스 값이 다름
console.log(nahyeon1 === nahyeon2); //false 레퍼런스 값이 다름
console.log(nahyeon1 === nahyeon3); //true

// equality - puzzler
console.log(0 == false); //true : 0과 null, undefined는 false로 간주될 수 있음
console.log(0 === false); //false
console.log('' == false); //true
console.log('' === false); //false
console.log(null == undefined); //true
console.log(null === undefined); //false : null과 undefined는 다른 타입


// 8. Conditional operators: if
// if, else if, else
const name = 'nahyeon';
if(name === 'nahyeon'){
    console.log('Welcome, nahyeon!');
}else if(name === 'coder'){
    console.log('You are amazing coder');
}else{
    console.log('unknown');
}



// 9. Ternary operator: ?
// condition ? value1 : value2;
console.log(name === 'nahyeon' ? 'yes' : 'no'); //간단하게 작성할때만 사용


// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser =  'Firefox';
switch (browser){
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break;
}
//type에서 정해진 묶음의 아이들을 검사하거나, else if를 나열하는 것보다 switch문을 사용하는 것이 좋음



// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0){
    console.log(`while: ${i}`);
    i--;
}
// 조건문에 맞을때만 실행

// do while loop, body code is executed first,
// then check the condition.
let j = 4;
do{
    console.log(`do while: ${i}`);
    j--;
} while (j > 0);
// {}블럭을 먼저 실행시키고 해당 조건문에 맞는다고 할 시 멈춤

//for loop, for(begin; condition; step)
// begin 1번만 실행 > condition 확인 후 > block 실행 후 step
for (i = 3; i > 0; i--){
    console.log(`for: ${i}`);
}

//for안에서 block 안에 지역변수를 선언해서 작성도 가능
for (let i = 3; i > 0; i = i - 2){
    //inline variable declaration
    console.log(`inline variable for: ${i}`);
}

//nested loops
for(let i = 0; i < 4; i++){
    for(let j = 0; j < 5; j++){
        console.log(`i: ${i}, j:${j}`);
    }
}

//break : 루프를 멈추는것
//continue : 루프가 돌아갈때 지금의 내용은 skip하고 다음으로 넘어감
// 01. iterate from 0 to 10 and print only even numbers(use continue); - 0부터 10까지 짝수인 아이들만 출력
for(let j = 0; j < 11; j++){
    if(j % 2 !== 0){
        continue;
    }
    console.log(`j: ${j}`);
}

for(let j = 0; j < 11; j++){
    if(j % 2 === 0){
        console.log(`j: ${j}`);
    }
}

// 02. iterate from 0 to 10 and print number until reaching 8 (use break) - 0부터 10까지 출력하되 8은 제외
for(let i = 0; i < 10; i++){
    if(i > 8){
        break;
    }
    console.log(`i: ${i}`);
}