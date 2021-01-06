const express = require('express');
const MongoUtil = require('../MongoUtil')
const ObjectId = require('mongodb').ObjectId;
const router = express.Router();

let db = MongoUtil.getDB();

// goes to /tile
router.get('/', async (req,res)=>{
    let tile_images = await db.collection('tile_images').find().toArray();
    res.send(tile_images)
})

module.exports = router; 