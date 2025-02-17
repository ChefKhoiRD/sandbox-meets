import { useState } from 'react';

export default function AddEventForm({ onAddEvent, onClose }) {
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [description, setDescription] = useState('');
  const [host, setHost] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = {
      id: Date.now(),
      title,
      location,
      date,
      time,
      description,
      host,
      attendees: 0,
    };
    onAddEvent(newEvent);
    setTitle('');
    setLocation('');
    setDate('');
    setTime('');
    setDescription('');
    setHost('');
    onClose(); // Close the modal after adding an event
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-2">
        <label className="block text-sm font-bold mb-1 text-white">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border border-neutral-700 rounded bg-neutral-800 text-white"
          required
        />
      </div>
      <div className="mb-2">
        <label className="block text-sm font-bold mb-1 text-white">Location</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-2 border border-neutral-700 rounded bg-neutral-800 text-white"
          required
        />
      </div>
      <div className="mb-2">
        <label className="block text-sm font-bold mb-1 text-white">Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full p-2 border border-neutral-700 rounded bg-neutral-800 text-white"
          required
        />
      </div>
      <div className="mb-2">
        <label className="block text-sm font-bold mb-1 text-white">Time</label>
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="w-full p-2 border border-neutral-700 rounded bg-neutral-800 text-white"
          required
        />
      </div>
      <div className="mb-2">
        <label className="block text-sm font-bold mb-1 text-white">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border border-neutral-700 rounded bg-neutral-800 text-white"
          required
        />
      </div>
      <div className="mb-2">
        <label className="block text-sm font-bold mb-1 text-white">Host</label>
        <input
          type="text"
          value={host}
          onChange={(e) => setHost(e.target.value)}
          className="w-full p-2 border border-neutral-700 rounded bg-neutral-800 text-white"
          required
        />
      </div>
      <div className="flex justify-end mt-4">
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition-colors text-sm"
        >
          Add Event
        </button>
      </div>
    </form>
  );
}