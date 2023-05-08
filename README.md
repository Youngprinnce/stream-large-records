## Lightweight application to stream large records
A simple application that allows you to stream large records from mysql and return the result in chunks as a 
 restful API.

## Features
- Stream large records
- A table of ```180,048``` records can stream in averagely 1.8s

### Dev Tools
- Nodejs/NestJs
- MySQL
- Postman

### How to setup project on your local machine
#### Pre-requisite
- [Node.js](https://nodejs.org/en/)
- [Xampp](https://www.apachefriends.org/download.html) or [MySQL V8+](https://dev.mysql.com/downloads/mysql/)

#### Installing 
- Clone the repository. Run ```https://github.com/Youngprinnce/stream-large-records.git``` in your terminal
- CD into the project folder
- Launch the Xampp application
- Click on the start button for Apache and MySQL
- Click [here](http://localhost/phpmyadmin/index.php) to create database with name ```mfsafrica``` 

#### Open your terminal
- Run `npm install` 

#### Run the app
- Run `npm start`