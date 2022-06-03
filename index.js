const figlet = require('figlet');
const inquirer = require('inquirer');
const cTable = require('console.table');
const mysql = require('mysql2');
const query = require('./library/queries');

// Create the connection to database
const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'rootroot',
  database: 'employee_db'
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  renderAppTitle()
  mainMenu()
});

// Render app title
function renderAppTitle() {
  console.log(figlet.textSync('Employee Tracker', {
    font: 'ANSI Shadow',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 1000,
    whitespaceBreak: true
  }));
}


// Initial menu prompt
function mainMenu() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'selection',
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
          'View Combined Salaries By Department',
          'Exit'

        ],
      },
    ])

    // Pass selection from Main Menu to appropriate function
    .then((list) => {
      if (list.selection == 'View All Employees') {
        query.viewAllEmployees();
      } else if (list.selection == 'Add Employee') {
        query.addEmployee();
      } else if (list.selection == 'Update Employee Role') {
        query.updateEmployeeRole();
      } else if (list.selection == 'View All Roles') {
        query.viewAllRoles();
      } else if (list.selection == 'Add Role') {
        query.addRole();
      } else if (list.selection == 'View All Departments') {
        query.viewAllDepartments();
      } else if (list.selection == 'Add Department') {
        query.addDepartment();
      } else if (list.selection == 'Update Employee Managers') {
        query.updateEmployeeManagers();
      } else if (list.selection == 'View Employees By Manager') {
        query.viewEmployeesByManager();
      } else if (list.selection == 'View Employees By Department') {
        query.viewEmployeesByDepartment();
      } else if (list.selection == 'Delete Department') {
        query.deleteDepartment();
      } else if (list.selection == 'Delete Roles') {
        query.deleteRoles();
      } else if (list.selection == 'Delete Employee') {
        query.deleteEmployee();
      } else if (list.selection == 'View Combined Salaries By Department') {
        query.salaries();
      } else return;
    })

    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    })
};