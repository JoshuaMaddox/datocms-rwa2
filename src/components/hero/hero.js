/* This example requires Tailwind CSS v3.0+ */
import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import EmailCaptureForm from "../email-capture/email-capture";

export default function Hero() {
  const [showEmailCapturePopup, setShowEmailCapturePopup] = useState(false);

  return (
    <div className="isolate  bg-white z-60">
      <div className="px-6 pt-6 lg:px-8">
        <div>
          <nav
            className="flex h-9 items-center justify-between"
            aria-label="Global"
          >
            <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
              <a href="#" className="-m-1.5 p-1.5">
                <p>Real-World Assets</p>
              </a>
            </div>
            <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
              <a
                href="#"
                onClick={() => setShowEmailCapturePopup(true)}
                className="inline-block rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20"
              >
                Get The Fortnightly Exploration
              </a>
            </div>
          </nav>
        </div>
      </div>
      <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-5xl pt-8 pb-8 sm:pt-32 sm:pb-40">
            <div>
              <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                <div className="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                  <span className="text-gray-600">
                    Exclusive Content, Announcements, and Events.{" "}
                    <a
                      href="#"
                      onClick={() => setShowEmailCapturePopup(true)}
                      className="font-semibold text-blue-700"
                    >
                      <span className="absolute inset-0" aria-hidden="true" />
                      Get The Fortnightly Email{" "}
                      <span aria-hidden="true">&rarr;</span>
                    </a>
                  </span>
                </div>
              </div>
              <div>
                <h1 className="text-4xl font-black tracking-tight sm:text-center sm:text-7xl">
                  Your Fortnightly Guide to RWAs???Real-World Assets.
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
                  There is a race to dislodge intermediaries and prove
                  efficiencies surrounding hundreds of trillions of dollars of
                  traditional assets through technological and regulatory
                  breakthroughs. From digitization, tokenization, and
                  decentralization to automated administration and compliance,
                  join us in an ongoing exploration of problems-to-be-solved and
                  emerging solutions around real-world Assets???RWAs???and their
                  emerging role in DeFi and debt markets.
                </p>
                <div className="mt-8 flex gap-x-4 sm:justify-center">
                  <button
                    href="#"
                    onClick={() => setShowEmailCapturePopup(true)}
                    className="inline-block rounded-lg bg-blue-700 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-blue-700 hover:bg-blue-700 hover:ring-blue-700"
                  >
                    Updates In Your Inbox
                    <span className="text-indigo-200" aria-hidden="true">
                      &rarr;
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <EmailCaptureForm
        show={showEmailCapturePopup}
        setShowEmailCapturePopup={setShowEmailCapturePopup}
      />
    </div>
  );
}
