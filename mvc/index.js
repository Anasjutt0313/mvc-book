const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bookRouter = require('./router/book')
// connect to Mongo
mongoose.connect('mongodb://localhost:27017/library')
.then(()=> console.log('mongodb connected'))
.catch((err)=> console.error(err))

app.use(express.json());
app.use("/book", bookRouter);
app.use("/user", bookRouter);

// localhost:8000/book
app.listen(3000,()=>{
    console.log('Server started on port 3000');
});