const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  name: {
    required: true,
    type: String,
  },
  subcategory_of: {
    required: true,
    type: [mongoose.Types.ObjectId],
  },
  icon_name: {
    required: true,
    type: String,
  },
});

module.exports = mongoose.model('Category', categorySchema);
