import React from "react";

export default function Steps() {
  return (
    <div className="mb-8 mt-8 md:mt-0 md:mb-40 shadow-sm sticky top-0 z-50">
      <div>
        <ol className="grid grid-cols-1 divide-x divide-gray-100 overflow-hidden rounded-lg border border-gray-100 text-sm text-gray-500 sm:grid-cols-3">
          <a href="#intro">
            <li className="flex md:items-center md:justify-center p-4 bg-white">
              <p className="leading-none">
                <strong className="block font-black"> The Intro </strong>
                <small className="mt-1">
                  {" "}
                  A brief introduction to Real World Assets{" "}
                </small>
              </p>
            </li>
          </a>

          <a href="#watch">
            <li className="relative flex md:items-center md:justify-center bg-gray-200 p-4">
              <span className="absolute -left-2 top-1/2 hidden h-4 w-4 -translate-y-1/2 rotate-45 border border-b-0 border-l-0 border-gray-100 bg-white sm:block"></span>

              <span className="absolute -right-2 top-1/2 hidden h-4 w-4 -translate-y-1/2 rotate-45 border border-b-0 border-l-0 border-gray-100 bg-gray-200 sm:block"></span>

              <p className="leading-none">
                <strong className="block font-black"> The Follow List </strong>
                <small className="mt-1">
                  {" "}
                  An explanding list of bulders and movers to watch{" "}
                </small>
              </p>
            </li>
          </a>

          <a href="#read">
            {" "}
            <li className="flex md:items-center md:justify-center p-4 bg-white">
              <p className="leading-none">
                <strong className="block font-black"> The Read List </strong>
                <small className="mt-1">
                  {" "}
                  Content we're consuming and you should too.{" "}
                </small>
              </p>
            </li>
          </a>
        </ol>
      </div>
    </div>
  );
}
