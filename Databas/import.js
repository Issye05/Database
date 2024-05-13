import mysql from 'mysql2/promise';

const db = await mysql.createConnection({
    host: 'localhost',
    user: 'admin',
    password: DB_PASSWORD,
    database: 'DB_NAME'
});

 

