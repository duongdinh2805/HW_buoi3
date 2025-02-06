const userLogin = {
  displayName: "Dương Đinh",
  emails: [
    {
      email: "vuvu2805@gmail.com",
    },
  ],
};
const {
  displayName: fullName,
  emails: [{ email: emailAdress }],
} = userLogin;
console.log(fullName);
console.log(emailAdress);
