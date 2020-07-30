'use strict';

const { Router } = require('express');
const router = new Router();

const Places = require('./../models/place');

router.get('/', (req, res, next) => {
  Places.find()
    .then(places => {
      res.render('home', { places });
    })
    .catch(error => {
      next(error);
    });
});

module.exports = router;
