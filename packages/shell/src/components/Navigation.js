import React from 'react';

const Navigation = ({ children }) => {
  return (
    <div className="bg-gray-200 py-3">
      <div className="m-auto max-w-5xl">
        <strong className="text-gray-700 text-xl">
          Federated Application / Navigation
        </strong>
      </div>
      <div className="m-auto max-w-5xl">
        <ul>
          <li>
            <a href="http://localhost:3001">Homepage</a>
          </li>
          <li>
            <a href="http://localhost:3002">Jobs</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
