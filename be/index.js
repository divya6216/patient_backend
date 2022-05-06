const express = require('express');

const mongoose =  require('mongoose');

const cors = require('cors');

const app = express();

app.use(express.json());

app.use(cors());

app.use('/user', require('./routes/user.route'));

// catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = { message: 'API not found', status: httpStatus.NOT_FOUND };
    return next(err);
});

(async () => {
    try {
        await app.listen(80);
        console.log(`Listening to port 80`);
        await mongoose.connect(`mongodb+srv://dev_test:dev_test@cluster0.atmuh.mongodb.net/dev?retryWrites=true&w=majority`);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.logr(error);
    }
  })()