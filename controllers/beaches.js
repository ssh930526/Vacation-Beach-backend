const Beach = require('../models/beach');

module.exports = {
  index,
  new: newBeach,
  create,
  fiji
};

function newBeach(req, res) {
    res.render('beaches/new');
}

function create(req, res) {


    if(req.body.beachLocated) {
        req.body.beach = req.body.beachLocated.replace(/\s*, \s*/g, ',')
        req.body.beach = req.body.beachLocated.split(',');
    }
    for(let key in req.body) {
        if(req.body[key] === '') delete req.body[key];
    }
    console.log('req.body', req.body)
    
    Beach.create(req.body, function(err, beach) {
        if(err) return res.redirect('/beaches/new');
        res.redirect('/beaches');
    });
}
 
function index(req, res) {
    Beach.find({}, function(err,beaches) {
        res.render('beaches/index', { beaches });
    });
}

function fiji(req, res) {
    res.render('/beaches/fiji');
}
