const users = [
  {
    id: 1,
    name: "User 1",
  },
  {
    id: 2,
    name: "User 1",
  },
  {
    id: 3,
    name: "User 1",
  },
  {
    id: 4,
    name: "User 1",
  },
];
// const getUser = () =>
const getUser = (userId) => users.find((user) => user.id === userId);

console.log(getUser(1));
