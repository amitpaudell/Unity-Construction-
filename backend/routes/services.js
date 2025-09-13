const express = require('express');

const router = express.Router();

const serviceController = require('../controllers/servicesController');

router.get('/', serviceController.getServices);

// GET a single workout
router.get('/:id', serviceController.getService);

// POST a new workout
router.post('/', serviceController.createService);

// DELETE a workout
router.delete('/:id', serviceController.deleteService);

// UPDATE a workout
router.put('/:id', serviceController.updateService);

module.exports = router;
