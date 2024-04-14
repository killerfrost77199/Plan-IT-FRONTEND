"use client"
import React, { useState, useEffect } from 'react';
import styles from './EventPoster.module.css';

const EventPosterPage: React.FC = () => {
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
      console.warn(eventData);
      setEvents(eventData);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  return (
    <>
      <h1>Event Poster</h1>
      <table className={styles.eventTable}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Date</th>
            {/* Add more table headers as needed */}
          </tr>
        </thead>
        <tbody>
          {events.map((event, index) => (
            <tr key={index}>
              <td>{event.title}</td>
              <td>{event.description}</td>
              <td>{event.date}</td>
              {/* Add more table cells for additional event properties */}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default EventPosterPage;
