const { Pool, Client } = require('pg')
const connectionString = 'postgres://qokezostymfzhl:4b68816ad2118d0a9945afe846ff1a6704425ac891976b5a3162d4c8969fe149@ec2-54-83-3-101.compute-1.amazonaws.com:5432/dabdf4hps4beb'

const pool = new Pool({
  connectionString: connectionString,
})

pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  pool.end()
})

const client = new Client({
  connectionString: connectionString,
})
client.connect()

client.query('CREATE TABLE mychatbotdata(id SERIAL PRIMARY KEY,name VARCHAR(40))', (err, res) => {
  console.log(err, res)
  client.end()
})