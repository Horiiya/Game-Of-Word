import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'game_of_word',
  waitForConnections: true
})

export default pool;