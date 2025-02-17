"use client";
import { useState } from 'react';

export default function EventCard({ event, user }) {
  const [isGoing, setIsGoing] = useState(false);

  const handleButtonClick = () => {
    setIsGoing(!isGoing);
  };

  return (
    <div className="bg-neutral-900 rounded-lg shadow-md p-3.5 hover:bg-neutral-800 transition-colors border-solid max-w-md flex flex-col justify-between">
      <div>
        <h2 className="text-lg font-semibold">{event.title}</h2>
        <p className="text-neutral-200 font-bold text-sm mt-0.5">
          {event.location} <span className="mx-2 text-lg">•</span> {event.attendees} Going
        </p>
        <p className="text-neutral-300 text-sm mt-0.5">{event.date} | {event.time}</p>
        <p className="text-neutral-300 text-sm mt-0.5">{event.description}</p>
      </div>
      {user && (
        <button
          onClick={handleButtonClick}
          className={`mt-2 py-1 px-2 rounded-full transition-colors text-xs ${isGoing ? 'bg-green-500 hover:bg-green-600' : 'bg-blue-500 hover:bg-blue-600'} text-white`}
        >
          {isGoing ? "I'm Going ✓" : 'Join Meetup'}
        </button>
      )}
    </div>
  );
}