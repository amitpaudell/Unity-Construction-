const express = require('express');

const router = express.Router();

const constructionContoller = require('../controllers/constructionController');

router.get('/', constructionContoller.getConstructions);

// GET a single workout
router.get('/:id', constructionContoller.getConstruction);

// POST a new workout
router.post('/', constructionContoller.createConstruction);

// DELETE a workout
router.delete('/:id', constructionContoller.deleteConstruction);

// UPDATE a workout
router.patch('/:id', constructionContoller.updateConstruction);

module.exports = router;
