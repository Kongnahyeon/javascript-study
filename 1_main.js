//Whole-script strict mode syntax
//JavaScript is very flexible
//flexible == dangerous
//added ECMAScript 5
//'use strict';

'use strict';
//ex) 'use strict'를 사용하지 않고 a = 6;을 적어도 브라우저에 전혀 문제가 되지않음.
//    'use strict'를 선언하게 되면 a = 6 이라는 변수가 정의된게 없기 때문에 에러가 생김.
//     => a = 6 이전에 let a; 라고 선언하게 되면 문제가 없음.
//script 실행에 성능개선, 효율적으로 개발이 가능 하여 항상 적는 것을 추천!

console.log('Hello World!');