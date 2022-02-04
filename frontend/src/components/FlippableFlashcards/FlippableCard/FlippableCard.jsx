import React from "react";

const FlippableCard = () => {
  const flipped = true;
  return flipped ? <div>front</div> : <div>back</div>;
};

export default FlippableCard;
