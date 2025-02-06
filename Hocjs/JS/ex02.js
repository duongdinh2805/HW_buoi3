// let action = "remove";
// switch (action) {
//   case "add":
//   case "insert":
//   case "create":
//     console.log("Thêm");
//     break;
//   case "edit":
//   case "update":
//     console.log("Sửa");
//   case "delete":
//   case "remove":
//     console.log("Xoá");
//     break;
//   default:
//     console.log("Không xác định");
//     break;
// }
let action = "edit";
if (action === "add" || action === "insert" || action === "create") {
  console.log("thêm");
} else if (action === "edit" || action === "update") {
  console.log("Sửa");
} else if (action === "delete" || action === "remove") {
  console.log("xoá");
} else {
  console.log("Không xác định");
}
