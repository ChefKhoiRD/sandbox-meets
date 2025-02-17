require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import cors

const app = express();
const port = 9999; // Explicitly set the port to 9999

app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all routes

const MONGODB_URI = process.env.MONGODB_URI;

console.log('MONGODB_URI:', MONGODB_URI); // Log the MONGODB_URI to verify it's loaded correctly

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((error) => console.error('MongoDB connection error:', error));

const eventSchema = new mongoose.Schema({
  title: String,
  location: String,
  date: String,
  time: String,
  description: String,
  host: String,
  attendees: Number,
  creationDate: { type: Date, default: Date.now },
});

const Event = mongoose.model('Event', eventSchema);

app.post('/api/add-event', async (req, res) => {
  const { title, location, date, time, description, host } = req.body;
  const newEvent = new Event({
    title,
    location,
    date,
    time,
    description,
    host,
    attendees: 0,
  });

  try {
    const savedEvent = await newEvent.save();
    res.status(201).json(savedEvent);
  } catch (error) {
    console.error('Error adding event:', error);
    res.status(500).json({ error: 'Unable to add event' });
  }
});

app.get('/api/events', async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (error) {
    console.error('Error fetching events:', error);
    res.status(500).json({ error: 'Unable to fetch events' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});