const mysql = require('mysql2/promise')

const pool = mysql.createPool({
	host:"localhost",
	user:"root",
	password:"jayakumar",
	database:"sethu"
})



module.exports = pool;