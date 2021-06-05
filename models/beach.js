const mongoose = require('mongoose');
const Schema = mongoose.Schema; 


const beachSchema = new Schema ({
    beachName: String,
    beachLocated: String,
    sandsColor: String,
    rating: String},{ timestamps: true 


// rating: {
//             type: Number,
//             min: 1,
//             max: 10,
//             default: 10
//         }
//         },{ timestamps: true }

});


 module.exports = mongoose.model('Beach', beachSchema);