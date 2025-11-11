const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send('Hello from Kubernetes! Pod: ' + process.env.HOSTNAME);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
