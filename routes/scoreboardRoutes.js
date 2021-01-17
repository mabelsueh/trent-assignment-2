const express = require('express');
const MongoUtil = require('../MongoUtil')
const ObjectId = require('mongodb').ObjectId;
const router = express.Router();

let db = MongoUtil.getDB();

// goes to /scoreboard
router.get('/', async (req, res) => {
    let scoreboard = await db.collection('scoreboard').find().toArray();
    res.send(scoreboard)
})

router.get('/:', async (req, res) => {
    let scoreboard = await db.collection('scoreboard').findOne({
        'username': req.params.username
    })
    res.send(scoreboard)
})

router.post('/', async (req, res) => {
    let { username, score } = req.body;
    let results = await db.collection('scoreboard').insertOne({
        username, score
    })
    res.send({ 'inserterdid': results.insertedId })
})

router.patch('/:username', async (req, res) => {
    let username = req.params.username
    let { score } = req.body
    await db.collection('scoreboard').updateOne({
        'username': username
    },
        {
            $set: {
                score
            }
        })
    res.send({
        'status': 'OK'
    })
})

router.delete('/:id', async (req, res) => {
        await db.collection('scoreboard').deleteOne({
            _id: ObjectId(req.params.id)
        })
        res.send({
            'status': 'ok'
        })
    })
module.exports = router;