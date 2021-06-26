require('./models/db');

const express = require('express');
const path = require('path');
const hbs = require('express-handlebars');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');
const bodyparser =require('body-parser');
const employeeController = require('./controllers/employeeController')
const app = express();
app.use(bodyparser.urlencoded({
    extended :true
}));
app.use(bodyparser.json()); 
app.set('views', path.join(__dirname,'/views/'));
app.engine('hbs',hbs({extname : 'hbs',defaultLayout : 'mainLayout', 
hbs: allowInsecurePrototypeAccess(hbs),
layoutsDir :__dirname +'/views/layouts'}) );
app.set('view engine', 'hbs');
app.listen(3000, () => {
    console.log('App listening on port 3000!');
});
app.use('/employee',employeeController );
