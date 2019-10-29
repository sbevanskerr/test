const mongoose = require('mongoose');
const Provider = require('../models/providers.model.js');

/* Create a provider */
exports.create = function(req, res) {
  let provider = new Provider(req.body);

  // TODO: ADD FIELDS

  /* Then save the provider */
  provider.save(function(err) {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    } else {
      res.json(provider);
      console.log(provider);
    }
  });
};

/* Show the current provider */
exports.read = function(req, res) {
  /* send back the provider as json from the request */
  res.json(req.provider);
};

/* Update a provider */
exports.update = function(req, res) {
  let provider = req.provider;

  // TODO: ADD FIELDS

  /* Save the listing */
  provider.save(err => {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    } else {
      res.json(provider);
      console.log(provider);
    }
  });
};

/* Delete a listing */
exports.delete = function(req, res) {
  let provider = req.provider;
  Provider.deleteOne(provider, err => {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    } else res.status(200).end();
  });
};

/* Retrieve all the directory listings, sorted alphabetically by listing code */
exports.list = function(req, res) {
  Provider.find({})
    .sort({ code: 1 })
    .exec((err, providers) => {
      if (err) {
        console.log(err);
        res.status(400).send(err);
      } else {
        res.json(providers);
      }
    });
};

/* 
  Middleware: find a listing by its ID, then pass it to the next request handler. 

  HINT: Find the listing using a mongoose query, 
        bind it to the request object as the property 'listing', 
        then finally call next
 */
exports.providerByID = function(req, res, next, id) {
  Provider.findById(id).exec((err, listing) => {
    if (err) {
      res.status(400).send(err);
    } else {
      req.provider = provider;
      next();
    }
  });
};
