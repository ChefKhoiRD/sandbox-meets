import { events } from '@/data/events';

export default function EventPage({ params }) {
  const event = events.find((e) => e.id === params.id);

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">{event.title}</h1>
      <img
        src={`/images/${event.image}`}
        alt={event.title}
        className="w-full h-64 object-cover rounded-lg"
      />
      <p className="mt-4"><strong>Date:</strong> {event.date}</p>
      <p className="mt-2"><strong>Location:</strong> {event.location}</p>
      <p className="mt-4">{event.description}</p>
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
        RSVP
      </button>
    </div>
  );
}