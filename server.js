const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

let messages = [];

app.get('/messages', (req, res) => {
  const callback = req.query.callback;
  
  if (callback) {
    res.send(${callback}(${JSON.stringify(messages)}););
  } else {
    res.json(messages);
  }
});

app.listen(port, () => {
  console.log(Server running on port ${port});
});