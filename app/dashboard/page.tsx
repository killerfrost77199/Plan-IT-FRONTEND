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
        <div style={{ height: '90vh' }}>
            <h3>dashboard</h3>
            <h3>dashboard1</h3>
            <h3>dashboard2</h3>
            <h3>dashboard3</h3>
            <h3>dashboard4</h3>
        </div>
    );
};

export default Dashboard;

