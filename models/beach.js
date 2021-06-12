const mongoose = require('mongoose');
const Schema = mongoose.Schema; 


const beachSchema = new Schema ({
    beachName: String,
    beachLocated: String,
    sandColor: String,
    rating: String },
    { timestamps: true 

});


 module.exports = mongoose.model('Beach', beachSchema);