const mysql = require('mysql2');

const pool=mysql.createPool({
    host: 'localhost',
    user:'root',
    password:'manager',
    password:'Aditya@2612',
    database:'mern_db'
})

module.exports= pool ;

