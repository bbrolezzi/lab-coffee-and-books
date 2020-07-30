const { Router } = require('express');
const placesRouter = new Router();

const Places = require('./../models/place');

placesRouter.get('/create', (req, res) => {
  res.render('places/create');
});

placesRouter.post('/create', (req, res, next) => {
  const { type, name, latitude, longitude } = req.body;
  Places.create({
    type,
    name,
    location: {
      coordinates: [longitude, latitude]
    }
  })
    .then(place => {
      res.redirect(`/places/${place._id}`);
    })
    .catch(error => {
      next(error);
    });
});

placesRouter.get('/:id', (req, res, next) => {
  const id = req.params.id;
  Places.findById(id)
    .then(place => {
      res.render('places/single', { place });
    })
    .catch(error => {
      next(error);
    });
});

module.exports = placesRouter;
