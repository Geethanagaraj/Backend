const express =  require('express');
const app = express();
const port = 5000;
const mongoose = require('mongoose');
const product = require('./Routes/Product');
app.use(express.json());
app.listen(port, ()=>{
  console.log(`Server is running on http://localhost:${port}`);
});

//root data
app.get('/', (req, res) =>{
  res.send('Welcome to the home page!');
})

app.use('/product', product);
//connect to mongodb
mongoose.connect('mongodb://localhost:27017/assessment',)
.then(() => console.log('Connected to mongodb'))
.catch(err => console.error('could not connect to mongodb...', err));