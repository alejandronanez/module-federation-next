import React from 'react';

const Navigation = ({ children }) => {
  return (
    <div className="bg-gray-200 py-3 px-2">
      <div className="max-w-5xl items-center m-auto flex justify-between content-center">
        <strong className="text-gray-900 text-2xl">Global Navigation</strong>
        <ul className="grid grid-flow-col col-gap-4">
          <li>
            <a
              className="bg-teal-500 inline-block text-teal-100 rounded-md font-bold p-3"
              href="http://localhost:3002"
            >
              Back to homepage 🏠
            </a>
          </li>
          <li>
            <a
              className="bg-teal-500 inline-block text-teal-100 rounded-md font-bold p-3"
              href="http://localhost:3002"
            >
              View jobs 👩‍🚀
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
