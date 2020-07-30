'use strict';

const { Router } = require('express');
const router = new Router();

const Places = require('./../models/place');

router.get('/', (req, res, next) => {
  Places.find()
    .then(place => {
      res.render('home', { place });
    })
    .catch(error => {
      next(error);
    });
});

module.exports = router;
