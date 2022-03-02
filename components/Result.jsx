import React from 'react';
import Thumbnail from './Thumbnail';

function Result({ results }) {
  return (
    <div className=" m-5 sm:grid md:grid-cols-2 xl:grid-cols-3 ">
      {results.map((result) => {
        {
          return <Thumbnail key={result.id} result={result} />;
        }
      })}
    </div>
  );
}

export default Result;
