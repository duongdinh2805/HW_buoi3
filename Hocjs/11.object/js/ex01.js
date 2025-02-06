//Bài tập:
// const myUser = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
//   age: 32,
// };
// const job = {
//   position: "Teacher",
//   salary: 1000,
// };
// let newObject = {};
// for (let key in myUser) {
//   //   console.log(myUser[key]);
//   newObject[key] = myUser[key];
// }
// for (let key in job) {
//   newObject[key] = job[key];
// }
// console.log(newObject);

// Chuyển object thành dạng query string
// const query = {
//   status: "active",
//   keyword: "Học lập trình",
//   page: 1,
// };
// let output = "";
// for (let key in query) {
//   output += [key] + "=" + query[key] + "&";
// }
// console.log(output.replaceAll(" ", "+").slice(0, output.length - 1));

// Bài tập: chuyển query thành Object:
// status=active&keyword=Học+lập+trình&page=1
const query = "status=active&keyword=Học+lập+trình&page=1";
newString = query.split("&").map(function (item) {
  const itemArr = item.split("=");
  if (typeof itemArr[1] === "string") {
    itemArr[1] = itemArr[1].replaceAll("+", " ");
  }
  const itemNumber = +itemArr[1];
  if (!isNaN(itemNumber)) {
    itemArr[1] = itemNumber;
  }
  return itemArr;
});
query = Object.fromEntries(query);
console.log(query);
