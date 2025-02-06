// Bài 1: Tính tiền điện
// let cost;
// let usage = Number(prompt("Vui lòng nhập số điện"));
// let total = function (usage) {
//   total = usage * cost;

//   if (usage < 0 || isNaN(usage)) {
//     console.log("SỐ điện nhập không hợp lệ");
//     return;
//   }
//   if (usage > 0 && usage <= 50) {
//     cost = 1678;
//   } else if (51 <= usage && usage <= 100) {
//     cost = 1734;
//   } else if (101 <= usage && usage <= 200) {
//     cost = 2014;
//   } else if (201 <= usage && usage <= 300) {
//     cost = 2536;
//   } else if (301 <= usage && usage <= 400) {
//     cost = 2834;
//   } else if (401 <= usage) {
//     cost = 2927;
//   }
//   return usage * cost;
// };
// let result = total(usage);
// if (result !== undefined) {
//   console.log("Số tiền điện phải nộp là " + result);
// }

// Bài 2: Tính tiền taxi
let km = Number(prompt("Vui lòng nhập số km quãng đường đi"));
let total = function (km) {
  if (km <= 0 || isNaN(km)) {
    console.log("Số km nhập không hợp lệ");
    return undefined;
  }

  let cost = 0;

  if (km <= 1) {
    cost = 15000 * km;
  } else if (km <= 5) {
    cost = 15000 + (km - 1) * 13500;
  } else if (km <= 120) {
    cost = 15000 + 4 * 13500 + (km - 5) * 11000;
  } else if (km > 120) {
    cost = (15000 + 4 * 13500 + (km - 5) * 11000) * 0.9;
  }

  return cost;
};

let result = total(km);

if (result !== undefined) {
  console.log(`Số tiền đi taxi là ${result} đồng`);
}
