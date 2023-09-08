const express = require('express');
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const db = require("./models");

// Routers
const routes = require("./routes/index.routes");
app.use("/", routes);

db.sequelize.sync().then(() => {
    app.listen(3002, () => {
        console.log("SERVER RUNNING ON PORT 3002");
    });
})
