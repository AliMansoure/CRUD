const mongoose =require('mongoose');

mongoose.connect('mongodb://localhost:27017/EmloyeeDB',
{ useNewUrlParser: true  , useUnifiedTopology: true   },
    (err)=>{
     if(!err){console.log('mongoDB connected successfully')}
     else{console.log('error in DB connection:' + err)}
 });
 mongoose.set('useFindAndModify', false); 
//  mongoose.set('useCreateIndex', true);
//  mongoose.set('useUnifiedTopology', true);
  require('./emploee.model');