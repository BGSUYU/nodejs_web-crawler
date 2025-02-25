import mysql2 from 'mysql2';

const db = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: '535462',
    database: 'deepseek'
});