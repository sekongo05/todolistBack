const mysql = require('mysql2')
require('dotenv').config()

const db= mysql.createConnection({
    port: process.env.MYSQLPORT,
    host: process.env.MYSQLHOST ,
    user: process.env.MYSQLUSER ,
    database: process.env.MYSQLDATABASE,
    password: process.env.MYSQLPASSWORD,
})  

db.connect((error)=>{
    if(error){
        console.log('erreur de connexion à la base de donnée', error)
        console.log('Variables chargées :', process.env.MYSQLHOST, process.env.MYSQLDATABASE , process.env.MYSQLUSER);

        return;
    }
    console.log('Connexion a railway')
})


module.exports= db;