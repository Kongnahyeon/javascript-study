// 1. Use strict
// added in ES 5
// use this for Vanilla Javascript
'use strict';

console.log(age); //undefined - var의 특징



// 2. Variable, rw(read/write)
// let (added in ES6)
// 변수를 선언 후에도 변경이 가능

let name = 'nahyeon';
console.log(name);
name = 'hello';
console.log(name);


let globalName = 'global name'; {
    let name2 = 'nahyeon2';
    console.log(name2);
    name2 = 'hello2';
    console.log(name2);
    console.log(globalName);


}
// console.log(name2);
// - {}안에서 작성을 하고 {}밖에서 호출을 해도 출력이 되지않음.(오류)
console.log(globalName);
//globalName의 경우 {}안이든 밖이든 어디서든 호출가능


// var (don't ever use this!)
// var hoisting (move declaration from bottom to top : 어디에 선언되든 상관없이 위로 올려주는 것)
console.log(age); //undefined
age = 27;
console.log(age); // 27
var age;
// var의 경우 변수를 선언하기 전에 출력이됨. 값을 할당하기 전에도 출력이 됨


{
age = 27;
var age;
}
console.log(age); //27

// has no block scope : 블럭을 무시함, {}안에서 선언해도 어디에서나 호출하면 불러짐.


// name = 28;
// let name;
// let의 경우 값의 설정하기전에 선언을 하면 오류가 생김.




// 3. Constant, r(read only)
// use const whenever possible.
// only use let if variable needs to change.
// 한번 선언한 변수는 변경하지 못함.

const daysInWeek = 7;
const maxNumber = 5;


// Immutable data types: primitive types, frozen objects (i.e. object.freeze()) -> data자체를 절때 변경안되는 것
// Mutable data types: all objects by default are mutable in JS -> 스스로 변경이 가능한 것, ex) javascript 배열
// favor immutable data type always for a few reasons :
//      - security : 보안이 필요한 것
//      - thread safety : 동시에 변경을 해야하는 경우
//      - reduce human mistakes : 추후 변수 변경이 필요 없을시, 수정하기 편리





// 4. Variable types
// primitive, single item : number, string, boolean, null, undefined, symbol
// object, box container -> 용량이커서 메모리에 한번에 올라갈 수 없음 ex) nahyeon.age / nahyeon.name
// function, first-class function
// * c언어의 변수의 경우 : short, int, long (정수) / float, double (소수점, 실수)
// * java의 경우 number이라고 data type을 선언하지 않아도 됨, 정수나 소수점 상관없이 let a = 12 / let b = 12.4 이런식으로 선언해주면됨

const count = 17; //integer
const size = 17.2; //decimal number
console.log(`value: ${count}, type: ${typeof count}`); // 17, number
console.log(`value: ${size}, type: ${typeof size}`); // 17.2, number

//number - special numeric values : infinity, -infinity, Nan(숫자가 아닌 것)
const infinity = 1 / 0; // Infinity : 무한대의 숫자값이 생김
const negativeInfinity = -1 / 0; //-infinity
const nAn = 'not a number' / 2; // NaN : 숫자가 아닌 경우 숫자로 나눌경우 NaN으로 출력이됨.
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

//bigInt (fairly new, don't use it yet) -> 아직 크롬은 사용 안됨
const bigInt = 12345678902378277382793727193782; //over (-(2**53) ~ 2**53) : script에서 허용가능한 범위
//const bigInt = 12345678902378277382793727193782n; //숫자 뒤에 n을 붙일경우 bigint라는 것을 알려줌

console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;



// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
// = console.log('value:' + helloBob + 'type:' + typeof helloBob); => ``을 이용하지 않으면 이렇게 + 해서 사용해야함


// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; //false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

//null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

//undefined
let x; // 선언은 되었지만, 값이 없는 상태
console.log(`value: ${x}, type: ${typeof x}`); 

//symbol, create unique identifiers for objects : 고유한 식별자가 필요할 경우
const symbol1 = Symbol('id');
const symbol2 = Symbol('id'); //두개의 심볼이 다를 경우
console.log(symbol1 === symbol2); //false

//주어진 심볼에 맞는 string을 만들고 싶은 경우
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); //true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`); //symbol의 경우 그냥 출력하면 오류가 생겨서 .description을 같이 적어줘야함.

// object, real=life object, data structure
const nahyeon = { name: 'nahyeon', age: 27};
nahyeon.age = 20;




// 5. Dynamic typing: dynamically typed language
let text = 'hello';
console.log(text.charAt(0)); //h, string으로 이해하기 때문에 
console.log(`value: ${text}, type: ${typeof text}`); //hello, string
text = 1;
console.log(`value: ${text}, type: ${typeof text}`); //1, number
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`); //75, string
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`); //4, number : string으로 해도 / 가 있어 숫자로 인식 
//console.log(text.charAt(0)); //당연히 string으로 인식되는데 도중 숫자가 있기때문에 오류가 생김
text = 8 + 2;
console.log(`value: ${text}, type: ${typeof text}`); //10, number

