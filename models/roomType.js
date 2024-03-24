const mongoose = require('mongoose');

const roomTypeSchema = new mongoose.Schema({
  name:String
});

const roomtypes = mongoose.model('roomtypes', roomTypeSchema);

module.exports = roomtypes;