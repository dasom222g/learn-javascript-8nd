/**
 * for문
 * - 세가지 구성요소: 초기화, 반복 조건식, 증감식
 */

// let i;

for (let i = 0; i < 5; i++) {
  // 반복 실행될 로직
  console.log(`${i}번째 실행중`)
  // 예상되는 실행 횟수: 5회 ✅
  // 예상되는 마지막 i의 값: 4 ✅
}

// console.log("i", i)

console.log("반복문 끝!")


// const resceneMembers = ["원이", "리브", "미나미", "메이", "제나"];

const resceneMembers = ["woni", "liv", "minami", "may", "zena"];
// console.log("🚀 ~ resceneMembers:", resceneMembers.length)

// forEach
resceneMembers.forEach((member, index) => {
  // 배열의 요소들을 순회하면서 반복 실행할 로직
  console.log(`${index}번째 멤버: ${member.toUpperCase()}`)
})


// 구석기 방식의 반복문❌
// for (let i = 0; i < resceneMembers.length; i++) {
//   console.log(`${i}번째 멤버: ${resceneMembers[i].toUpperCase()}`)
// }

// 자주 사용되는 배열 함수
// map: 기존 배열을 조작하여 새로운 배열을 리턴

const resceneKoreaMembers = ["원이", "리브", "미나미", "메이", "제나"];

const emojiMembers = resceneKoreaMembers.map((member) => `❤️${member}❤️`)

console.log("🚀 ~ emojiMembers:", emojiMembers)

// filter: 배열안의 요소들 중 특정 조건을 만족하는 요소들을 새로운 배열로 리턴
// 조건: 이름이 세글자 이상인 멤버만 리턴
const filterMembers = resceneKoreaMembers.filter((member) => member.length >= 5)
console.log("🚀 ~ filterMembers:", filterMembers)

// find: 배열안의 요소들 중 특정 조건을 만족하는 첫번째 요소를 리턴 / 조건을 만족하는 요소가 없으면 undefined 리턴
const findMember = resceneKoreaMembers.find((member) => member.length >= 2)
console.log("🚀 ~ findMember:", findMember) // 예상 결과값: "원이"

/**
 * every/some: 배열안의 요소들 중 특정 조건을 만족하는 요소가 있는지 여부 리턴
 * - some: 배열의 요소 중 하나라도 조건을 만족하면 true, 그렇지 않으면 false 리턴
 * - every: 배열의 모든 요소가 조건을 만족해야만 true, 그렇지 않으면 false 리턴
 */

// 조건: 이름이 세글자 이상인 멤버만 리턴
const someMember = resceneKoreaMembers.some((member) => member.length >= 3)
console.log("🚀 ~ someMember:", someMember)

const everyMember = resceneKoreaMembers.every((member) => member.length >= 3)
console.log("🚀 ~ everyMember:", everyMember)



// return 축약
// const add = (num1, num2) => {
//   return num1 + num2
// }

// const add = (num1, num2) => num1 + num2