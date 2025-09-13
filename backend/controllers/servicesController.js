const Service = require('../models/serviceModel');
const mongoose = require('mongoose');

//get all workout
exports.getServices = async (req, res) => {
  const services = await Service.find({}).sort({ createdAt: -1 });

  res.status(200).json(services);
};

//get a single workout

exports.getService = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'Not such services ' });
  }

  const services = await Service.findById(id);
  if (!services) {
    return res.status(404).json({ error: 'No such services' });
  }

  res.status(200).json(services);
};

//create a new workout
exports.createService = async (req, res) => {
  const { image, title, description } = req.body;

  //add doc to db
  try {
    const services = await Service.create({
      image,
      title,
      description,
    });
    res.status(200).json(services);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//delete a workout
exports.deleteService = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'Not such workout ' });
  }

  const services = await Service.findOneAndDelete({ _id: id });

  if (!services) {
    return res.status(400).json({ error: 'No such workouts' });
  }

  res.status(200).json(services);
};

//update a workout
exports.updateService = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'No such services' });
  }
  const services = await Service.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!services) {
    return res.status(400).json({ error: 'No such services' });
  }

  res.status(200).json(services);
};
