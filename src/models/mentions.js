const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  Consultor: {
    type: Array,
    required: true,
    trim: true
  }
});

module.exports = mongoose.model('Mentions', schema);