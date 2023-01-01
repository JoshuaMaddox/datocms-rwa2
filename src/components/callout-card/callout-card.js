import React, { useState } from "react";

const CalloutCard = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="w-full h-full">
      <div className="w-full h-full rounded-lg shadow-lg bg-white overflow-hidden">
        <div className="px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold">Title</div>
          <button
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
            className="btn btn-blue flex items-center justify-center h-10 w-32 rounded-full"
          >
            Toggle Drawer
          </button>
        </div>
        <div className="px-6 py-4 text-gray-700 text-sm font-bold">
          Subtitle
        </div>
        {isDrawerOpen && (
          <div
            className="w-full h-24 bg-gray-100 rounded-b-lg shadow-lg animate-fade-slow"
            style={{ transform: "translateY(0)" }}
          >
            Drawer Content
          </div>
        )}
      </div>
    </div>
  );
};

export default CalloutCard;
