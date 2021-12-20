const express = require('express'),
    routes = require('./routes'),
    mongoose = require('mongoose'),
    app = express();

require('dotenv').config();

app.use(express.json());
app.use(routes);

mongoose.connect(process.env.CONNECTIONSTRING, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log("Connected to db!");
    app.listen(process.env.PORT, () => {
        console.log(`Server is up and running on ${process.env.PORT}!`);
    });
})
.catch((e) => console.error(`Foutmelding: ${e}`));