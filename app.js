const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
const createEmployee = () => {
  inquirer.prompt([
  {
    type: 'input',
    name: 'name',
    message: 'What is your employee name?',
  },
  {
    type: 'input',
    name: 'id',
    message: 'What is your employee id?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your employee email?',
  },
  {
    type: 'list',
    name: 'role',
    message: 'What role is your employee?',
    choices: ['Manager', 'Engineer', 'Intern'],
  }
])
  .then(answers => {
    if (answers.role === 'Manager') {
      inquirer.prompt([
        {
          type: 'input',
          name: 'officeNumber',
          message: 'What is the manager office number?',
        }
      ])
      .then(manager1 => {
        const personManager = new Manager(answers.name, answers.id, answers.email, manager1.officeNumber)
        console.log(personManager)
      })
      } else if (answers.role === 'Engineer') {
      inquirer.prompt([
        {
        type: 'input',
        name: 'github',
        message: 'What is the engineer github page?',
        }
      ])
      .then(engineer1 => {
        const personEngineer = new Engineer(answers.name, answers.id, answers.email, engineer1.github)
        console.log(personEngineer)
        })
    } else if (answers.role === 'Intern') {
      inquirer.prompt([
        {
          type: 'input',
          name: 'school',
          message: 'What is the interns school?',
        }
      ])
      .then(intern1 => {
          const personIntern = new Intern(answers.name, answers.id, answers.email, intern1.school)
          console.log(personIntern)
      })
    }
  })
  .catch(err => console.log(err))
}

createEmployee ()
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
