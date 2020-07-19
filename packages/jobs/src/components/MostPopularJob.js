import React from 'react';

const MostPopularJob = () => {
  return (
    <div className="flex justify-center border-dotted border-2 p-6">
      <div>
        <h2 className="underline font-bold text-xl mb-2">
          This is a really important job
        </h2>
        <p>
          Commodo adipisicing id pariatur est eu. Labore eiusmod mollit elit
          laborum. Officia in proident tempor pariatur esse sit duis deserunt
          deserunt et excepteur. Quis consequat ea adipisicing est sit id veniam
          consequat adipisicing sint ad commodo. Enim adipisicing anim fugiat
          veniam duis ut ipsum cillum veniam veniam ullamco fugiat.
        </p>
        <a
          className="bg-pink-600 text-pink-100 py-2 px-4 rounded-lg text-lg inline-block"
          href="https://zapier.com/jobs"
        >
          Apply here
        </a>
      </div>
    </div>
  );
};

export default MostPopularJob;
