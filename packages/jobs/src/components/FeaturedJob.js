import React from 'react';

const FeaturedJob = () => {
  const [count, setCount] = React.useState(0);
  return (
    <div className="flex bg-yellow-200 justify-center border-dotted border-4 p-6 text-yellow-900">
      <div>
        <h2 className="underline font-bold text-xl mb-2">Featured Job</h2>
        <p>
          Commodo adipisicing id pariatur est eu. Labore eiusmod mollit elit
          laborum. Officia in proident tempor pariatur esse sit duis deserunt
          deserunt et excepteur. Quis consequat ea adipisicing est sit id veniam
          consequat adipisicing sint ad commodo. Enim adipisicing anim fugiat
          veniam duis ut ipsum cillum veniam veniam ullamco fugiat.
        </p>
        <a
          className="bg-yellow-700 text-yellow-100 py-2 px-4 mt-2 rounded-lg text-lg inline-block"
          href="https://zapier.com/jobs"
        >
          Apply here
        </a>
        <br />
        {/* <button onClick={() => setCount(count + 1)}>
          Increase Count: {count}
        </button> */}
      </div>
    </div>
  );
};

export default FeaturedJob;
