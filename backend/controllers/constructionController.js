const Construction = require('../models/constructionModel');
const mongoose = require('mongoose');

//get all workout
exports.getConstructions = async (req, res) => {
  const construction = await Construction.find({}).sort({ createdAt: -1 });

  res.status(200).json(construction);
};

//get a single workout

exports.getConstruction = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'Not such construction ' });
  }

  const construction = await Construction.findById(id);
  if (!construction) {
    return res.status(404).json({ error: 'No such construction' });
  }

  res.status(200).json(construction);
};

//create a new workout
exports.createConstruction = async (req, res) => {
  const { image, title, description } = req.body;

  //add doc to db
  try {
    const construction = await Construction.create({
      image,
      title,
      description,
    });
    res.status(200).json(construction);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//delete a workout
exports.deleteConstruction = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'Not such workout ' });
  }

  const construction = await Construction.findOneAndDelete({ _id: id });

  if (!construction) {
    return res.status(400).json({ error: 'No such workouts' });
  }

  res.status(200).json(construction);
};

//update a workout
exports.updateConstruction = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'No such construction' });
  }
  const construction = await Construction.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!construction) {
    return res.status(400).json({ error: 'No such construction' });
  }

  res.status(200).json(construction);
};
