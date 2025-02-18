const express = require('express');
const app = express();

app.use(express.json({ limit: '50mb' })); // Increased limit

app.post('/data', (req, res) => {
  if (Object.keys(req.body).length === 0) {
    return res.status(400).json({ error: 'Empty request body.  Check server logs for details.' });
  }
  console.log(req.body); 
  // Process the request body here
  res.send('OK');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(3000, () => console.log('Server listening on port 3000'));