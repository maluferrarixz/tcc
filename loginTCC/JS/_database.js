const pg = require('pg')

const client = new pg.Client({
    usar:'malu',
    host:'localhost',
    database:'malululu',
    password:'marialu12a',
    port: 5432,
})

module.exports = client