"use client"
import React from 'react';
import { useState, useEffect } from 'react';

interface Props {
    // Define your component props here
}

const Dashboard: React.FC<Props> = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        setIsLoading(true);
        setError(null);
  
        try {
          const response = await fetch('/api/products');
          const data = await response.json();
          setProducts(data);
        } catch (err) {
        //   setError(err.message);
        } finally {
          setIsLoading(false);
        }
      };
  
      fetchData();
    }, []);

    return (
      <div className="h-screen justify-center items-center flex bg-gradient-to-r from-purple-700 to-blue-900 shadow-2xl">

      </div>
    );
};

export default Dashboard;

