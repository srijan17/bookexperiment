import React, { useState } from 'react';
import './FlipBook.css';

interface FlipBookProps {
  pages: { front: React.ReactNode; back: React.ReactNode }[];
}

const FlipBook: React.FC<FlipBookProps> = ({ pages }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="flip-book">
      {pages.map((page, index) => (
        <div
          key={index}
          className={`page ${index < currentPage ? 'flipped' : ''}`}
          style={{
            zIndex: pages.length - index, // Ensure page stacking order
            transform: index < currentPage
              ? 'rotateY(-180deg)'
              : 'rotateY(0deg)',
          }}
        >
          <div className="page-front">{page.front}</div>
          <div className="page-back">{page.back}</div>
        </div>
      ))}
      <button className="prev-btn" onClick={prevPage}>Previous</button>
      <button className="next-btn" onClick={nextPage}>Next</button>
    </div>
  );
};

export default FlipBook;
