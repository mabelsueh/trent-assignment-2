const express = require('express');
const MongoUtil = require('../MongoUtil')
const ObjectId = require('mongodb').ObjectId;
const router = express.Router();

let db = MongoUtil.getDB();

router.get('/', async (req,res)=>{
    let scoreboard = await db.collection('scoreboard').find().toArray();
    res.send(scoreboard)
})

module.exports = router;