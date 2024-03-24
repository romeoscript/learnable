const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  name:String,
  roomtype:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'roomtypes'
  },
  price:Number,
});

const room = mongoose.model('room', roomSchema);

module.exports = room;