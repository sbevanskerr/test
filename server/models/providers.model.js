const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/* Create your schema */
let providerSchema = new Schema({
  'Provider Name': String,
  'Services Provided': String,
});

/* create a 'pre' function that adds the updated_at and created_at if not already there property */
providerSchema.pre('save', function(next) {
  // Sanity check to make sure name and code are provided
  if (this['Provider Name'] == undefined) throw '[DB]: name not provided';

  // Get date object
  let currDate = new Date();
  // Update the updated_at property
  this.updated_at = currDate;
  // If created_at is not present then create it
  if (!this.created_at) this.created_at = currDate;
  // Pass onto next middleware
  next();
});

/* Use your schema to instantiate a Mongoose model */
let Provider = mongoose.model('Provider', providerSchema);

/* Export the model to make it available to other parts of your Node application */
module.exports = Provider;
