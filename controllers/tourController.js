// using ./ means in this folder + ../ out of this folder
const Tour = require('../models/tourModel');

exports.getTour = (req, res) => {
  const id = req.params.id * 1;
  const tour = tours.find((el) => el.id === id);

  res.status(200).json({ status: 'ok', results: tours.length, data: { tour } });
};

//Async used before http requests
exports.createTour = async (req, res) => {
  try {
    const newTour = await Tour.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        tour: newTour,
      },
    });
  } catch (err) {
    res.status(400).json({ status: 'fail', message: err });
  }
};

exports.getAllTours = (req, res) => {
  res.status(200).json({
    status: 'OK',
    requestedAt: req.requestTime,
    results: tours.length,
    data: { tours },
  });
};

exports.updateTour = (req, res) => {
  res.status(200).json({ status: 'success', data: 'Updated tour here' });
};

exports.deleteTour = (req, res) => {
  //204 means no content
  //data set to null
  res.status(204).json({ status: 'success', data: null });
};
