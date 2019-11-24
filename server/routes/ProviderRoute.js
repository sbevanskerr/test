const providerController = require('../controllers/ProviderController');
const express = require('express');
const router = new express.Router();

router
  .route('/')
  .get(providerController.list)
  .post(providerController.create);

router
  .route('/:providerId')
  .get(providerController.read)
  .put(providerController.update)
  .delete(providerController.delete);

router.param('providerId', providerController.providerById);

module.exports = router;
