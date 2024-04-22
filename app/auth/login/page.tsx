/* eslint-disable react/no-unescaped-entities */
"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../Auth.module.css';
import { useRouter } from 'next/navigation';
// import { useRouter } from 'next/router';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter(); 

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:8081/v1/authenticate/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email, password: password }), // stringify the object
      });

      if (response.ok) {
        router.push('/event'); 
      } else {
        console.error('Invalid credentials');
      }
    } catch (error) {
      console.error('Error occurred:', error);
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className={styles.formGroup}>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className={styles.btn}>
          Login
        </button>
        <p>
          Don't have an account?{' '}
          <Link href="/signup">
              Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
