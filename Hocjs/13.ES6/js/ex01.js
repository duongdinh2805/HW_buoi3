const userLogin = {
  displayName: " Hoàng An unicode",
  emails: [
    {
      email: "hoangan.web@gmail.com",
    },
  ],
};
const {displayName:fullName,{emails[email]:emailAdress}} = userLogin
console.log(fullName);
console.log(emailAdress);

