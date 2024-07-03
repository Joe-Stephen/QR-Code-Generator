import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
inquirer
  .prompt([{ message: "Type in your URL: ", name: "URL" }])
  .then((answers) => {
    console.log(answers);
    const URL = answers.URL;
    var qr_svg = qr.image(URL);
    qr_svg.pipe(fs.createWriteStream("qr.png"));
    fs.writeFile("answers.txt", URL, (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.error("isTtyError: ", error);
    } else {
      console.error("error: ", error);
    }
  });
