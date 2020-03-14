const router = require('express').Router();

// Postgres Client Setup
const { Pool } = require('pg');

const pgClient = new Pool({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT
});
pgClient.on('error', () => console.log('Lost PG connection !'));

pgClient.connect()
    .then(() => {
        pgClient.query('CREATE TABLE IF NOT EXISTS values (number INT)').then(() => { });
    }).catch((err) => {
        console.error(err);
    });

router.route('/').get(async (req, res) => {
    res.status(200).send({message: "It works"});
})


router.route('/values').get(async (req, res) => {
    const values = await pgClient.query('SELECT * from values');
    res.send(values.rows);
}).post(async (req, res) => {
    const index = req.body.index;
    pgClient.query('INSERT INTO values(number) VALUES($1)', [index]);
    res.send({ working: true });
});


module.exports = router;