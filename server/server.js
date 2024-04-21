const express = require('express');

const cors = require('cors');
const{connectDB} = require('./config/db');
const path = require('path');
const app = express();


const port = process.env.PORT || 3000;
const cookieParser = require('cookie-parser');
const authRouter = require('./Routes/Auth');
const itemRouter = require('./Routes/Item');
const userRouter = require('./Routes/User');
const  cartRouter = require('./Routes/Cart');
const   orderRouter = require('./Routes/Order')
require('dotenv').config();
connectDB()
app.listen(port, () => {
          console.log(`Server is running on port: ${port}`);
        });
      

// app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(express.json());

app.use(cookieParser())
app.use('/auth', authRouter);
app.use('/item', itemRouter);
app.use('/user', userRouter);
app.use('/cart', cartRouter);
app.use('/order' ,orderRouter)