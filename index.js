// Dependencies
const fs = require("fs");
const inquirer = require("inquirer");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");

// Empty array for new team members
const employees = [];

// Initialize Application
function init() {
  htmlHead();
  promptsManager();
}

// Ask for Manager data
function promptsManager() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Please enter the new team Manager's name:",
        name: "name",
      },
      {
        type: "input",
        message: "Please enter the new team Manager's id:",
        name: "id",
      },
      {
        type: "input",
        message: "Please enter the new team Manager's email address:",
        name: "email",
      },
      {
        type: "input",
        message: "Please enter the new team Manager's office number:",
        name: "officeNumber",
      },
    ])
    .then(function ({ name, id, email, officeNumber }) {
      let manager = new Manager(name, id, email, officeNumber);
      employees.push(manager);
      htmlCards(manager);
      newMember();
    });
}

// Add more Team Members?
function newMember() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Do you want to add any other Team Members??",
        choices: [
          "Add an Engineer",
          "Add an Intern",
          "No more Team Members left to enter.",
        ],
        name: "addMember",
      },
    ])
    .then(function ({ addMember }) {
      if (addMember === "Add an Engineer") {
        return promptsEngineer();
      } else if (addMember === "Add an Intern") {
        return promptsIntern();
      } else {
        htmlFooter();
      }
    });
}

// Add for Engineer Data
function promptsEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Please enter the new Engineer's name:",
      },
      {
        type: "input",
        name: "id",
        message: "Please enter the new Engineer's id:",
      },
      {
        type: "input",
        name: "email",
        message: "Please enter the new Engineer's email address:",
      },
      {
        type: "input",
        name: "github",
        message: "Please enter the new Engineer's GitHub username:",
      },
    ])
    .then(function ({ name, id, email, github }) {
      let engineer = new Engineer(name, id, email, github);
      employees.push(engineer);
      htmlCards(engineer);
      newMember();
    });
}

// Ask for Intern Data
function promptsIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Please enter the new Intern's name:",
      },
      {
        type: "input",
        name: "id",
        message: "Please enter the new Intern's id:",
      },
      {
        type: "input",
        name: "email",
        message: "Please enter the new Interns's email address:",
      },
      {
        type: "input",
        name: "school",
        message: "Please enter the new Interns's school :",
      },
    ])
    .then(function ({ name, id, email, school }) {
      let intern = new Intern(name, id, email, school);
      employees.push(intern);
      htmlCards(intern);
      newMember();
    });
}

function htmlHead() {
  const html = `
<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
        integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <title>Team Profiles</title>
</head>  
<body>
    <section class="jumbotron jumbotron-fluid bg-info text-white text-center">
        <div class="container">
            <h3 class="display-3">My Team</h3>
        </div>
    </section>
    <main class="container">
        <div class="row">
    `;
  fs.writeFile("./dist/index.html", html, function (error) {
    if (error) {
      console.log(error);
    }
  });
}

function htmlCards(member) {
  return new Promise(function (resolve, reject) {
    const name = member.name;
    const id = member.id;
    const email = member.email;
    const role = member.role;

    let data = "";
    if (role === "Engineer") {
      const github = member.github;
      data = `<div class="col d-sm-flex justify-content-center">
                <div class="card employee-card mt-4">
                    <div class="card-header">
                        <h2 class="card-title">${name}</h2>
                        <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>Engineer</h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${id}</li>
                            <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                            <li class="list-group-item">GitHub: <a href="https://github.com/${github}" target="_blank">${github}</a></li>
                        </ul>
                    </div>
                </div>
            </div>`;
    } else if (role === "Intern") {
      const school = member.school;
      data = `<div class="col d-sm-flex justify-content-center">
                <div class="card employee-card mt-4">
                    <div class="card-header">
                        <h2 class="card-title">${name}</h2>
                        <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>Intern</h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${id}</li>
                            <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                            <li class="list-group-item">School: ${school}</li>
                        </ul>
                    </div>
                </div>
            </div>`;
    } else {
      const officeNumber = member.officeNumber;
      data = `<div class="col d-sm-flex justify-content-center">
                <div class="card employee-card mt-4">
                    <div class="card-header">
                        <h2 class="card-title">${name}</h2>
                        <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>Manager</h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${id}</li>
                            <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                            <li class="list-group-item">Office Number: ${officeNumber}</li>
                        </ul>
                    </div>
                </div>
            </div>`;
    }
    console.log("Team Member's Profile Added");
    fs.appendFile("./dist/index.html", data, function (error) {
      if (error) {
        return reject(error);
      }
      return resolve();
    });
  });
}

function htmlFooter() {
  const html = `</div>
    </main>  
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
        integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js"
        integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s"
        crossorigin="anonymous"></script>
    <script src="https://kit.fontawesome.com/1ac5a0514e.js" crossorigin="anonymous"></script>
    </body>
</html>`;

  fs.appendFile("./dist/index.html", html, function (error) {
    if (error) {
      console.log(error);
    }
  });
  console.log("Success! Your index.html file has been created.");
}

init();
