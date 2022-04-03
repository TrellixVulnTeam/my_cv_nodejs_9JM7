
const express = require('express');
const router = express.Router();

const projectsController = require('../controllers/projects.controller.js');

router.use('/:slug', projectsController.project1);
router.use('/', projectsController.index);

module.exports = router;