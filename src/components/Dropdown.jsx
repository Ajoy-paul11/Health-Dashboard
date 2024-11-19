import React from "react";

function Dropdown() {
  const age = [];

  for (let i = 1; i <= 100; i++) {
    age.push(i);
  }
  return (
    <div className=" mb-4">
      <label
        htmlFor="age"
        className="block text-[#202829] dark:text-[#fffff9] text-xl font-medium mb-1"
      >
        Age
      </label>
      <select
        id="age"
        name="age"
        className="w-full p-2 bg-[#F5F5DC] dark:bg-[#202829] dark:text-[#FFFFF0] border border-[#202829] dark:border-[#FFFFF0] border-opacity-50 rounded-md focus:outline-none focus:ring-2 focus:ring-[#202829] dark:focus:ring-[#FFFFF0] focus:border-transparent"
      >
        <option value="">Select your age </option>
        {age.map((opt, index) => (
          <option key={index} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
