const express = require('express')
const cryptojs = require('crypto-js')

const pool = require('../db/pool')
const result = require('../utils/result')


const router = express.Router()

router.post('/login', (req, res) => {
    const { name, email, password, mobile } = req.body
    const sql = `SELECT * FROM user WHERE email=? AND password=?`
    const hashedPassword = cryptojs.SHA256(password).toString()
    pool.query(sql, [name, email, hashedPassword, mobile], (error, data) => {
        res.send(result.createResult(error, data))
    })
})




router.get('/', (req, res) => {
    const email = req.headers.email
    const sql = `SELECT * FROM users WHERE email = ?`
    pool.query(sql, [email], (error, data) => {
        res.send(result.createResult(error, data))
    })
})

router.delete('/', (req, res) => {
    const uid = req.headers.uid
    const sql = `DELETE FROM users WHERE uid = ?`
    pool.query(sql, [uid], (error, data) => {
        res.send(result.createResult(error, data))
    })
})


module.exports = router
