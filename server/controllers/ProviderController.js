const Provider = require('../models/ProviderSchema');

// Create a provider
exports.create = function(req, res) {
  const provider = new Provider(req.body);

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

// Get the current provider
exports.read = function(req, res) {
  /* send back the provider as json from the request */
  res.json(req.provider);
};

// Update a provider
exports.update = function(req, res) {
  const provider = req.provider;

  // TODO: ADD FIELDS

  /* Save the listing */
  provider.save((err) => {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    } else {
      res.json(provider);
      console.log(provider);
    }
  });
};

// Delete a provider
exports.delete = function(req, res) {
  const provider = req.provider;
  Provider.deleteOne(provider, (err) => {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    } else res.status(200).end();
  });
};

// Get all the providers
exports.list = function(req, res) {
  Provider.find({}).exec((err, providers) => {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    } else {
      res.json(providers);
    }
  });
};

// Middleware to get a provider from database by ID
exports.providerById = function(req, res, next, id) {
  Provider.findById(id).exec((err, provider) => {
    if (err) {
      res.status(400).send(err);
    } else {
      req.provider = provider;
      next();
    }
  });
};
