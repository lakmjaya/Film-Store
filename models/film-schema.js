const mongoose = require('mongoose');
const itemsSchema = new mongoose.Schema({
    name:{type:String, required: true},
    img:{type:String, required:true},
    description:{type:String, required:true},
    quantity:{type:Number, required:true},
    price:{type:String, required:true}
});

const Films = mongoose.model('Items', itemsSchema);

 module.exports = Films;