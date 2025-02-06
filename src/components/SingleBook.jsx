// /* TODO - add your code to create a functional React component that renders details for a single book.
// Fetch the book data from the provided API.
// You may consider conditionally rendering a 'Checkout' button for logged in users. */
import React from "react";
import { useParams } from "react-router-dom";
import { useGetBookByIdQuery } from "../services/api";
import { useDispatch } from "react-redux";
import { useUpdateBookAvailabilityMutation } from "../services/api";

function SingleBook() {
  const { id } = useParams();
  const { data: book, error, isLoading } = useGetBookByIdQuery(id);
  const [updateBookAvailability] = useUpdateBookAvailabilityMutation();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading book details.</div>;

  const handleCheckout = async () => {
    try {
      await updateBookAvailability({
        bookId: book.id,
        available: !book.available,
      });
    } catch (err) {
      console.error("Error updating book availability:", err);
    }
  };

  return (
    <div>
      <h2>{book.title}</h2>
      <p>{book.author}</p>
      <p>{book.description}</p>
      <img
        src={book.coverimage}
        alt={book.title}
        style={{ maxWidth: "200px" }}
      />
      <p>Status: {book.available ? "Available" : "Checked Out"}</p>
      <button onClick={handleCheckout}>
        {book.available ? "Check Out" : "Return Book"}
      </button>
    </div>
  );
}

export default SingleBook;
// 2-6 starting point
// import React from "react";
// import { useParams } from "react-router-dom";
// import { useGetBookByIdQuery } from "../services/api";

// function SingleBook() {
//   const { id } = useParams();
//   const { data: book, error, isLoading } = useGetBookByIdQuery(id);

//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>Error loading book details.</div>;

//   return (
//     <div>
//       <h2>{book.title}</h2>
//       <p>{book.author}</p>
//       <p>{book.description}</p>
//       {/* Optionally add checkout button if logged in */}
//     </div>
//   );
// }

// export default SingleBook;

// import React from "react";
// import { useParams } from "react-router-dom";

// function SingleBook() {
//   const { id } = useParams(); // Get the book id from URL

//   // Fetch book details from API or Redux based on the id
//   // For simplicity, you can display the book ID here.
//   return (
//     <div>
//       <h2>Book Details</h2>
//       <p>Book ID: {id}</p>
//       {/* You can add more details like title, author, etc. here */}
//     </div>
//   );
// }

// export default SingleBook;
