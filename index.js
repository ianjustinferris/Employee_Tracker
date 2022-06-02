const figlet = require('figlet');
const inquirer = require('inquirer');
const cTable = require('console.table');
const mysql = require('mysql2');
const Queries = require('library/queries.js');

// Create the connection to database
const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'rootroot',
  database: 'employee_db'
});

// Render app title
console.log(figlet.textSync('Employee Tracker', {
  font: 'ANSI Shadow',
  horizontalLayout: 'default',
  verticalLayout: 'default',
  width: 1000,
  whitespaceBreak: true
}));


// con.connect(function (err) {
//   if (err) throw err;
//   con.query("SELECT * FROM department", function (err, result, fields) {
//     if (err) throw err;
//     console.table(result);
//   });
// });

getAllDepartments()

// Initial menu prompt
inquirer
  .prompt([
    {
      type: 'list',
      name: 'View All Departments',
      message: 'What would you like to do?',
      choices: [
        'View All Employees',
        'Add Employee',
        'Update Employee Role',
        'View All Roles',
        'Add Role',
        'View All Departments',
        'Add Department',
        'Update Employee Managers',
        'View Employees By Manager',
        'View Employees By Department',
        'Delete Department',
        'Delete Roles',
        'Delete Employee',
        'View Combined Salaries By Department'
      ],
    },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });