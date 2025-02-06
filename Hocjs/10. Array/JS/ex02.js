//Bài tập: Chuyển họ tên thành tên chuẩn

// let fullName = "tạ       hoàng an";
// const newName = fullName.split(" ");

// let newNameArray = [];
// for (let i = 0; i < newName.length; i++) {
//   if (newName[i] !== "") {
//     newName[i] = newName[i].charAt(0).toUpperCase() + newName[i].slice(1);
//     newNameArray.push(newName[i]);
//   }
// }
// fullName = newNameArray.join(" ");
// console.log(fullName);

//Bài tập: Viết hàm làm phẳng mảng
// const arr = [1, 2, [3, 4, [5, [6]]]];

// const flatArr = function (arr) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     const item = arr[i];
//     if (!Array.isArray(item)) {
//       newArr.push(item);
//     } else {
//       const result = flatArr(item);
//       newArr = newArr.concat(result);
//     }
//   }
//   return newArr;
// };

// console.log(flatArr(arr));

// Bài tập:
// const arr1 = [1, 2, 5, 6, 9];
// const arr2 = [5, 2, 8];
// // Tìm giao giữa 2 mảng
// const newNumber = arr1.filter(function (value1) {
//   return arr2.includes(value1);
// });
// console.log(newNumber);

//Bài tập:
// Cho sẵn 1 array a, hãy thực hiện các thao tác sau:

// Tính tổng các phần tử của a và in ra màn hinh
// const arrayA = [1, 6, 8, 3, 5, 12, 18];
// let total = 0;
// for (i = 0; i < arrayA.length; i++) {
//   total += arrayA[i];
// }
// console.log(total);

// Cho trước 2 số m và n, in ra các phần tử của a nằm trong khoảng [m..n] theo thứ tự từ bé đến lớn.
// const arrayA = [1, 6, 8, 3, 5, 12, 18];
// let m = 3;
// let n = 7;
// let newArr = arrayA.filter(function (value) {
//   //   console.log(value);
//   return value > m && value < n;
// });
// console.log(newArr.sort());

// In ra các số nguyên tố trong a.
// const arrayA = [1, 6, 8, 3, 5, 12, 18];

// let newArr = arrayA.filter(function (value) {
//   for (let i = 2; i < value; i++) {
//     if (value % i !== 0) {
//       return true;
//     }
//     return false;
//   }
// });
// console.log(newArr);

// ----
// Bài 2
// Cho một array nums (chỉ bao gồm các số 0 và 1).

// In ra số lượng số 0 trong a.
// let array = [0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1];
// let newArr = array.filter(function (value) {
//   return value === 0;
// });
// console.log(newArr.length);

// Nâng cao: Đếm số lượng các số 1 liên tiếp dài nhất trong a. 2 số nằm cạnh nhau được xem là liên tiếp nhau.

// Bài 3
// Với một array arr cho trước (chỉ bao gồm các số tự nhiên), thực hiện các yêu cầu sau:
// const arrayA = [1, 6, 8, 4, 3, 5, 16, 18];
// Sử dụng map để bình phương toàn bộ các phần tử trong array.

// newArray = arrayA.map(function (value) {
//   return value * value;
// });
// console.log(newArray);

// Dùng array ban đầu, đếm xem trong arr có bao nhiêu số chính phương (số chính phương là số có dạng x^{2} với x là một số tự nhiên.
// newArray = arrayA.filter(function (value) {
//   for (let i = 1; i * i <= value; i++) {
//     if (i * i === value) return value;
//   }
//   return false;
// });
// console.log(newArray.length);

// Đếm số lượng ước của các số trong arr, sau đó lưu vào một array mới.

// newArray = arrayA.map(function (value) {
//   let count = 0;
//   for (let i = 1; i <= value; i++) {
//     if (value % i === 0) {
//       count++;
//     }
//   }
//   return count;
// });
// console.log(newArray);

//Bài tập: Tính tổng các số chẵn, dùng reduce
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const result = numbers.reduce(function (total, number) {
//   return number % 2 === 0 ? total + number : total;
// }, 0);
// console.log(result);
//Bài tập: tìm các số lẻ trong mảng và lưu vào mảng mới, dùng reduce
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const result = numbers.reduce(function (newArr, number) {
//   if (number % 2 !== 0) {
//     newArr.push(number);
//   }
//   return newArr;
// }, []);
// console.log(result);

//Bài tập: tìm phần tử khác nhau giữa mảng 1, mảng 2
// const arr1 = [1, 2, 5, 6, 9];
// const arr2 = [5, 2, 8];

// const result = arr1.reduce(function (newArr, number1) {
//   if (!arr2.includes(number1)) {
//     newArr.push(number1);
//   }
//   return newArr;
// }, []);
// console.log(result);

//Bài tập: Chia nhỏ mảng sau thành từng đoạn (dùng reduce)
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const size = 2;

const result = numbers.reduce(function (newArr, number) {
  for (i = 0; i < numbers.length; i++) {
    newArr.push(number[i]);
  }
}, []);
console.log(result);
