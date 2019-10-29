const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/* Create your schema */
let providerSchema = new Schema({
  'Provider Name': String,
  'Services Provided': String,
  'Child & Families': {
    Adoption: Boolean,
    'Domestic Violence/ Abuse': Boolean,
    'Elder Services': Boolean,
    Infants: Boolean,
  },
  Education: Boolean,
  Financial: {
    'Eviction/ Foreclosure': Boolean,
    'Social Security': Boolean,
    Utilities: Boolean,
  },
  'Health & Wellness': {
    Acupuncture: Boolean,
    'Cancer-Related': Boolean,
    Dental: Boolean,
    Disability: Boolean,
    'HIV-Related': Boolean,
    'Massage Therapy': Boolean,
    Medical: Boolean,
    'Mental Health': Boolean,
    'Occupational Therapy': Boolean,
    Pharmacy: Boolean,
    'Physical Therapy': Boolean,
    'Substance Abuse': Boolean,
    'Vision Care': Boolean,
  },
  Job: Boolean,
  Legal: {
    'Civil Liberties/ Social Justice': Boolean,
    Immigration: Boolean,
    'Law Enforcement': Boolean,
    'Photo Identification': Boolean,
    'Voter Registration': Boolean,
  },
  'Crisis Events': {
    'Crisis Counseling': Boolean,
    Disaster: Boolean,
    Shelters: Boolean,
    'Victim Services': Boolean,
  },
  Transportation: Boolean,
  'Basic Needs': {
    Clothing: Boolean,
    'Food Assistance': Boolean,
    Housing: Boolean,
  },
  Other: {
    Burial: Boolean,
    Computer: Boolean,
    'Information and Referral': Boolean,
    Veterans: Boolean,
    Veterinary: Boolean,
  },
  'Provider Info': {
    'Eligibility Criteria': String,
    'Address 1': String,
    'Address 2': String,
    City: String,
    State: String,
    Zipcode: Number,
    'Contact Name': String,
    'Phone 1 Name': String,
    'Phone 1': String,
    'Phone 2 Name': String,
    'Phone 2': String,
    'Email Address': String,
    'Bus Routes': String,
    Website: String,
    'Walk in': String,
    'Hours Open': {
      Monday: String,
      Tuesday: String,
      Wednesday: String,
      Thursday: String,
      Friday: String,
      Saturday: String,
      Sunday: String,
    },
    'Appointment Needed': String,
    'Appointment Phone': String,
    'Appointment URL': String,
    'Walk In OK': String,
    'Service Area': String,
    'Application Needed': String,
    'Application Online': String,
    'Application In Person': String,
    Cost: String,
    'Translation Available': String,
    'United Way Approval': String,
    'Additional Information': String,
    'Year data was last updated': Number,
  },
  'Minimum Age': String,
  'Maximum Age': String,
  'Low-Income Household': String,
  'Employment / Education': String,
  Homelessness: String,
  'City of Gainesville Resident': String,
  'Alachua County Resident': String,
  Veteran: String,
  'Disaster, Crime and/or Abuse Victim': String,
  Uninsured: String,
  Female: String,
  Male: String,
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
