require('dotenv').config();

const siteRouter = require('./site.route.js');
const projectsRouter = require('./projects.route.js');
// const jsonServerRouter = require('./jsonServer.route.js');

function route(app) {

    // app.use('/api', jsonServerRouter);

    app.use('/projects', projectsRouter);

    app.use('/', siteRouter);

    app.use(function(request, response) {
        // response.status(404).send('404');
        response.status(404).send(`
        some thing wrong bro!
        <a href="http://localhost:${process.env.PORT}" target="_blank">Index</a>
        `);
    });
}

module.exports = route;