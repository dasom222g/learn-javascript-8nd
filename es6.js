// 논리연산자 - Logical operators

/**
 * 관리자 페이지 접근 조건
 * 1. 로그인된 상태일 것
 * 2. role이 admin일 것
 */

const user = {
  isLoggedin: true, // 로그인 여부
  role: "user" // ["user", "guest", "admin"]
}

// 관리자 페이지 접근 체크
if (user.isLoggedin && user.role === "admin") {
  // 관리자 페이지 접근 가능한 상태
  console.log("✅관리자 페이지에 접근 가능")

} else {
  // 관리자 페이지 접근 불가능한 상태 
  console.log("❌관리자 페이지에 접근 불가능")
}

// 회원만 접근 가능한 페이지 체크
/**
 * 조건1: 로그인 된 상태인 경우
 * OR
 * 조건2: role이 admin인 경우
 */

if (user.isLoggedin || user.role === "admin") {
  // 페이지 접근 가능
  console.log("✅회원 페이지에 접근 가능")
} else {
  // 페이지 접근 불가능
  console.log("❌회원 페이지에 접근 불가능")
}

if (!user.isLoggedin) {
  // 로그인 되지 않은 상태인 경우
} 

// 응용
const userage = 33;
const isLoggedin = false;

// let message;

// if (userage >= 18) {
//   message = "성인입니다."
// } else {
//   message = "미성년자입니다."
// }

const message = userage >= 18 ? "성인입니다" : "미성년자 입니다."
console.log("🚀 ~ message:", message)

const message2 = isLoggedin && "환영합니다"
console.log("🚀 ~ message2:", message2)

// Spread Syntax
const resceneMembers = ["원이", "리브", "미나미", "메이", "제나"];
console.log("🚀 ~ resceneMembers:", resceneMembers)

const copyMembers = ["박보영", ...resceneMembers]
console.log("🚀 ~ copyMembers:", copyMembers)

const copyUser = {
  ...user, 
  age: 33, // 추가
  isLoggedin: false // 수정
}
console.log("🚀 ~ user:", user) // 원본
console.log("🚀 ~ copyUser:", copyUser)


