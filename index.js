// EXPRESS AND OTHER SETUP
const express = require('express');
const { setupExpressApp } = require('./setUpExpress');
// const { setupHBS } = require('./setupHBS');
const MongoUtil = require('./MongoUtil.js');
const cors = require('cors');


// allows us to inject into the environment (the OS) our environmental variabkes
require('dotenv').config();

// create the app
const app = express();
setupExpressApp(app);
// setupHBS();

async function main() {
    const MONGO_URL = process.env.MONGO_URL;
    await MongoUtil.connect(MONGO_URL, "tile_game");

    const usersRoutes = require('./routes/usersRoutes');
    app.use('/users', usersRoutes);

    // const tileRoutes = require('./routes/tileRoutes');
    // app.use('/tile', tileRoutes);

    // const scoreboardRoutes = require('./routes/scoreboardRoutes');
    // app.use('/scoreboard', scoreboardRoutes);

    app.use(cors());

}

main();

// LISTEN
app.listen(3000, () => {
    console.log("Express is running")
})

