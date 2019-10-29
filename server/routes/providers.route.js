const providers = require('../controllers/providers.controller.js');
const express = require('express');
const router = express.Router();

router
  .route('/')
  .get(providers.list)
  .post(providers.create);

router
  .route('/:providerId')
  .get(providers.read)
  .put(providers.update)
  .delete(providers.delete);

router.param('providerId', providers.providerByID);

module.exports = router;
