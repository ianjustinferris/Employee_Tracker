/* Create Database for Employees*/
DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

/* Set the database to employees*/
USE employee_db;

/*Create department table*/
CREATE TABLE department (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
department_name VARCHAR(30) NOT NULL
);

/*Create role table*/
CREATE TABLE role (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
title VARCHAR(30) NOT NULL,
salary DECIMAL NOT NULL,
department_id INT NOT NULL
);

/*Create employee table*/
CREATE TABLE employee (
id INT  NOT NULL AUTO_INCREMENT PRIMARY KEY,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
role_id INT NOT NULL,
manager_id INT NULL
);

module.exports = {employee_db, department, role, employee}