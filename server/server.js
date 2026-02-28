const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.get('/', (req, res) => {
  res.send('Portfolio API is running...');
});

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Please fill in all fields.' });
  }

  // Here you would typically connect to a database or send an email (e.g., using Nodemailer)
  console.log('Received Contact Request:', { name, email, message });

  // Simulate success
  res.status(200).json({ success: true, message: 'Message sent successfully!' });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});