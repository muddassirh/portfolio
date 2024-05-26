import React from "react";

const Wrapper = ({ children }) => {
  return (
    <div className="max-w-[1280px] w-full mx-auto text-bold py-[50px] px-5">
      {children}
    </div>
  );
};

export default Wrapper;
