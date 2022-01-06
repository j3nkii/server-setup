const pg = require('pg');
const express = require('express');
const tacoRouter = express.Router();
const pool = new pg.Pool({
    database: 'data_base',
    //optional
    host: 'localhost',
    port: 5432,
});
//GET
router.get('/', (req, res) => {
    const queryText = '';
    pool.query(queryText)
        .then((tacos) => {
            //call when done
            //console.log(tacos.rows)
            res.send(tacos.rows)
        })
        .catch((err) =>{
            console.log('GET /tacos failed, ', err)
            res.sendStatus(500)
        })
});
//POST
router.post('/', (req, res) => {
    const queryText = `` //SQL code here, use $1, $2 in conjunction with the query params
    let queryParams = [
        req.body.$1
    ];
    pool.query(queryText, queryParams)
        .then((bdRes) => {
            res.sendStatus(201) //created
        })
        .catch((err) => {
            console.log('failed:', err);
        });
});
//DELETE
router.delete('/:id', (req, res) => {
    console.log(req.params)
    const queryText = ``; //SQL code here, use $1, $2 in conjunction with the query params
    let queryParams = [req.params.id];
    pool.query(queryText, queryParams).then((dbRes) => {
        res.sendStatus(204);
    }).catch((err) => {
        console.log('DELETE failed:', err);
    })
})
//PUT
router.put('/:taco', (req, res) => {
    taco = req.body
    const queryText = ``
    let queryParams = [req.params.taco];
    pool.query(queryText, queryParams).then((dbRes) => {
        res.sendStatus(201)
    }).catch((err) => {
        console.log(err);
    })
})

module.exports = tacoRouter;