// Array.prototype.forEach2 = function () {
//   for (i = 0; i < Array.prototype.length; i++) {
//     console.log(Array.prototype[i], [i]);
//   }
// };

// const users = ["user 1", "user 2", "user 3", "user 4", "user 5"];
// users.forEach2(function (user, index) {
//   console.log(user, index);
// });

// const myUser = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
//   age: 32,
// };
// const job = {
//   position: "teacher",
//   salary: 1000,
// };

// const newObject = {};
// for (let key in myUser) {
//   newObject[key] = myUser[key];
// }
// for (let key in job) {
//   newObject[key] = job[key];
// }

// console.log(newObject);

// const query = {
//   status: "active",
//   keyword: "Học lập trình",
//   page: 1,
// };
// const newQuery = Object.entries(query).map(function (item) {
//   return item.join("=");
// });
// console.log(newQuery.join("&").replaceAll(" ", "+"));
// const string = `status=active&keyword=Học+lập+trình&page=1`
// const query = string.split("&").map
