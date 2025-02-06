import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Reservations() {
  const token = useSelector((state) => state.auth.token); // Get token from Redux store
  const [reservations, setReservations] = useState([]); // Initialize state for reservations

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        // Make the fetch request to the backend
        const response = await fetch(
          "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/reservations",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`, // Pass the token for authentication
            },
          }
        );

        // Parse the response to JSON
        const data = await response.json();
        console.log("Reservations Data:", data); // Log the response for inspection

        // Check if the returned data has a valid array of reservations
        if (Array.isArray(data.reservation)) {
          setReservations(data.reservation); // Update state with reservations
        } else {
          throw new Error(
            "The data returned does not contain an array of reservations"
          );
        }
      } catch (error) {
        console.error("Error fetching reservations:", error); // Log errors to the console
      }
    };

    // Only fetch reservations if the token is available
    if (token) {
      fetchReservations();
    }
  }, [token]); // Re-fetch when the token changes

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Your Reservations</h2>

      {/* Check if there are no reservations */}
      {reservations.length === 0 ? (
        <p>No reservations found.</p>
      ) : (
        <ul className="list-group">
          {/* Map through reservations and display each one */}
          {reservations.map((reservation) => (
            <li key={reservation.id} className="list-group-item">
              <h5>{reservation.title}</h5>
              <p>Author: {reservation.author}</p>
              <p>{reservation.description}</p>
              <img
                src={reservation.coverimage}
                alt={reservation.title}
                width="100"
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Reservations;
