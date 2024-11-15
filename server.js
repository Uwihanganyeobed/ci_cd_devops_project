const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});
app.get('/user', (req,res)=>{
  res.send("This is users route")
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
