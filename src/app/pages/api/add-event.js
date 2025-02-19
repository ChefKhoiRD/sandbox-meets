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
  if (req.method === 'POST') {
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
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}