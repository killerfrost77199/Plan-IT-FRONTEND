"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './StudentUpload.module.css';

const StudentUploadPage: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add file upload logic here
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
        <h1>Upload Student Records</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label>Upload Excel File</label>
            <input
              type="file"
              accept=".xlsx, .xls"
              onChange={handleFileChange}
              required
            />
          </div>
          <button type="submit" className={styles.btn}>
            Upload
          </button>
        </form>
      </div>
    </div>
  );
};

export default StudentUploadPage;