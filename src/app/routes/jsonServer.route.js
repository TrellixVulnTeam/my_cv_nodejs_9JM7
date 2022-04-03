
const jsonServer = require('json-server');
const serverJson = jsonServer.create();
const jsonServerRouter = jsonServer.router('src/api/databaseApi.json');

serverJson.use('/api', jsonServerRouter);

module.exports = serverJson;