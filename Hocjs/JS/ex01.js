let salary = 4000000;

if (salary > 0 && salary <= 5000000) {
  console.log("Lương thực nhận " + salary);
}
if (salary > 5000000 && salary <= 10000000) {
  salary = 0.97 * salary;
  console.log("Lương thực nhận " + salary);
}
if (salary > 10000000 && salary <= 15000000) {
  salary = 0.95 * salary;
  console.log("Lương thực nhận " + salary);
}
if (salary > 15000000 && salary <= 20000000) {
  salary = 0.93 * salary;
  console.log("Lương thực nhận " + salary);
}
if (salary < 0) {
  console.log("Vui lòng kiểm tra lại");
}
