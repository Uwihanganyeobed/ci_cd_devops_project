const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});
app.get('/user', (req,res)=>{
  res.send("This is users route")
});

app.get('/products',(req,res)=>{
  const products = [
    {
      id: 1,
      name: 'carrots',
      price: 20
    },
    {
      id: 2,
      name: 'pizza',
      price: 24
    },
    {
      id: 3,
      name: 'yams',
      price: 12
    },
    {
      id: 4,
      name: 'maize',
      price: 31
    },
    {
      id: 5,
      name: 'beans',
      price: 22
    },

  ]
  // res.send("These are list of products")
  res.json(products);
})

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
