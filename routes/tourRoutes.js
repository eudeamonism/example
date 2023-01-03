const express = require('express');
const tourController = require('../controllers/tourController');

const router = express.Router();

//Param Middleware
//any request that has an id will be filtered for id 'id' through tourController.checkID middleware housed in tourController since it has the tours variable which parses the json data
// router.param('id', tourController.checkID);

//Create a checkBody middleware
//Check if the body contains the name and price property
//if not, then send back 400 (bad request)
//Add it to the post handler stack

router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.createTour);
router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = router;
