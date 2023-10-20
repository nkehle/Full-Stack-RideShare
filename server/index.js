
const express = require ("express") // Instance of the framwork "express"
const app = express();              // Instance of express
const cors = require("cors");       // use for whitelisting

app.use(express.json());            // for converting into parsed json
app.use(cors());                    // automatically whitelist api requests from local device 

const db = require('./models');

// posts router
const postRouter = require('./routes/Posts');
app.use("/posts", postRouter);

// Comments router
const commentsRouter = require('./routes/Comments');
app.use("/comments", commentsRouter);

db.sequelize.sync().then(() => {
    app.listen(1025, () => {
        console.log("Server is running on port 1025");
    });
});


