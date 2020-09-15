const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);


mongoose
    .connect('mongodb://localhost:27017/express-demo', {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })
    .then(() => console.log('DB Connected!'))
    .catch(err => {
        console.log(err);
    });

const userRouter = require('./routes/user.router');
const productRouter = require('./routes/product.router');
const authRouter = require('./routes/auth.router');
const apiProductRouter = require('./api/routes/product.router');


var port = 3000;

app.set('view engine', 'pug');
app.set('views', './views')
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.use('/', authRouter, userRouter, productRouter);

app.use('/', apiProductRouter);