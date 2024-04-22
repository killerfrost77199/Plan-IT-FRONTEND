"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
const Guest = () => {
    const [guest, setGuest] = useState<any[]>([]);
  
    useEffect(() => {
      fetchguest();
    }, []);
  
    const fetchguest = async () => {
      try {
        const response = await fetch('http://localhost:8081/v1/guest/1');
        console.log(response);
        if (!response.ok) {
          throw new Error('Failed to fetch guest');
        }
        const eventData = await response.json();
        setGuest(eventData.data);
      } catch (error) {
        console.error('Error fetching guest:', error);
      }
    };
  
    const getStatus = (status: number) => {
      return status === 1 ? 'Upcoming' : 'Completed';
    };
  
    const getIdForposter = async (id: any) => {
      try {
        const posterResponse = await fetch(`http://localhost:8081/v1/poster/${id}`);
        const data = await posterResponse.json();
        console.log(data.data);
        const link = document.createElement('a');
        link.href = data.data;
        link.setAttribute('download', 'poster.pdf');
        document.body.appendChild(link);
  
        link.click();
  
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    return (
        <div className="container mx-auto my-10 p-4 bg-white rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-sm font-semibold">Guest Lecture</h2>
          <Link href={`/event/create`}>
          <button className="bg-blue-500 text-white px-2 py-1 rounded-sm" style={{ fontSize:'.7rem' }}>
            Create
            </button>
          </Link>
         
        </div>
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="border p-2" style={{ fontSize:'.6rem' }}>Guest lecture Name</th>
              <th className="border p-2" style={{ fontSize:'.6rem' }}>Lecture Date</th>
              <th className="border p-2" style={{ fontSize:'.6rem' }}>Start Time</th>
              <th className="border p-2" style={{ fontSize:'.6rem' }}>End Time</th>
              <th className="border p-2" style={{ fontSize:'.6rem' }}>Main Guest</th>
              <th className="border p-2" style={{ fontSize:'.6rem' }}>Status</th>
              <th className="border p-2" style={{ fontSize:'.6rem' }}>Generate Poster</th>
            </tr>
          </thead>
          <tbody>
            {guest.map((event, index) => (
              <tr key={index} className="border">
                <td className="border p-1 text-center" style={{ fontSize:'.6rem' }}>
                  <Link href={`/event/${event.guest_lecture_id}`}>
                    {event.title}
                  </Link>
                  </td>
                <td className="border p-1 text-center" style={{ fontSize:'.6rem' }}>{new Date(event.guest_lecture_date).toLocaleDateString()}</td>
                <td className="border p-1 text-center" style={{ fontSize:'.6rem' }}>{event.event_start_time}</td>
                <td className="border p-1 text-center" style={{ fontSize:'.6rem' }}>{event.event_end_time}</td>
                <td className="border p-1 text-center" style={{ fontSize:'.6rem' }}>{event.guest_name}</td>
                <td className="border p-1 text-center">
                  <button className={`rounded-full px-2 py-1  ${event.status === 1 ? 'bg-green-500' : 'bg-gray-500'} text-white`} style={{ fontSize:'.5rem' }}>
                    {getStatus(event.status)}
                  </button>
                </td>
                <td className="border p-1 text-center">
                  <button className="rounded-full px-2 py-1 bg-blue-500 text-white" onClick={() => getIdForposter(event.event_id)} style={{ fontSize:'.5rem' }}>
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

export default Guest;