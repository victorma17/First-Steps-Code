const { Client } = require('pg')
const ObjectsToCsv = require('objects-to-csv');
const client = new Client({ host: 'localhost', port: 5433, database: 'postgres', user: 'lector', password: 'lector' })
const query = async () => {
    await client.connect()
    const res = await client.query('SELECT * from orders', [])
    // transformos las fechas a string procesando res.rows 
    const data = res.rows.map(row => ({
        ...row, "order_date": row.order_date.toISOString(),
        required_date: row.required_date ? row.required_date.toISOString() : "", shipped_date: row.shipped_date ? row.shipped_date.toISOString() : ""
    }))
    const csv = new ObjectsToCsv(data); await csv.toDisk('./orders.csv');
    await client.end()
}