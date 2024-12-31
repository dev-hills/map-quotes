import React from 'react'
import { ClipLoader } from 'react-spinners';

const Loader = () => {
  return (
    <div className="w-[100%] flex items-center justify-center">
      <ClipLoader
        color="#175CFF"
        cssOverride={{
          borderWidth: "5px",
        }}
        size={46}
        speedMultiplier={0.6}
      />
    </div>
  );
}

export default Loader