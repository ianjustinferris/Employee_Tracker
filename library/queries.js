// Functions to access employees_db

function viewAllEmployees() {
    con.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");
    });
    console.log('jeronimo!!!!')
    con.query('SELECT*FROM departments', function (err, result) {
        console.table(result)
    });
}
// addEmployee()


// updateEmployeeRole()


// viewAllRoles()

// addRole()


// viewAllDepartments()


// addDepartment()


// updateEmployeeManagers()

// viewEmployeesByManager()


// viewEmployeesByDepartment()


// deleteDepartment()

// deleteRoles()

// deleteEmployee()

// salaries()






module.exports.viewAllEmployees = viewAllEmployees;