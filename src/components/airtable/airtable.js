import React from "react";

export default function Airtable({ content }) {
  return (
    <div id="watch" className="max-w-3xl mx-auto px-6 pt-6 lg:px-8">
      <h2 className="text-6xl font-black text-center">
        The Fortnighly Follow List
      </h2>
      <iframe
        class="airtable-embed"
        src="https://airtable.com/embed/shrh46xBuwgockreh?backgroundColor=blue&viewControls=on"
        frameborder="0"
        onmousewheel=""
        width="100%"
        height="533"
        style="background: transparent; border: 1px solid #ccc;"
      ></iframe>
    </div>
  );
}
