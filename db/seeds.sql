INSERT INTO departments(department_name)
VALUES
('Sales'),
('Engineering'),
('Finance'),
('Legal')
;


INSERT INTO roles(title, salary, department_id)
VALUES
('Sales Manager', 120000, 1),
('Engineering Manager', 120000, 2),
('Finance Manager', 120000, 3),
('Salesperson', 90000, 1),
('Engineer', 100000, 2),
('Accountant', 80000, 3),
('Lawyer', 140000, 4)
;

INSERT INTO employees(first_name, last_name, role_id, manager_id)
VALUES
('Felix', 'Douglas', 1, 1),
('Lela', 'Dunn', 2, 2),
('Irving','Buchanan', 3, 3),
('Angel', 'Davis', 4, 4),
('Cassandra', 'Thornton', 1, null),
('Anita', 'Lucas', 1, null),
('Erica', 'Parsons', 1, null),
('Lydia', 'Castro', 1, null),
('Nathan', 'Wallace', 2, null),
('Garry', 'Garza', 2, null),
('Ethel', 'Hamilton', 2, null),
('Tyrone', 'Campbell', 2, null),
('Aubrey', 'May', 2, null),
('Alexandra', 'Wright', 2, null),
('Johnnie', 'Lambert', 2, null),
('Ashley', 'Rios', 3, null),
('Alonzo', 'Phelps', 3, null),
('Elijah', 'Mcgee', 3, null),
('Todd', 'Hicks', 3, null),
('Eva', 'Little', 3, null),
('Peter', 'Mathis', 4, null),
('Emilio', 'Taylor', 4, null),
('George', 'Morrison', 4, null),
('Marcos', 'Nash', 4, null)
;