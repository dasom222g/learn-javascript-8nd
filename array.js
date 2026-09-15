// 배열: 순서를 가진 데이터들의 집합

const daysOfWeek = ["월요일", "화요일", "수요일", "목요일", "금요일", "토요일", "일요일"]
console.log("🚀 ~ daysOfWeek:", daysOfWeek)

const today = daysOfWeek[1]
console.log("🚀 ~ today:", today)

// 미션: 내가 제일 좋아하는 요일 뽑아와서 콘솔에 찍기
// const favoriteDay = 

// 객체: key-value로 이루어진 속성들의 묶음
const student = {
  name: "이윤정",
  mbti: "ENTJ",
  isMale: false,
  useAi: ["Chat GPT", "Gemini"]
}

const studentName = student["name"]
console.log("🚀 ~ studentName:", studentName)

// 미션: ["Chat GPT", "Gemini"] 값 뽑아와서 콘솔에 찍기
const studentAi = student.useAi // ⭐
console.log("🚀 ~ studentAi:", studentAi, Array.isArray("studentAi"))
