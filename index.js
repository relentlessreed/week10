const fs = require("fs");
const inquirer = require("inquirer");
const template = require("./src/template");
inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "What is the Managers Name?",
    },
    {
      type: "input",
      name: "location",
      message: "Where are you located?",
    },
    {
      type: "input",
      name: "bio",
      message: "Enter a short bio:",
    },
    {
      type: "input",
      name: "gitHub",
      message: "gitHub URL?",
    },
    {
      type: "input",
      name: "linkedIn",
      message: "LinkedIn URL?",
    },
  ])
  .then((data) => {
    const filename = `${data.name.toLowerCase().split(" ").join("")}.html`;
    // fs.access(filename, fs.constants.F_OK, (err) => {
    //     console.log("File Exists.")
    // })
    const { name, location, bio, gitHub, linkedIn } = data;
    fs.writeFile(
      filename,
      template.getHtml(name, location, bio, gitHub, linkedIn),
      (err) => (err ? console.log(err) : console.log("Success!"))
    );
  });
