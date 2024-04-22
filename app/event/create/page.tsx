"use client"
import React from 'react';
import { useState, useEffect } from 'react';
import {useRouter } from 'next/navigation';
interface Props {
    // Define your component props here
}

const Dashboard: React.FC<Props> = () => {
    const [eventName, setEventName] = useState('');
    const [eventType, setEventType] = useState('');
    const [eventDate, setEventDate] = useState('');
    const [eventStartTime, setEventStartTime] = useState('');
    const [eventEndTime, setEventEndTime] = useState('');
    const [eventVenue, setEventVenue] = useState('');
    const [status, setStatus] = useState(1);
    const [guests, setGuests] = useState('');
    const router = useRouter();
    // Function to handle form submission
    const handleSubmit = async(e:any) => {
        e.preventDefault();
        // Here you can perform any actions with the form data, like sending it to a server
        try{
            console.log({
                eventName,
                eventType,
                eventDate,
                eventStartTime,
                eventEndTime,
                eventVenue,
                status,
                guests,
            });
        const response = await fetch('http://localhost:8081/v1/events/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            eventName,
            eventType,
            eventDate,
            eventStartTime,
            eventEndTime,
            eventVenue,
            status,
            guests,
        }),
      });
         if(response.ok){
              router.push("/event");
         }
            
        } catch (error){
            console.log(error);
        }
        
    };

    return (
        <form onSubmit={handleSubmit} className='h-[90vh] flex flex-col md:flex-row w-full'>
            <div className='flex flex-wrap w-full md:w-2/3'>
                <div id="row1" className='ml-4 w-full mt-2 flex justify-center items-center'>
                    <label className='flex flex-col mr-2 w-1/3 md:w-1/2'>
                        <span className='mb-1 text-xs'>Event Name:</span>
                        <input type="text" className='border rounded-sm text-xs focus:outline-none focus:ring-1 focus:ring-teal-100 p-1' value={eventName} onChange={(e) => setEventName(e.target.value)} />
                    </label>
                    <label className='flex flex-col mr-2 w-1/3 md:w-1/2'>
                        <span className='mb-1 text-xs'>Event Type:</span>
                        <select value={eventType} className="border rounded-sm bg-white text-xs focus:outline-none focus:ring-1 focus:ring-teal-100 p-1" onChange={(e) => setEventType(e.target.value)}>
                            <option value="">Select Event Type</option>
                            <option value="1">EDUTECH</option>
                            <option value="2">MUSIC</option>
                            <option value="3">Traditional</option>
                            <option value="4">Cultural</option>
                        </select>
                    </label>
                    <div className='flex justify-center items-center w-1/4'>
                    <label className='flex flex-col mr-2  md:w-1/3'>
                        <span className='mb-1 text-xs'>Start Time:</span>
                        <input type="time" className='border rounded-sm text-xs focus:outline-none focus:ring-1 focus:ring-teal-100 p-1' value={eventStartTime} onChange={(e) => setEventStartTime(e.target.value)} />
                    </label>
                    <label className='flex flex-col mr-2  md:w-1/3'>
                        <span className='mb-1 text-xs'>End Time:</span>
                        <input type="time" className='border rounded-sm text-xs focus:outline-none focus:outline-none focus:ring-1 focus:ring-teal-100 p-1' value={eventEndTime} onChange={(e) => setEventEndTime(e.target.value)} />
                    </label>
                    </div>
                </div>

                <div id="row2" className='ml-4 w-full mt-2 flex justify-center items-center'>
                    <label className='flex flex-col mr-2 w-1/3 md:w-1/3'>
                        <span className='mb-1 text-xs'>Event Date:</span>
                        <input type="date" className='border rounded-sm  text-xs focus:outline-none focus:ring-1 focus:ring-teal-100 p-1' value={eventDate} onChange={(e) => setEventDate(e.target.value)} />
                    </label>
                    {/* Event Venue */}
                    <label className='flex flex-col mr-2 w-1/3 md:w-1/2'>
                        <span className='mb-1 text-xs'>Event Venue:</span>
                        <input type="text" className='border rounded-sm text-xs focus:outline-none focus:ring-1 focus:ring-teal-100 p-1' value={eventVenue} onChange={(e) => setEventVenue(e.target.value)} />
                    </label>
                    {/* Guests */}
                    <label className='flex flex-col w-1/4 md:w-1/2'>
                        <span className='mb-1 text-xs'>Guests:</span>
                        <input type="text" className='border rounded-sm text-xs focus:outline-none focus:ring-1 focus:ring-teal-100 p-1' value={guests} onChange={(e) => setGuests(e.target.value)} />
                    </label>
                </div>
            </div>
            <button type="submit" className='justify-self-center self-center	align-self: center; mt-4 bg-blue-500 hover:bg-blue-700 text-white w-24 font-bold  rounded'>Submit</button>
        </form>
    );
};

export default Dashboard;

