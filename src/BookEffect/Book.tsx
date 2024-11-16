import React, { useState } from "react";
import "./Book.css";

type BookProps = {
  bookWidth: number;
  bookHeight: number;
};

const Book = ({ bookWidth, bookHeight }: BookProps) => {
  const [currPage, setCurrPage] = useState(0);
  const pages = Array.from({ length: 10 }, (_, index) => ({
    id: index,
    color: `hsl(${index * 36}, 70%, 80%)`,
  }));

  const nextPage = () => {
    if (currPage < pages.length - 1) {
      setCurrPage(currPage + 1);
    }
  };

  const prevPage = () => {
    if (currPage > 0) {
      setCurrPage(currPage - 1);
    }
  };

  return (
    <div className="book-container">
      <button onClick={prevPage} disabled={currPage === 0}>
        Prev
      </button>
      <button onClick={nextPage} disabled={currPage === pages.length - 1}>
        Next
      </button>
      <div
        className="book"
        style={{
          width: bookWidth,
          height: bookHeight,
          position: "relative",
          perspective: "2000px", // Set a larger perspective for more pronounced 3D effect
          margin: "auto",
        }}
      >
        {pages.map((page, index) => (
          <div
            key={page.id}
            className={`page ${index === currPage ? "active" : ""} ${
              index < currPage ? "flipped" : ""
            }`}
            style={{
              backgroundColor: page.color,
              zIndex: pages.length - index,
              width: bookWidth,
              height: bookHeight,
              position: "absolute",
              transformOrigin: "left center",
            }}
          >
            <p style={{ textAlign: "center", fontSize: "24px", color: "#000" }}>
              Page {index + 1}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Book;
