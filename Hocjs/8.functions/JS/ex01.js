// let n = 5;
// const showTriangleNumber = function (line) {
//   let output = "";
//   let count = 0;
//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= i; j++) {
//       count++;
//       output += `${count} `;
//     }
//     output += "</br>";
//   }
//   console.log(output);
//   document.body.innerHTML = output;
// };

// showTriangleNumber(5);

const showChessBoard = function (number) {
  let output = `<table width="100%" border="1" cellpadding="0" cellspacing="0">`;
  for (let tr = 1; tr <= number; tr++) {
    output += "<tr>";
    for (let td = 1; td <= number; td++) {
      console.log(tr + td);

      if ((tr + td) % 2 !== 0) {
        output += `<td class="black"></td>`;
      } else {
        output += `<td></td>`;
      }
    }
    output += "</tr>";
  }
  output += "</table>";

  document.body.innerHTML = output;
};
showChessBoard(8);
