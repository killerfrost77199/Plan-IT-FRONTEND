"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Event: React.FC = () => {
  const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await fetch('http://localhost:8081/v1/events/1');
      if (!response.ok) {
        throw new Error('Failed to fetch events');
      }
      const eventData = await response.json();
      setEvents(eventData.data);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  const getStatus = (status: number) => {
    return status === 1 ? 'Upcoming' : 'Completed';
  };

  const getIdForposter = (status: any) => {
    return status === 1 ? 'Post' : 'No Post';
  };

  return (
    <div className="container mx-auto my-10 p-4 bg-white rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-sm font-semibold">Events</h2>
        <Link href={`/event/create`}>
        <button className="bg-blue-500 text-white px-2 py-1 rounded-sm" style={{ fontSize:'.7rem' }}>
          Create
          </button>
        </Link>
       
      </div>
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr>
            <th className="border p-2" style={{ fontSize:'.6rem' }}>Event Name</th>
            <th className="border p-2" style={{ fontSize:'.6rem' }}>Event Date</th>
            <th className="border p-2" style={{ fontSize:'.6rem' }}>Start Time</th>
            <th className="border p-2" style={{ fontSize:'.6rem' }}>End Time</th>
            <th className="border p-2" style={{ fontSize:'.6rem' }}>Main Guest</th>
            <th className="border p-2" style={{ fontSize:'.6rem' }}>Status</th>
            <th className="border p-2" style={{ fontSize:'.6rem' }}>Generate Poster</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event, index) => (
            <tr key={index} className="border">
              <td className="border p-1 text-center" style={{ fontSize:'.6rem' }}>
                <Link href={`/event/${event.event_id}`}>
                  {event.event_name}
                </Link>
                </td>
              <td className="border p-1 text-center" style={{ fontSize:'.6rem' }}>{new Date(event.event_date).toLocaleDateString()}</td>
              <td className="border p-1 text-center" style={{ fontSize:'.6rem' }}>{event.event_start_time}</td>
              <td className="border p-1 text-center" style={{ fontSize:'.6rem' }}>{event.event_end_time}</td>
              <td className="border p-1 text-center" style={{ fontSize:'.6rem' }}>{event.main_guest}</td>
              <td className="border p-1 text-center">
                <button className={`rounded-full px-2 py-1  ${event.status === 1 ? 'bg-green-500' : 'bg-gray-500'} text-white`} style={{ fontSize:'.5rem' }}>
                  {getStatus(event.status)}
                </button>
              </td>
              <td className="border p-1 text-center">
                <button className="rounded-full px-2 py-1 bg-blue-500 text-white" onClick={() => getIdForposter(event.status)} style={{ fontSize:'.5rem' }}>
                  Generate
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Event;
