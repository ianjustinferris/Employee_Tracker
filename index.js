var figlet = require('figlet');
var inquirer = require('inquirer');


console.log(figlet.textSync('Employee Tracker', {
  font: 'ANSI Shadow',
  horizontalLayout: 'default',
  verticalLayout: 'default',
  width: 1000,
  whitespaceBreak: true
}));

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