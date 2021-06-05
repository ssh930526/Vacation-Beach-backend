const Beach = require('../models/beach');

module.exports = {
  index,
//   new: newBeach,
  create,
  update,
  delete: deleteBeach
};

// function newBeach(req, res) {
//     res.render('beaches/new');
// }

function index(req, res) {
    Beach.find({}, function (err, beaches) {
        res.status(200).json(beaches);
    });
}

function create(req, res) {
    Beach.create(req.body, function (err, beach) {
        res.status(201).json(beach);
    });
}

function update(req, res) {
    Beach.findByIdAndUpdate(req.params.id, req.body, function () {
        index(req, res);
    });
}

function deleteBeach(req, res) {
    Beach.findByIdAndDelete(req.params.id, function() {
        index(req, res);
    });
}