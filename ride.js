const express = require('express');
const app = express();
app.use(express.json());

app.post('/request-ride', (req, res) => {
  const { studentName, pickup, destination } = req.body;
  const riders = ["John", "Sarah", "Paul"];
  const matched = riders[Math.floor(Math.random() * riders.length)];
  res.json({ rider: matched, pickup, destination });
});

app.listen(3000, () => console.log('SmartRide server running on port 3000'));