
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Cyber Crime Awareness Server Running');
});

app.get('/api/safety', (req, res) => {
  res.json({
    message: 'Stay Safe Online',
    tips: [
      'Never share OTP',
      'Avoid unknown links',
      'Use strong passwords',
      'Enable two-factor authentication',
      'Report cyber fraud immediately'
    ]
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(
    `Server running at http://localhost:${PORT}`
  );
});
