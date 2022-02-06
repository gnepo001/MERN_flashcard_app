import React from "react";
import FlippableCard from "./FlippableCard/FlippableCard";

import { useSelector } from "react-redux";

const FlippableFlashcards = () => {
  //fetching posts from state
  const items = useSelector((state) => state.posts);

  return (
    <div>
      {items.map((item) => (
        <FlippableCard key={item._id} item={item} />
      ))}
    </div>
  );
};

export default FlippableFlashcards;
