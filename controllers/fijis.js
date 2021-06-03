const Fiji = require('../models/fiji')

module.exports = {
 index,
 
}


function index(req, res) {
  Fiji.find({}, function(err, fiji) {
    console.log(fiji);
    res.render('fiji/index', {title: 'Fiji', fiji});
  });
}