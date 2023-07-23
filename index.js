const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());

app.use(express.static('img'))
require('./confing/database');

// user router
const userRouter = require('./router/userRouter');
app.use('/user', userRouter);


// assets router
const assetsRouter = require('./router/assetsRouer');
app.use('/assets', assetsRouter);


//login
const loginRouter = require('./router/login')
app.use('/login', loginRouter);


//checkToken
const checkToken = require('./router/checkToken')
app.use('/checkToken', checkToken);


app.listen(3001, () => {
  console.log('Server is running on port 3001');
});