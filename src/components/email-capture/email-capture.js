import React, { useState } from "react";

function EmailCaptureForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // submit the email to your backend or email list service here
  };

  return (
    <section className="mx-auto mt-8 mb-8">
      <form
        onSubmit={handleSubmit}
        className="mx-auto bg-slate-900 px-6 py-8 shadow-md rounded-md bg-white flex items-center"
      >
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter your email"
          className="w-full border-2 border-gray-300 rounded-md px-3 py-2 mr-4"
        />
        <button
          type="submit"
          className="w-1/3 bg-blue-500 rounded-md px-4 py-2 text-white"
        >
          Sign Up
        </button>
      </form>
    </section>
  );
}

export default EmailCaptureForm;
