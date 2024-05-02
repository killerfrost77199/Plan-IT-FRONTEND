/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";
import Link from "next/link";
//import styles from '../Auth.module.css';
import { useRouter } from "next/navigation";
// import { useRouter } from 'next/router';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:8081/v1/authenticate/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: email, password: password }), // stringify the object
        }
      );

      if (response.ok) {
        router.push("/event");
      } else {
        console.error("Invalid credentials");
      }
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };

  return (
    <div className="h-screen justify-center items-center flex bg-gradient-to-r from-purple-700 to-blue-900 shadow-2xl">
      <div className="flex justify-center items-center">
        <div className="h-80 w-80 rounded-tl-3xl rounded-bl-3xl bg-purple-600"></div>
        <div className="h-80 w-60 rounded-tr-3xl rounded-br-3xl bg-white">
          <form
            className="p-6 space-y-4 md:space-y-6 sm:p-8"
            onSubmit={handleSubmit}
          >
            <div>
              <h1 className="text-black">Login your account</h1>
            </div>
            <div>
              <input
                className="border-b-2 border-black text-black"
                type="email"
                placeholder="Enter Email"
                value={email}
            onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <input
                className="border-b-2 border-black text-black"
                type="password"
                placeholder="Enter Password"
                value={password}
            onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div>
              <button
                type="submit"
                className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-3xl text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
