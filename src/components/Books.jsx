// /* TODO - add your code to create a functional React component that displays all of the available books in the library's catalog.
// Fetch the book data from the provided API.
// Users should be able to click on an individual book to navigate to the SingleBook component and view its details. */
import React, { useEffect, useState } from "react";
import { useGetBooksQuery } from "../services/api";
import { Link } from "react-router-dom";

const Books = () => {
  const { data, error, isLoading } = useGetBooksQuery();
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (data?.books) {
      setBooks(data.books);
    }
  }, [data]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredBooks = books.filter((book) => {
    const lowerSearchTerm = searchTerm.toLowerCase();
    return (
      book.title.toLowerCase().includes(lowerSearchTerm) ||
      book.author.toLowerCase().includes(lowerSearchTerm) ||
      book.description.toLowerCase().includes(lowerSearchTerm)
    );
  });

  if (isLoading) {
    return <p>Loading books...</p>;
  }

  if (error) {
    return <p>Error loading books.</p>;
  }

  return (
    <div>
      <h2>Books Available</h2>

      {/* Search input field */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search books..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="form-control"
        />
      </div>

      {/* Check if filtered books are empty */}
      {filteredBooks.length === 0 ? (
        <p>No books found matching your search.</p>
      ) : (
        filteredBooks.map((book) => (
          <div key={book.id}>
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <p>{book.description}</p>
            <img src={book.coverimage} alt={book.title} width="100" />
            <p>Status: {book.available ? "Available" : "Checked Out"}</p>
            <button
              onClick={() => handleToggleAvailability(book.id, book.available)}
            >
              {book.available ? "Check Out" : "Return"}
            </button>
            <Link to={`/books/${book.id}`}>View Details</Link>
          </div>
        ))
      )}
    </div>
  );
};

export default Books;
// 2nd edit KEEP
// import React, { useEffect, useState } from "react";
// import { useGetBooksQuery } from "../services/api"; // Assuming you're using redux toolkit
// import { Link } from "react-router-dom";

// const Books = () => {
//   const { data, error, isLoading } = useGetBooksQuery(); // Query to fetch books
//   const [books, setBooks] = useState([]);

//   // Function to get the token from localStorage
//   const getToken = () => localStorage.getItem("token");

//   useEffect(() => {
//     if (error) {
//       console.error("Error fetching books:", error);
//     }
//     console.log("Books data: ", data); // Log the full response
//   }, [error, data]);

//   useEffect(() => {
//     if (data?.books) {
//       setBooks(data.books); // Set the books data to state when it loads
//     }
//   }, [data]);

//   const handleToggleAvailability = async (bookId, currentAvailability) => {
//     const token = getToken();

//     // Token check before proceeding
//     if (!token) {
//       console.error("No token found. Please log in.");
//       return; // Prevent further execution if the token is missing.
//     }

//     console.log("Sending token:", token); // Log the token being sent

//     try {
//       const response = await fetch(
//         `https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${bookId}`,
//         {
//           method: "PATCH",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//           body: JSON.stringify({
//             available: !currentAvailability, // Toggle the availability
//           }),
//         }
//       );

//       const result = await response.json();
//       console.log("Updated book:", result); // Log the full response to inspect the format

//       // Check if the response contains a book object
//       if (result?.book?.id) {
//         setBooks((prevBooks) =>
//           prevBooks.map((book) =>
//             book.id === result.book.id
//               ? { ...book, available: result.book.available }
//               : book
//           )
//         );
//       } else {
//         // If the result doesn't contain the expected data, log and handle the error
//         console.error("Failed to update book availability: ", result);
//       }
//     } catch (error) {
//       console.error("Error updating book:", error);
//     }
//   };

//   if (isLoading) {
//     return <p>Loading books...</p>;
//   }

//   if (error) {
//     return <p>Error loading books.</p>;
//   }

//   if (books.length === 0) {
//     return <p>No books available.</p>;
//   }

//   return (
//     <div>
//       <h2>Books Available</h2>
//       {books.map((book) => (
//         <div key={book.id}>
//           <h3>{book.title}</h3>
//           <p>{book.author}</p>
//           <p>{book.description}</p>
//           <img src={book.coverimage} alt={book.title} width="100" />
//           <p>Status: {book.available ? "Available" : "Checked Out"}</p>
//           <button
//             onClick={() => handleToggleAvailability(book.id, book.available)}
//           >
//             {book.available ? "Check Out" : "Return"}
//           </button>
//           <Link to={`/books/${book.id}`}>View Details</Link>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Books;
