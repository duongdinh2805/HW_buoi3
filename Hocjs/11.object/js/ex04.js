// const users = [
//   {
//     id: 1,
//     name: "User1",
//     email: "user1@gmail.com",
//   },
//   {
//     id: 2,
//     name: "User2",
//     email: "user2@gmail.com",
//   },
//   {
//     id: 3,
//     name: "User3",
//     email: "user3@gmail.com",
//   },
// ];
// // let newStr = "";
// // for (let i = 0; i < users.length; i++) {
// //   newStr += `<tr><td>${users[i].id}</td><td>${users[i].name}</td><td>${users[i].email}</td><td><a href="#">Sửa</a></td>
// //           <td><a href="#">Xóa</a></td></tr>`;
// // }
// // console.log(newStr);

// let newStr = "";
// const newArray = users.map(function (value) {
//   return `<tr><td>${value.id}</td><td>${value.name}</td><td>${value.email}</td><td><a href="#">Sửa</a></td>
//          <td><a href="#">Xóa</a></td></tr>`;
// });

// document.querySelector("tbody").innerHTML = newArray.join("");

//Bài tập
// Tìm số lần lặp của từng từ
// const content = `Lorem ipsum dolor sit amet consectetur adipisicing elit Distinctio
//       doloribus ab dolorem magnam voluptate impedit! Repellendus praesentium
//       tenetur reprehenderit minus eveniet laudantium sunt velit repudiandae ex
//       ipsa delectus aspernatur impedit odio reiciendis non consectetur omnis
//       fugiat nostrum fugit tempore dignissimos dolorum hic enim provident
//       Minus asperiores Pariatur praesentium possimus veniam tempore
//       accusantium perspiciatis soluta quisquam ut nobis ullam quaerat assumenda
//       repudiandae modi consectetur itaque cumque autem neque nisi beatae dolorum
//       unde esse eos adipisci recusandae Numquam laudantium harum accusantium
//       et error exercitationem illum itaque natus consequatur LOrem soluta tempore
//       Necessitatibus iure soluta temporibus aliquam qui ad dolorem Aliquid
//       voluptatum nam odit`;
// let arrayContent = content.split(" ");
// const count = {};
// arrayContent.forEach(function (word) {
//   if (!count[word.toLowerCase()]) {
//     count[word.toLowerCase()] = 1;
//   } else {
//     count[word.toLowerCase()]++;
//   }
// });
// console.log(count);

//Bài 2:
const address = [
  {
    area: "A",
    name: "Item1",
    email: "item1@gmail.com",
  },
  {
    area: "B",
    name: "Item2",
    email: "item2@gmail.com",
  },
  {
    area: "A",
    name: "Item3",
    email: "item3@gmail.com",
  },
];
let newArea = {};
for (let i = 0; i < address.length; i++) {
  if (!newArea[address[i].area]) {
    newArea[address[i].area] = [];
  }
  newArea[address[i].area].push(address[i]);
}
console.log(newArea);
