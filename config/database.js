const mongoose = require('mongoose');
const db = mongoose.connection;

//mogoose app connect

mongoose.connect(process.env.DATABASE_URI,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false, 
    useUnifiedTopology: true, 
});

// const db = mongoose.connection;

db.on('connected', () => {
    console.log(`Connected to MongoDB on ${db.host}:${db.port}`);
});