// Create class of functions 'Queries' to be called from index.js through mySQL server
class Queries {
    constructor(err, result, fields) {
        this.err = err;
        this.result = result;
        this.fields = fields;
    }
}

getAllDepartments = new Queries((err, result, fields) => {
    con.connect(function (err) {
        if (err) throw err;
        con.query("SELECT * FROM department", function (err, result, fields) {
            if (err) throw err;
            console.table(result);
        });
    });
});

module.exports(Queries)