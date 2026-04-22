import React from 'react'
import { useState } from "react"

const EmMyTask = () => {


  const [selectedDates, setSelectedDates] = useState([]);

  const daysInMonth = 30;
  const startDay = 1; // Monday start adjust kar sakta hai

  const toggleDate = (day) => {
    if (selectedDates.includes(day)) {
      setSelectedDates(selectedDates.filter((d) => d !== day));
    } else {
      setSelectedDates([...selectedDates, day]);
    }
  };

  const handleSubmit = () => {
    alert("Selected Dates: " + selectedDates.join(", "));
  };


  return (
    <>
     <div className="max-w-2xl mx-auto p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-semibold mb-4">My Tasks</h1>

      <div className="bg-white rounded-2xl shadow-md p-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <span className="font-medium">April 2024</span>
          <span>📅</span>
        </div>

        {/* Days */}
        <div className="grid grid-cols-7 text-center text-sm text-gray-500 mb-2">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
            <div key={d}>{d}</div>
          ))}
        </div>

        {/* Dates */}
        <div className="grid grid-cols-7 gap-2 text-center">
          {Array.from({ length: startDay }).map((_, i) => (
            <div key={"empty" + i}></div>
          ))}

          {Array.from({ length: daysInMonth }).map((_, i) => {
            const day = i + 1;
            const isSelected = selectedDates.includes(day);

            return (
              <div
                key={day}
                onClick={() => toggleDate(day)}
                className={`cursor-pointer py-2 rounded-lg ${
                  isSelected
                    ? "bg-green-200 text-black"
                    : "hover:bg-gray-200"
                }`}
              >
                {day}
              </div>
            );
          })}
        </div>

        {/* Button */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={handleSubmit}
            className="bg-teal-600 text-white px-5 py-2 rounded-lg hover:bg-teal-700"
          >
            Mark Attendance
          </button>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default EmMyTask
