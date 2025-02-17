// pages/api/events.js
import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

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

const Event = mongoose.models.Event || mongoose.model('Event', eventSchema);

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const events = await Event.find();
      res.status(200).json(events);
    } catch (error) {
      console.error('Error fetching events:', error);
      res.status(500).json({ error: 'Unable to fetch events' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}