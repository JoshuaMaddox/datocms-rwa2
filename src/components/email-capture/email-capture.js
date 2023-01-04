import React, { useState } from "react";
import axios from "axios";

function EmailCaptureForm({ show, setShowEmailCapturePopup }) {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleClosePopUp = () => {
    setShowEmailCapturePopup(false);
    setShowSuccess(false);
    setShowError(false);
    setFirstName("");
    setLastName("");
    setEmail("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let response;
    try {
      response = await axios.post(
        "https://api.sendinblue.com/v3/contacts",
        {
          updateEnabled: false,
          email: email,
          attributes: { FIRSTNAME: firstName, LASTNAME: lastName },
        },
        {
          headers: {
            "Content-Type": "application/json",
            "api-key": process.env.GATSBY_SENDINBLUE_API_KEY,
          },
        }
      );
      setShowSuccess(true);
    } catch (e) {
      console.log(e);
      setShowSuccess(true);
      setShowError(true);
    } finally {
      console.log("DOES THIS FIRE EITHER WAY?");
    }
  };

  return (
    <>
      {showSuccess ? (
        <section
          className={`${
            show ? "visible" : "invisible"
          } bg-slate-50 z-80 drop-shadow-md place-content-center top-0 left-0 border-solid absolute flex flex-wrap w-screen h-screen`}
        >
          <button
            onClick={() => handleClosePopUp()}
            className="absolute top-10 right-10 rounded-lg bg-slate-800 px-4 py-1 text-sm font-medium text-white"
          >
            CLOSE
          </button>
          <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-full lg:px-8 lg:py-24">
            <div className="mx-auto max-w-lg text-center">
              {showError ? (
                <>
                  <h1 className="text-4xl font-black sm:text-6xl">
                    Yikes! Something Has Gone Wrong.
                  </h1>
                  <p className="mt-4 text-gray-500">
                    Try closing this popup and trying again. If that doesn't
                    work, send an email to help@rwa.fyi and we'll get you
                    sorted.
                  </p>
                </>
              ) : (
                <>
                  <h1 className="text-4xl font-black sm:text-6xl">Success!</h1>
                  <p className="mt-4 text-gray-500">
                    You have successfully subscribed to the complete guide to
                    Real-World Assets. If you don't receive an email within 24
                    hours, please check your spam folder or contact us at
                    help@rwa.fyi
                  </p>
                </>
              )}
            </div>
          </div>
        </section>
      ) : (
        <section
          className={`${
            show ? "visible" : "invisible"
          } bg-slate-50 z-60 drop-shadow-md place-content-center top-0 left-0 border-solid w-screen h-screen absolute flex flex-wrap`}
        >
          <button
            onClick={() => setShowEmailCapturePopup(false)}
            className="absolute top-10 right-10 rounded-lg bg-slate-800 px-4 py-1 text-sm font-medium text-white"
          >
            Close
          </button>
          <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-full lg:px-8 lg:py-24">
            <div className="mx-auto max-w-lg text-center">
              <h1 className="text-4xl font-black sm:text-6xl">
                Get The Weekly Guide
              </h1>

              <p className="mt-4 text-gray-500">
                The guide to Real-World Assets is an ongoing exploration that is
                updated weekly. Sign up to get the current guide and the latest
                updates.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              action=""
              className="mx-auto mt-8 mb-0 max-w-md space-y-4"
            >
              <div>
                <label for="First Name" className="sr-only">
                  First Name
                </label>
                <div className="relative">
                  <input
                    onChange={(event) => setFirstName(event.target.value)}
                    type="text"
                    className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                    placeholder="Your First Name"
                  />
                </div>
              </div>
              <div>
                <label for="Last Name" className="sr-only">
                  Last Name
                </label>
                <div className="relative">
                  <input
                    onChange={(event) => setLastName(event.target.value)}
                    type="text"
                    className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                    placeholder="Your Last Name"
                  />
                </div>
              </div>
              <div>
                <label for="email" className="sr-only">
                  Email
                </label>

                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="Enter your email"
                    className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                  />
                </div>
              </div>

              <div className="flex items-center">
                <button
                  type="submit"
                  className="rounded-lg px-5 py-3 text-sm font-medium bg-blue-700 text-white shadow-sm ring-1 ring-blue-700 hover:bg-blue-700 hover:ring-blue-700"
                >
                  Get The Guide
                </button>
              </div>
            </form>
          </div>
        </section>
      )}
    </>
  );
}

export default EmailCaptureForm;
