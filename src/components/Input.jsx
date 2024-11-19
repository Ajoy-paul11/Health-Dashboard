import React from "react";

function Input() {
  return (
    <div className="mb-4">
      <label
        htmlFor="name"
        className="block text-xl font-medium mb-1 text-[#202829] dark:text-[#fffff9]"
      >
        Patient Name
      </label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Enter your name"
        required
        className="w-full p-2 bg-[#F5F5DC] dark:bg-[#202829] dark:text-[#FFFFF0] border border-[#202829] dark:border-[#FFFFF0] border-opacity-50 rounded-md focus:outline-none focus:ring-2 focus:ring-[#202829] dark:focus:ring-[#FFFFF0] focus:border-transparent placeholder-[#202829] dark:placeholder-[#FFFFF0] placeholder-opacity-50"
      />
    </div>
  );
}

export default Input;
