// Bài tập: Thêm 1 phần tử vào đầu mảng
// const user = ["User 1", "User 2", "User 3", "User 4"];
// const newValue = "Hoàng An";
// const newUser = [newValue];
// for (let i = 0; i < user.length; i++) {
//   newUser[newUser.length] = user[i];
// }
// console.log(newUser);

//Bài tập: Tìm số lớn nhất trong mảng sau
// const number = [5, 2, 9, -1, 100, 8];
// let numberMax = number[0 ];
// for (let i = 0; i < number.length; i++) {
//   if (numberMax < number[i]) {
//     numberMax = number[i];
//   }
// }
// console.log(numberMax);

//Bài tập:
const user = [
  "Tạ Hoàng An",
  "Phạm Văn Như",
  "Nguyễn Văn Tâm",
  "Trần Văn Tùng Lâm",
];
let lastNames = [];
for (let i = 0; i < user.length; i++) {
  let name = user[i];
  let lastNameIndex = name.lastIndexOf(" ");
  let lastName = name.slice(lastNameIndex + 1);
  lastNames.push(lastName);
}

for (let i = 0; i < lastNames.length - 1; i++) {
  for (let j = i + 1; j < lastNames.length; j++) {
    if (lastNames[i] > lastNames[j]) {
      let temp = user[i];
      user[i] = user[j];
      user[j] = temp;
    }
  }
}

console.log(user);
