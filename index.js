const express = require('express');
const dotenv = require('dotenv');
const app = express();
const User = require('./api/models/users');

app.get("/",async (req,res)=>  {

      const user = await User.find({});
      res.send(user)

})
const port = 3000;

app.listen(port,()=> console.log(`server listo ${port}`))

