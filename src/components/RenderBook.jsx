import React from "react";

const RenderBook = ({ book }) => {
  if (!book) return null;

  return (
    <div>
      <h1>{book.title}</h1>
      <p>{book.author}</p>
      <p>{book.description}</p>
      {}
    </div>
  );
};

export default RenderBook;
