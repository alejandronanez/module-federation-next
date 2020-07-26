import React from 'react';

const GenericJob = ({ title }) => {
  return (
    <div className="flex bg-gray-100 justify-center border-dotted border-4 p-6 text-gray-900">
      <div>
        <h2 className="underline font-bold text-xl mb-2">{title}</h2>
        <p>
          Commodo adipisicing id pariatur est eu. Labore eiusmod mollit elit
          laborum. Officia in proident tempor pariatur esse sit duis deserunt
          deserunt et excepteur. Quis consequat ea adipisicing est sit id veniam
          consequat adipisicing sint ad commodo. Enim adipisicing anim fugiat
          veniam duis ut ipsum cillum veniam veniam ullamco fugiat.
        </p>
        <a
          className="bg-gray-700 text-gray-100 py-2 px-4 mt-2 rounded-lg text-lg inline-block"
          href="https://zapier.com/jobs"
        >
          Apply here
        </a>
      </div>
    </div>
  );
};

export default GenericJob;
