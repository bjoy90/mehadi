const fs = require("fs");

// fs.readFile("./input.txt", (err, data) => {
//   if (err) {
//     console.error(err);
//   }
//   console.log(data.toString());
// });

// fs.readFile("./input.txt","utf-8", (err, data) => {
//   if (err) {
//     console.error(err);
//   }
//   console.log("----UTF Parsed--------")
//   console.log(data);
// });

const newFileName = "ANewFile.txt";
fs.writeFile(newFileName, "Some Text Goes here", err => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Successfully completted");
});
fs.appendFile(newFileName, "\n Hi buddy", err => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Target Completed");
});
