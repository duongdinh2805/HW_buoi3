// Bài tập: cho trước 1 email --> lấy username
// let email = "hoangan.web@gmail.com";
// let output = email.slice(0, email.indexOf("@"));
// let output = email.indexOf("@");
// console.log(output);

//Bài tập: Kiểm tra tên có hợp lệ không? (tất cả đều viết hoa)

//Bài tập:
// let str = "Học lập trình không khó trình";
// let keyword = "TRÌNH";
// let index = str.toLowerCase().indexOf(keyword.toLowerCase());
// if (index !== -1) {
//   str =
//     str.slice(0, index) +
//     `<span>${str.slice(index, index + keyword.length)} </span>` +
//     str.slice(index + keyword.length);
// }
// document.body.innerHTML = str;

// let str = "Học lập trình không khó trình";
// let keyword = "TRÌNH";
// let keywordLower = keyword.toLowerCase();
// let result = "";
// let startIndex = 0;

// // Sử dụng vòng lặp `for` để duyệt từng vị trí keyword trong chuỗi
// for (let i = 0; i < str.length; ) {
//   let index = str.toLowerCase().indexOf(keywordLower, i); // Tìm keyword
//   if (index === -1) {
//     result += str.slice(startIndex); // Thêm phần còn lại của chuỗi vào kết quả
//     break;
//   }

//   // Thêm phần trước keyword vào kết quả
//   result += str.slice(startIndex, index);

//   // Thêm keyword bọc trong <span>
//   result += `<span>${str.slice(index, index + keyword.length)}</span>`;

//   // Cập nhật `i` và `startIndex` để tiếp tục xử lý
//   i = index + keyword.length;
//   startIndex = i;
// }

// // Gán kết quả vào nội dung HTML
// document.body.innerHTML = result;
