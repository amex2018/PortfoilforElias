const express = require('express');
require('dotenv').config();
const ConnectDB = require('./database/database');
const Cookieparser = require('cookie-parser');
const app = express();

// connecting database
ConnectDB();
 
app.use(Cookieparser());
app.use(express.json());
// router api => /api/v1/
const userRouter = require('./router/user');
const skillRouter = require('./router/skill')

app.use('/api/v1/admin/',userRouter)
app.use('/api/v1/admin/', skillRouter)


app.listen(process.env.PORT, () =>{
    console.log(`Server Running with PORT: ${process.env.PORT}`);
})
