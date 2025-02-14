import Link from 'next/link';

export default function EventCard({ event }) {
  return (

    <div className="bg-neutral-900 rounded-lg shadow-md p-3 hover:bg-neutral-800 transition-colors border-solid max-w-sm min-h-[105px] flex flex-col justify-between">
      <Link href={`/events/${event.id}`}>
      <div>
        <h2 className="text-lg font-semibold">{event.title}</h2>
        <p className="text-neutral-400 text-sm">{event.date} | {event.location}</p>
        <p className="text-neutral-400 text-sm mt-1.5">{event.description}</p>
      </div>
      
      </Link>
    </div>
  );
}