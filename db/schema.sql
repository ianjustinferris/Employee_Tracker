/* Create Database for Employees*/
DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

/* Set the database*/
USE employees_db;

/*Create department table*/
CREATE TABLE departments (
id INT NOT NULL AUTO_INCREMENT,
department_name VARCHAR(30) NOT NULL,
PRIMARY KEY (id)
);

/*Create roles table passing in (id) from departments as FOREIGN KEY*/
CREATE TABLE roles (
id INT NOT NULL AUTO_INCREMENT,
title VARCHAR(30) NOT NULL,
salary DECIMAL NOT NULL,
department_id INT,
FOREIGN KEY (department_id) 
REFERENCES departments(id),
PRIMARY KEY (id)
);

/*Create employees table passing in (id) from roles as FOREIGN KEY*/
CREATE TABLE employees (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
role_id INT,
FOREIGN KEY (role_id)
REFERENCES roles(id),
manager_id INT, 
FOREIGN KEY (manager_id) 
REFERENCES employees(id)
-- CONSTRAINT isManager CHECK (roles.title = manager) 
);

