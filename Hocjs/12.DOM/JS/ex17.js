const users = [
  {
    id: 1,
    name: "User 1",
    email: "user1@gmail.com",
  },
  {
    id: 2,
    name: "User 2",
    email: "user2@gmail.com",
  },
  {
    id: 3,
    name: "User 3",
    email: "user3@gmail.com",
  },
];

const render = function (users) {
  const tbody = document.querySelector("tbody");
  tbody.innerHTML=`${users
    .map(function (user, index) {
      return `<tr>
    <td>${index}+1</td>
    <td>${user.name}</td>
    <td>${user.email}</td>
    </tr>`;
    })
    .join("")`};
   
};
render(users);
