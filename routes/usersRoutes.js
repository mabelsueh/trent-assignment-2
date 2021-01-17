const express = require('express');
const MongoUtil = require('../MongoUtil')
const ObjectId = require('mongodb').ObjectId;
const router = express.Router();

let db = MongoUtil.getDB();

// goes to /users
router.get('/', async (req,res)=>{
    let users = await db.collection('users').find().toArray();
    res.send(users)
})

// for login check??
router.get('/:username', async(req,res)=>{
    let user = await db.collection('users').findOne({
        'username':req.params.username
    })
    res.send(user)
})


module.exports = router; 