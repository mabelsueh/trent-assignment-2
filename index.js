// EXPRESS AND OTHER SETUP
const express = require('express');
const MongoUtil = require('./MongoUtil.js')
const ObjectId = require('mongodb').ObjectId;
require('dotenv').config();

// load in environment variables
require('dotenv').config();

// create the app
const app = express();
// we want our static files (images, css etc.) to be in a folder named public
app.use(express.static('public'))
// allows express to data submitted via forms
app.use(express.urlencoded({extended:false}))



async function main() {
    const MONGO_URL=process.env.MONGO_URL;
    await MongoUtil.connect(MONGO_URL, "tile_game");
    let db = MongoUtil.getDB();

    app.get('/', async (req,res)=>{
        let user = await db.collection('users').find().toArray();
        res.render('user',{
            'user':user
        })
    })
}

main();

// LISTEN
app.listen(3000, ()=>{
    console.log("Express is running")
    
})