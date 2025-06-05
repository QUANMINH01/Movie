import React, { useState } from "react";

export const Header = ({ onSearch, onClearSearch }) => {
  const [input, setInput] = useState("");

  const handleSearch = () => {
    if (input.trim() !== "") {
      onSearch(input.trim());
    }
  };

  return (
    <div className="p-4 bg-black flex items-center justify-between">
      <div className="flex items-center space-x-10">
        <h1 className="text-[30px] uppercase font-bold text-red-700">Movie</h1>
        <nav className="flex items-center space-x-8">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onClearSearch();
              setInput(""); // xóa ô input
            }}
            className="text-white cursor-pointer"
          >
            Home
          </a>
          <a href="#" className="text-white">
            About
          </a>
          <a href="#" className="text-white">
            Contact
          </a>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="p-3 text-black bg-white rounded-lg"
        />
        <button
          onClick={handleSearch}
          className="p-2 text-white bg-red-600 rounded-lg"
        >
          Search
        </button>
      </div>
    </div>
  );
};
