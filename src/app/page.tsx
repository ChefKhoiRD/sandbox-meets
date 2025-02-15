// app/page.tsx
"use client";
import { useState } from 'react';
import EventCard from '@/app/components/EventCard';
import AddEventForm from '@/app/components/AddEventForm';
import Modal from '@/app/components/Modal';
import { events as initialEvents } from '@/data/events';

export default function Home() {
  const [events, setEvents] = useState(initialEvents);
  const [showForm, setShowForm] = useState(false);

  const handleAddEvent = (newEvent) => {
    setEvents([...events, newEvent]);
    setShowForm(false); // Hide the form after adding an event
  };

  const toggleFormVisibility = () => {
    setShowForm(!showForm);
  };

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Sandbox Events</h1>
      <button
        onClick={toggleFormVisibility}
        className="mb-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
      >
        Add Event
      </button>
      {showForm && (
        <Modal onClose={toggleFormVisibility}>
          <AddEventForm onAddEvent={handleAddEvent} onClose={toggleFormVisibility} />
        </Modal>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </main>
  );
}