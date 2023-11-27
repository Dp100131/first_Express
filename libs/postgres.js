const { Pool } = require("pg");

 
const pool = new Pool({
  host: 'bubble.db.elephantsql.com',
  port: 5432,
  user: 'kxyohfga',
  password:'MDhnOa_p6EQF7J4D3UPgFlb9N-Vwh6HK',
  database:'kxyohfga' 
}); 

module.exports = pool;
