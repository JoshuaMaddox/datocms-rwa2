import React from "react";

export default function Airtable({ content }) {
  return (
    <div id="watch" className="max-w-3xl mx-auto px-6 pt-6 lg:px-8">
      <h2 className="text-6xl font-black text-center">The Follow List</h2>
      <iframe
        className="airtable-embed mt-12 mb-12"
        src="https://airtable.com/embed/shrJP6fPdWXPZ8BTi?backgroundColor=blue&viewControls=on"
        frameborder="0"
        onmousewheel=""
        width="100%"
        height="533"
      ></iframe>
    </div>
  );
}
