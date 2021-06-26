const mongoose = require('mongoose');


const employeeSchema = new mongoose.Schema({
    fullName: {
        type :String,
    required : 'This is require'},
    email :{
        type: String,
    required: 'This is require'},
    mobile : String,
    city : String

})

mongoose.model('Employee' ,employeeSchema);