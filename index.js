console.log("Hello js")

// 변수: 값을 저장하는 이름을 가진 공간
// const username = "후츠릿";
let username = "후츠릿";
console.log("username", username)

username = "강민수";

console.log("username", username)

// 데이터 타입
const num = 10; // 숫자
console.log("🚀 ~ num:", num, "num type", typeof num)

const text = "안녕하세요" // 문자열
console.log("🚀 ~ text:", text)

const isDarkMode = true; // boolean
console.log("🚀 ~ isDarkMode:", isDarkMode)
console.log("🚀 ~ isDarkMode type:", typeof isDarkMode)

const empty = null;
console.log("🚀 ~ empty:", empty)

// 변수 선언만
let userage;
console.log("🚀 ~ userage:", userage)

/**
 * 함수: 특정 기능을 수행하도록 만든 코드 조각
 */
// 함수를 정의한다, 선언한다
// function greeting () {
//   // 실행할 로직
//   console.log(`${username}님, 반갑습니다!`)
//   // console.log(username + "님, 반갑습니다!")
// }

// 화살표 함수 변환
// 미션: studentname파라미터 받아와서 내 이름 콘솔에 찍히게 하기
const greeting = (studentname, usermbti) => {
  // usermbti: 파라미터로서 값을 받아주는 변수
  // 실행할 로직
  console.log(`${studentname}님, 반갑습니다!`)
  console.log(`MBTI는 ${usermbti}이시군요!`)
}

// 함수를 실행한다, 호출한다
greeting()
greeting("후츠릿", "ISTJ") // ISTJ: 인자(Argument)로서 실제 넣어줄 값


// 미션: "프론트엔드부터 만드는 AI챗봇 수강생 ???입니다." 문자열이 콘솔에 찍히는 화살표 함수 만들고 실행하기

// 결과값 반환
const add = (num1, num2) => {
  return num1 + num2
}

const doubleSum = (num) => {
  console.log("🚀 ~ doubleSum ~ num:", num)
  return num * 2
}

const sum = add(10, 20)
console.log("🚀 ~ sum:", sum)

console.log("doubleSum", doubleSum(sum))
