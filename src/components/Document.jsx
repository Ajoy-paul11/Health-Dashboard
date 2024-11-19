import React from "react";

function Document() {
  return (
    <div className=" mb-4">
      <label
        htmlFor="document"
        className="block text-xl text-[#202829] dark:text-[#fffff9] font-medium mb-1"
      >
        Genre
      </label>
      <input
        type="file"
        name="document"
        id="document"
        className="w-full p-2 bg-[#F5F5DC] dark:bg-[#202829] dark:text-[#FFFFF0] border border-[#202829] dark:border-[#FFFFF0] border-opacity-50 rounded-md focus:outline-none focus:ring-2 focus:ring-[#202829] dark:focus:ring-[#FFFFF0] focus:border-transparent"
      />
    </div>
  );
}

export default Document;
