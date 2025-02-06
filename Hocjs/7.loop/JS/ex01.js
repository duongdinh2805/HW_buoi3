// let n = 5;
// let result = 1;
// for (let i = 1; i <= n; i++) {
//   result = result * i;
// }
// console.log(result);

// let n = 5;
// let temp = 1;
// let total = 0;
// for (let i = 1; i <= n; i++) {
//   temp = temp * i;
//   total = total + temp;
// }
// console.log(total);

// Bài 4: Kiểm tra n có phải là số nguyên tố không?
// let n = -5;
// let mod = 1;
// if (n > 1) {
//   for (let i = 2; i <= n - 1; i++) {
//     if (n % i === 0) {
//       mod = 0;
//       break;
//     }
//   }
// } else {
//   mod = 0;
// }
// if (mod === 0) {
//   console.log("n không là số nguyên tố");
// } else {
//   console.log(" n là số nguyên tố");
// }

// Bài 5: Kiểm tra số lớn nhất
// let a = 10;
// let b = 5;
// let c = 17;
// let d = 7;
// let max;
// if (a > b) {
//   max = a;
// } else {
//   max = b;
//   console.log("Số lớn nhất là" + b);
// }
// if (b > c) {
//   console.log("Số lớn nhất là" + b);
// } else {
//   console.log("Số lớn nhất là" + c);
// }
// if (c > d) {
//   console.log("Số lớn nhất là" + c);
// } else {
//   console.log("Số lớn nhất là" + d);
// }

// let tong = 14;
// let hieu = 4;
// console.log("Số thứ nhất là:" + (tong + hieu) / 2);

// let weight = 70;
// let height = 1.7;

// let bmi = weight / (height ^ 2);
// if (bmi > 15) {
//   console.log("Chỉ số BMI là" + bmi);
//   console.log("Thân hình quá gầy,");
// }

// let year = 1900;

// if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//   console.log("Năm nhuận");
// } else {
//   console.log(" Năm không nhuận");
// }

// let month = Number(prompt("vui lòng nhập tháng"));

// let day;
// if (
//   month >= 1 &&
//   month <= 12 &&
//   ((month < 8 && month % 2 === 1) ||
//     (month >= 8 && month <= 12 && month % 2 === 0))
// ) {
//   console.log("Số ngày trong tháng là 31");
// } else if (month === 2) {
//   year = Number(prompt("vui lòng nhập năm"));
//   if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//     console.log("Số ngày trong tháng là 29");
//   } else {
//     console.log("Số ngày trong tháng là 28");
//   }
// } else {
//   console.log("Số ngày trong tháng là 30");
// }
