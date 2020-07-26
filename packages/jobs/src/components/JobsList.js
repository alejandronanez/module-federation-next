import React from 'react';
import GenericJob from './GenericJob';

const jobs = [
  { title: 'Job #1' },
  { title: 'Job #2' },
  { title: 'Job #3' },
  { title: 'Job #4' },
  { title: 'Job #5' },
  { title: 'Job #6' },
  { title: 'Job #7' },
  { title: 'Job #8' },
  { title: 'Job #9' },
  { title: 'Job #10' },
];

const JobsList = () => {
  return (
    <ul className="grid grid-cols-2 gap-5 mt-4">
      {jobs.map((job) => (
        <li>
          <GenericJob key={job.title} title={job.title} />
        </li>
      ))}
    </ul>
  );
};

export default JobsList;
