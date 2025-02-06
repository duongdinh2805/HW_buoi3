// Bài tập kiểm tra độ mạnh/ yếu mật khẩu:

// const password = "AAhi345#$";
// let output;
// if (password.length < 6) {
//   console.log("Vui lòng nhập tối thiểu 6 ký tự");
// } else {
//   let isUpper = false;
//   let isLower = false;
//   let isNumber = false;
//   let isSpecial = false;
//   let count = 0;
//   for (let i = 0; i < password.length; i++) {
//     output = password.charAt(i);
//     if (output >= "a" && output <= "z") {
//       count++;
//     } else if (output >= "A" && output <= "Z") {
//       count++;
//     } else if (output >= "0" && output <= "9") {
//       isNumber = true;
//     } else if (
//       output === "!" ||
//       output === "@" ||
//       output === "#" ||
//       output === "$" ||
//       output === "%" ||
//       output === "^" ||
//       output === "&" ||
//       output === "*" ||
//       output === "(" ||
//       output === ")"
//     ) {
//       isSpecial = true;
//     }
//   }

//   if (count >= 2) {
//     isLower = true;
//     isUpper = true;
//   }
//   console.log(isUpper);
//   console.log(isLower);
//   console.log(isNumber);
//   console.log(isSpecial);
// }

let fullname = "đinh hải dương";
// chuyển thành dạng tên chuẩn, chữ đầu viết hoa
fullname = fullname.charAt(0).toUpperCase() + fullname.slice(1);

for (let i = 1; i < fullname.length; i++) {
  const char = fullname.charAt(i);
  const charNext = fullname.charAt(i + 1);
  if (char === " " && charNext !== " ") {
    const index = i + 1;
    fullname =
      fullname.slice(0, index) +
      fullname.charAt(index).toUpperCase() +
      fullname.slice(index + 1);
  }
}
console.log(fullname);
