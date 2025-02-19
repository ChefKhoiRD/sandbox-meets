"use client";
import { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import EventCard from '@/app/components/EventCard';
import SkeletonEventCard from '@/app/components/SkeletonEventCard';
import AddEventForm from '@/app/components/AddEventForm';
import Modal from '@/app/components/Modal';
import LoginButton from '@/app/components/LoginButton';
import LogoutButton from '@/app/components/LogoutButton';
import { account } from '@/lib/appwrite';

export default function Home() {
  const [events, setEvents] = useState<{ id: string; host: string; creationDate: string; }[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch('http://localhost:9999/api/events');
        if (res.ok) {
          const data = await res.json();
          setEvents(data);
        } else {
          console.error('Failed to fetch events');
        }
      } catch (error) {
        console.error('Error fetching events:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  useEffect(() => {
    const getUser = async () => {
      try {
        const user = await account.get();
        setUser(user);
      } catch (error) {
        setUser(null);
      }
    };

    getUser();
  }, []);

  const handleAddEvent = async (newEvent) => {
    try {
      const res = await fetch('http://localhost:9999/api/add-event', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newEvent),
      });

      if (res.ok) {
        const data = await res.json();
        setEvents([...events, data]);
        setShowForm(false);
      } else {
        console.error('Failed to add event');
      }
    } catch (error) {
      console.error('Error adding event:', error);
    }
  };

  const toggleFormVisibility = () => {
    setShowForm(!showForm);
  };

  const formatDate = (dateString) => {
    const options = { month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true };
    return new Date(dateString).toLocaleString('en-US', options);
  };

  return (
    <main className="p-4 mx-auto max-w-4xl">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">
          {loading ? <Skeleton width={200} height={20} baseColor="#2d2d2d" highlightColor="#3d3d3d" /> : 'Sandbox Events'}
        </h1>
        <div className="flex items-center space-x-4">
          {user && !loading && (
            <button
              onClick={toggleFormVisibility}
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
            >
              Add Event
            </button>
          )}
          {loading ? <Skeleton width={100} height={20} baseColor="#2d2d2d" highlightColor="#3d3d3d" /> : user ? <LogoutButton /> : <LoginButton />}
        </div>
      </div>
      {showForm && (
        <Modal onClose={toggleFormVisibility}>
          <AddEventForm onAddEvent={handleAddEvent} onClose={toggleFormVisibility} />
        </Modal>
      )}
      <div className="flex flex-col gap-4">
        {loading
          ? Array.from({ length: 3 }).map((_, index) => <SkeletonEventCard key={index} />)
          : events.length === 0
          ? <p>No events found.</p>
          : events.map((event) => (
              <div key={event.id} className="w-full">
                <p className="text-sm text-neutral-400 mb-2">
                  {event.host} created a meetup on {formatDate(event.creationDate)}
                </p>
                <EventCard event={event} user={user} />
              </div>
            ))}
      </div>
    </main>
  );
}