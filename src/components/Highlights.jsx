import React from "react";
import Paperplane from "../assets/PaperPlane.png";
function Highlights({ stats }) {
  const arrowDirectionStyle = {
    transform: `rotate(${stats.windDegree}deg)`,
    width: "2rem",
    padding: "0.25rem 0.5rem",
  };

  return (
    <div className="bg-slate-600 p-2 text-slate-200 flex flex-col justify-start items-center text-transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer">
      <h2 className="mt-2 text-sm">{stats.title}</h2>
      <div className="mt-2">
        <span className="text-4xl font-bold">{stats.value}</span>
        <span className="text-2xl">{stats.unit}</span>
      </div>

      {/* direction icon */}
      {stats.direction && (
        <div className="mt-2 flex">
          <div className="ms-2 text-slate-200">{stats.direction}</div>'
          <img src={Paperplane} style={arrowDirectionStyle} />
        </div>
      )}

      {/* Render humidity bar if title is "Humidity" */}
      {stats.title === "Humidity" && (
        <>
          <div className="mb-1 text-base font-medium dark:text-white"></div>
          <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 mt-4 dark:bg-gray-700">
            <div
              className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-600"
              style={{ width: `${stats.value}%` }} // Adjusted to render the progress based on value
            ></div>
          </div>
        </>
      )}
    </div>
  );
}

export default Highlights;
