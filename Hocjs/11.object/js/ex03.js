//Bài tập:
// const getError = function (key) {
//   const errors = {
//     name: {
//       required: "vui lòng nhập tên",
//       min: "tên phỉa từ 3 ký tự",
//     },
//     email: {
//       required: "Vui lòng nhập email",
//       email: "Vui lòng nhập đúng định dạng",
//     },
//   };
//   //Viết chương trình lấy ra lỗi đầu tiên của 1 key
//   const error = errors[key];
//   if (!error) {
//     return;
//   }
//   const errorValues = Object.values(error);
//   return errorValues[0];
// };
// console.log(getError("name"));
// ---
// Bài 2:
const menus = [
  {
    id: 1,
    name: "Menu 1",
    parent: 0,
  },
  {
    id: 2,
    name: "Menu 2",
    parent: 0,
  },
  {
    id: 3,
    name: "Menu 3",
    parent: 0,
  },
  {
    id: 4,
    name: "Menu 4",
    parent: 0,
  },
  {
    id: 5,
    name: "Menu 2.1",
    parent: 2,
  },
  {
    id: 6,
    name: "Menu 2.2",
    parent: 2,
  },
  {
    id: 7,
    name: "Menu 2.3",
    parent: 2,
  },
];
const result = [];
for (let i = 0; i < menus.length; i++) {}

//Output: Chuyển thành dạng nested array
/*
  [
    {
      id: 1,
      name: "Menu 1",
      parent: 0,
    },
    {
      id: 2,
      name: "Menu 2",
      parent: 0,
      children: [
          {
              id: 5,
              name: "Menu 2.1",
              parent: 2,
          },
          {
              id: 6,
              name: "Menu 2.2",
              parent: 2,
          },
          {
              id: 7,
              name: "Menu 2.3",
              parent: 2,
          }
      ]
    },
    {
      id: 3,
      name: "Menu 3",
      parent: 0,
    },
    {
      id: 4,
      name: "Menu 4",
      parent: 0,
    }
  ]
  */
