### Do It Typescript Progarmming
아래 설명은 책을 읽고 괜찮다 싶은 내용이나 알게된 내용을 바탕으로 서술한 것이니 이 점 유의 하고 봐주시길 바랍니다.

### TS는 누가 만들었을까?

TS는 마이크로소프트가 개발하고 유지하고 있는 오픈소스 프로그래밍 언어로 2021년 말 처음 발표되었다.

### JS에 타입 기능이 있으면 좋은 이유

함수나 어떤 파라미터를 받을 때 타입을 명시해주기 때문에 사소한 오류나 파라미터에 값을 잘못넣는 오류를 확실하게 방지 할 수 있다.

### ESNEXT

JS에는 현재 3가지 종류가 있다. JS, ESNEXT, TS 인데 이 3가지의 관계는 아래 사진과 같다.

![image](https://user-images.githubusercontent.com/62810965/126130699-e6ff526f-d18f-4293-be1b-d18e13e6a31b.png)


ESNEXT는 JS의 모든 문법을, TS는 ESNEXT의 모든 문법을 포함하고있기에 TS를 공부하려는 우리는 ESNEXT의 문법을 모두 알고있어야한다.

### ESNEXT - 비구조화 할당

```tsx
// 본 예시는 비구조화 할당입니다.

// basic
let person = { name: "Jane", age: 22 };
let { name, age } = person // name = "Jane", age = 22

// array 
let array = [1, 2, 3, 4];
let [head, ...rest] = array; // head = [1], rest = [2, 3, 4]

// swap
let a = 1, b = 2;
[a, b] = [b, a] // a = 2, b = 1
```

### ESNEXT - 화살표 함수

```tsx
// 본 예시는 화살표 함수입니다.

function add1 (a, b) {
	return a + b;
}
// same
function add2 = (a, b) => a + b;
```

### ESNEXT - 클래스

ESNEXT에서는 클래스를 지원합니다. 이제 저희는 객체지향 프로그래밍을 할 수 있게 된것이죠,

다음 예시는 객체지향 프로그래밍의 특징인 **캡슐화** **상속** **다형성** 이라는 3가지 요소를 지원하는것을 보여줍니다.

```tsx
abstract class Animal {
	constructor(public name?: string, public age?: number) { }
	abstract say(): string
}

class Cat extends Animal {
	say() { return "야옹" }
}

class Dog extends Animal {
	say() { return "멍멍" }
}

let animals: Animal[] = [new Cat('야옹이', 2), new Dog('멍멍이', 3)];
let sounds = animals.map(a => a.say()); // ["야옹", "멍멍"]
```

### ESNEXT - 모듈

모듈을 사용하면 코드를 여러 개 파일로 분할해서 작성할 수 있습니다. 변수나 함수, 클래스 등에 export 키워드를 사용하여 모듈로 만든다면 다른 파일에서도 사용가능합니다.

```tsx
import * as fs from 'fs';
export function writeFile(filepath: string, content: any) { }
```

### ESNEXT - 생성기

TS는 물론 Python이나 PHP같은 몇몇 프로그래밍 언어는 **yield**라는 특별한 키워드를 제공합니다.

이 키워드는 '반복자'를 의미하는 **반복기(iterator)**를 생성할 때 사용합니다. 그런데 이 반복기는 반복기 **제공자(iterable)**를 통해 얻을 수 있습니다. 이 처럼 yield문을 이용해 반복기를 만들어 내는 반복기 제공자를 **생성기(generator)**라고 부릅니다.

생성기는 function 키워드에 **별표(*)**를 결합한 **function***과 yield 키워드를 이용해 만듭니다.

TS에서 yield는 반드시 function*으로 만들어진 함수 내부에서만 사용할 수 있습니다.

```tsx
function gen* () { // function* = 생성기
	yield* [1, 2]    // function* 덕분에 이 라인에서 yield*를 사용할 수 있음
}

for (let value of gen()) { console.log(value) } // 1, 2
```

### ESNEXT - asnyc / await

```tsx
async function get() {
	let values = [];
	values.push(await Promise.resolve(1));
	values.push(await Promise.resolve(2));
	values.push(await Promise.resolve(3));
	return values;
}

get().then(values => console.log(values)); // [1, 2, 3]
```

이제 ESNEXT 문법을 간략하게 알아봤으니 TS 고유의 문법을 살펴보겠습니다.

### TS - 타입주석 및 타입추론

```tsx
let n: number = 1; // 타입 주석
let m = 2; 
// 타입 주석을 적지 않으면 TS가 오른쪽 값을 자동으로 분석해 변수의 **타입을 추론**합니다.

```

### TS - 인터페이스

```tsx
interface Person {
	name: string
	age?: number
}

let person: Person = { name: "Jane" }
```

### TS - 튜플

튜플은 물리적으로는 배열과 같습니다. 다만, 배열에 저장되는 아이템의 타입이 모두 같으면 배열, 
다르면 튜플입니다.

```tsx
let numberArray: number[] = [1, 2, 3]; // 배열
let tuple: [boolean, number, string] = [true, 1, 'OK']; // 튜플
```

### TS - 제네릭 타입

제네릭 타입은 다양한 타입을 한꺼번에 취급할 수 있게 해줍니다. 다음 코드에서 Container클래스는 value속성을 포함합니다.  이 클래스는 Container<number>, Container<string>, Container<number[]>, Container<boolean>처럼 여러 가지 타입을 대상으로 동작할 수 있는데, 이를 **제네릭 타입**이라고 합니다.

```tsx
class Container<T> {
	constructor(public value: T) { }
}

let numberContainer: Container<number> = new Container<number>(1);
let stringContainer: Container<string> = new Container<string>("Hi");
```

### TS - 대수 타입

ADT란, **추상 데이터 타입(abstract data type)**을 의미하기도 하지만 **대수 타입(algebraic data type)**을 의미하기도 합니다. 대수 타입이란, 다른 자료형의 값을 가지는 자료형을 의미합니다. 크게 **합집합 타입**과 **교집합 타입** 두 가지가 있습니다. 합집합 타입은 **" | "** 기호를, 교집합 타입은 **' & '** 기호를 사용합니다. 한마디로 컴일 때 배운 || 냐 && 이냐의 차이 인거같다.

```tsx
type NumberOrString = number | string // 합집합 타입 예
type AnimalAndPerson = Animal & Person // 교집합 타입 예
```

---

이제 실제 코드를 작성하고 이해하는 시간입니다. 이 부분부터는 제가 실제로 해보면서 이해한것들 또는 중요하다고 생각되는것들을 서술해놓겠습니다.

### 모듈화

```tsx

// import 키워드
import { 심벌 목록 } from '파일의 경로';

// import * as 구문
import * as All from '파일의 경로';
```

```tsx
// export default 키워드
export default interface IPerson {
	name: string
	age: number
}

// import 시에 {} 를 붙이지 않아도 된다. 그 이유는 IPerson이라는 interface를 export 할 때
// export default 키워드를 사용해서 export했기 때문이다.
import IPerson from '경로';

// 한 파일에 export와 export default가 같이 있을 때 import 해오는 법
// Person이 export default, makePerson이 그냥 export
import Person, {makePerson} from '경로';
```

### tsconfig.json 의 Key 설명

```json
{
  "compilerOptions": {
    "module": "commonjs",
    "esModuleInterop": true,
    "target": "es5",
    "moduleResolution": "node",
    "outDir": "dist",
    "baseUrl": ".",
    "sourceMap": true,
    "downlevelIteration": true,
    "noImplicitAny": false,
    "paths": { "*": ["node_modules/*"] }
  },
  "include": ["src/**/*"]
}
```

- module
TS 소스가 컴파일 되어 만들어진 ES5 코드는 웹 브라우저와 노드 양쪽에서 모두 동작해야한다. 그런데 웹 브라우저와 노드는 물리적으로 동작하는 방식이 달라서 여러개의 모듈로 분할된 JS코드 또한 다르게 동작한다. 웹 브라우저는 AMD, 노드는 CommonJS방식. tsconfig.json 파일의 compilerOptions의 module 키는 동작 플랫폼이 웹 브라우저인지 노드인지를 구분해 그에 맞는 모듈방식으로 컴파일 하려는 목적으로 설정한다.
- moduleResolution
module의 키값이 CommonJS면 노드에서 동작하는것을 의미하므로 node로, AMD면 웹 브라우저에서 동작하는것을 의미하므로 classic으로 설정해야한다.
- target
target은 트랜스파일할 대상 자바스크립트의 버전을 설정한다. 대부분 es5지만 최신 버전의 노드를 사용한다면 es6를 설정할 수 있다.
- baseUrl과 outDir
트랜스파일된 ES5 JS파일을 저장하는 디렉터리를 설정한다. tsc는 tsconfig.json파일이 있는 디렉터리에서 실행된다. 따라서 현재 디렉터리를 의미하는 `.` 으로  baseUrl 값을 설정하는것이 보통이다. OutDir키는 baseDir 설정값을 기준으로 했을 때 하위 디렉터리의 이름이다. 앞서 이 키는 dist라는 값을 설정했으므로 빌드된 결과가 dist디렉터리에 만들어진다.
- paths
소스파일의 import 문에서 from 부분을 해석할 때 찾아야 하는 디렉터리를 설정한다. import문이 찾아야하는 소스가 외부 패키지이면 node_modules 디렉터리에서 찾아야 하므로 키값에 `node_moudles/*`도 포합했다.
- esModuleInterop
오픈소스 JS lib중에는 웹 브라우저에서 동작한다는 가정으로 만들어 진 소스들이 있다. 이들은 CommonJS방식으로 동작하는 TS코드에 혼란을 줄 수 있다. 02-2에서 사용한 lib인 **chance**가 바로 AMD방식을 전제로 해서 구현된 라이브러리이다. 따라서 **chance**패키지가 동작하려면 esModuleInterop 키값을 반드시 true로 설정해야한다.
- sourceMap
sourceMap의 키 값이 true이면 트랜스파일 디렉터리에는 .js파일 이외에도 .js.map 파일이 만들어진다. 이 소스맵 파일은 변환된 JS코드가 TS코드의 어디에 해당하는지 알려준다. 소스맵 파일은 주로 디버깅할 대 사용된다.
- downLevelIteration
생성기 구문이 정상적으로 동작하려면 downLevelIteration 키값을 반드시 true로 설정해야한다.
- nolmplicitAny
TS컴파일러는 기본적으로 f(a, b)처럼 매개변수 a, b에 타입을 명시하지 않은 코드일 경우 암시적으로 any 타입을 설정한 것으로 간주한다. 이런 형태의 코드는 TS 언어의 장범을 사용하는 것이 아니므로 다음처럼 코드에 문제가 있음을 알려준다.

### 객체와 타입 - 익명 인터페이스

일일히 인터페이스를 만들어서 객체의 타입을 지정해주기 귀찮은 상황일 때 쓸만할 익명 인터페이스

```tsx
let ai: {
	name: string
	age: number
	etc?: boolean
} = { name: "Mark", age: 23 };

function printMe(me: {name: string, age: number, etc?: boolean}) {
	console.log(
		me.etc ? `${me.name} ${me.age} ${me.etc}` : `${me.name} ${me.age}`
	);
}

printMe(ai); // Mark 23
```

### 클래스 - 생성자

TS에서의 클래스에서는 constructor라는 이름의 특별한 메서드를 포함합니다. 

아래 코드에서 Person1은 Person2와 같고 Person2는 Person3의 축약형입니다.

constructor의 매개변수에 public과 같은 접근 제한자를 붙이게 되면 해당 매개변수의 이름을 가진 속성이 클래스에 선언된 것처럼 동작합니다.

```tsx
class Person1 {
	name: string
	age?: number
}

let jack1: Person1 = new Person1();
jack1.name = "Jack"; jack1.age = 32;
console.log(jack1) // Person1 { name: 'Jack', age: 32 }

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

class Person2 {
	constructor(public name: string, public age?: number) {}
}

let jack2: Person2 = new Person2('Jack', 32)
console.log(jack2); // Person2 { name: 'Jack', age: 32 }

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

class Person3 {
	name: string
	age?: number
	constructor(name: string, age?: number) {
		this.name = name; this.age = age
	};
}

let jack3: Person3 = new Person3('Jack', 32)
console.log(jack3); // Person3 { name: 'Jack', age: 32 }
```

### 잔여 연산자와 전개 연산자

ESNEXT, JS,  TS는 점을 3개 연이여 사용하는 ... 연산자를 제공합니다. 이 연산자는 사용되는 위치에 따라 잔여 연산자 혹은 전개 연산자로 불리는데요 아래와 같이 비구조화 할당에서 ...연산자가 쓰인다면 잔여 연산자, 비구조화 할당에서 쓰이지 않은 ...연산자라면 전개 연산자라고 불립니다.

전개 연산자는 의미 그대로 객체의 속성을 모두 **전개**하여 새로운 객체를 만듭니다. 

```tsx
// 잔여 연산자
let address: any = {
	country: 'Korea',
	city: 'Seoul',
	address1: 'a',
	address2: 'b',
	address3: 'c'
}

const {country, city, ...other} = address;
console.log(other); // { address1: 'a',address2: 'b',address3: 'c' }

// 전개 연산자
let coord = {...{x: 0}, ...{y: 0}}
console.log(coord); // {x: 0 y: 0}

let a = {name: "a"}, b = {age: "b"}, c = {etc: "c"};
let merge = {...a, ...b, ...c};
console.log(merge); // { name: 'a', age: 'b', etc: 'c' }
```

### ch04 - 함수

**함수 시그니처**

```tsx
let printMe: (string, number) => void = function (name: string, age: number): void {}
```

**타입 별칭( type alias )**

```tsx
let stringNumberFunc = (string, number) => void;
let f: stringNumberFunc = function (a: string, b: number): void {}
let g: stringNumberFunc = function (c: string, d: number): void {}
```

### 얕은 복사와 깊은 복사

프로그래밍 언어에선 깊은 복사와 얕은 복사 두 종류가 있다. 순수 함수를 구현할 때는 매개변수가 불변성을 유지해야 하므로, 매개변수를 가공하려고 할 때 깊은 복사를 실행해 매개변숫값이 변경되지 않게 해야한다. 깊은 복사는 대상 변숫값이 바뀔 때 원본 변숫값은 그대로이고 얕은 복사를 대상 변숫값을 바꾸면 원본도 같이 바뀌게 된다.

일반적으로 number나 boolea은 항상 깊은 복사 형태로 작동하지만 객체나 배열은 얕은 복사 방식으로 동작한다. 객체나 배열을 깊은 복사 하고 싶을 때에는 전개 연산자를 사용하여서 하면된다.

```tsx
const oArray = [1,2,3,4];
const deepCopiedArray = [...oArray];
deepCopiedArray[0] = 0;
console.log(oArray, deepCopiedArray); // [1,2,3,4] [0,2,3,4]
```

배열에서 특정 아이템을 삭제할 때에도 splice와 filter함수를 사용할 수 있는데 splice는 얕은복사가 되고 filter함수는 깊은 복사가 된다.
