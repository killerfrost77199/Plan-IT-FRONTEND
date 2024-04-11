import React from 'react';
import styles from './eventlayout.module.css';

const Event = () => {
    return (
        <div>
            {/* Add your component content here */}
            <div className={styles.container}>
        <h1>Events</h1>
        <div className={styles.eventSection}>
          <div className={styles.eventList}>
            <h2>Created/Upcoming Events</h2>
            {/* Display Created/Upcoming Events here */}
          </div>
          <div className={styles.eventList}>
            <h2>Ongoing Events</h2>
            {/* Display Ongoing Events here */}
          </div>
        </div>
        {/* <Link href="/event/poster"> */}
          <a className={styles.createEventBtn}>Create a New Event</a>
        {/* </Link> */}
      </div>
        </div>
    );
};

export default Event;