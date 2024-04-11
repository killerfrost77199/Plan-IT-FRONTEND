"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './EmailSend.module.css';

const EmailSendPage: React.FC = () => {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add email sending logic here
  };

  return (
    <div>
      <nav className={styles.navbar}>
        <div className={styles.navItem}>
          <Link href="/dashboard">
            Dashboard
          </Link>
        </div>
        <div className={styles.logout}>
          <button>Logout</button>
        </div>
      </nav>
      <div className={styles.container}>
        <h1>Send Email to Students</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label>Subject</label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label>Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit" className={styles.btn}>
            Send Email
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmailSendPage;