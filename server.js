      const express = require('express');
   const app = express();
   const bodyParser = require('body-parser');

   app.use(bodyParser.json());

   let messages = [];

   app.post('/messages', (req, res) => {
     const message = req.body.message;
     messages.push(message);
     res.sendStatus(200);
   });

   app.get('/messages', (req, res) => {
     res.json(messages);
   });

   app.listen(process.env.PORT || 3000, () => {
     console.log('Server is running');
   });