"use client";
import Link from "next/link";
import { useState } from "react";

const Form = () => {
  return (
    <div className="h-screen justify-center items-center flex bg-gradient-to-r from-purple-700 to-blue-900 shadow-2xl">
    <div className="flex justify-center items-center">
        
    <div className="w-full max-w-xs">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="Email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Email"
            type="Email"
            placeholder="Email"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="PDF"
          >
            PDF File
          </label>
          <input
            className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="PDF"
            type="file"
            placeholder="Upload File"
          />
          
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Submit
          </button>
          
        </div>
      </form>
      </div>
    </div>
    </div>
  );
};

export default Form;
