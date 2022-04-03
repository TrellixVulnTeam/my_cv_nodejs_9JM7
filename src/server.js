

require('dotenv').config();

const path = require('path');
const express = require('express');
const app = express();
const { engine } = require('express-handlebars');

const route = require('./app/routes/route.js');
const serverJson = require('./app/routes/jsonServer.route.js');

const port = process.env.PORT;

//engine
app.use(express.static(path.join(__dirname, 'public'))); //open 'public' file to join browser


//template engine handlebars
app.engine('hbs', engine());
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'))


//route init
app.use('/',serverJson); // router jsonServer
route(app);


//port server
app.listen(port, () => {
    console.log(`running at port ${port}`);
});