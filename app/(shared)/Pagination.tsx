import React from "react";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  const displayPages = () => {
    const pages = [];
    const maxVisiblePages = 3;

    if (currentPage > 1) {
      pages.push(
        <button
          key="prev"
          onClick={() => onPageChange(currentPage - 1)}
          className="py-2 px-4 my-4 rounded-lg bg-gray-200 text-gray-700">
          {"<"}
        </button>
      );
    }

    for (
      let i = Math.max(1, currentPage - 1);
      i <= Math.min(currentPage + 1, totalPages);
      i++
    ) {
      pages.push(
        <button
          key={i}
          onClick={() => onPageChange(i)}
          className={`py-2 px-4 my-4 rounded-lg ${
            i === currentPage
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}>
          {i}
        </button>
      );
    }

    if (currentPage < totalPages) {
      pages.push(
        <button
          key="next"
          onClick={() => onPageChange(currentPage + 1)}
          className="py-2 px-4 my-4 rounded-lg bg-gray-200 text-gray-700">
          {">"}
        </button>
      );
    }

    return pages;
  };

  return (
    <div className="flex justify-center space-x-2 mt-4">{displayPages()}</div>
  );
};

export default Pagination;

/*
import React from "react";

interface CustomPaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const CustomPagination: React.FC<CustomPaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  const getPageNumbers = () => {
    const adjacentPages = 2;
    const pageNumbers = [];
    let startPage = Math.max(1, currentPage - adjacentPages);
    let endPage = Math.min(totalPages, currentPage + adjacentPages * 2);

    if (currentPage <= adjacentPages) {
      endPage = Math.min(totalPages, adjacentPages * 2 + 1);
    } else if (currentPage >= totalPages - adjacentPages) {
      startPage = Math.max(1, totalPages - adjacentPages * 2);
    }

    for (let page = startPage; page <= endPage; page++) {
      pageNumbers.push(page);
    }

    return pageNumbers;
  };

  return (
    <div className="flex justify-center space-x-2 mt-4">
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="py-2 px-4 my-4 rounded-lg bg-blue-500 text-white disabled:bg-gray-300 disabled:text-gray-500">
        {"<"}
      </button>
      {getPageNumbers().map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`py-2 px-4 my-4 rounded-lg bg-blue-500 text-white ${
            page === currentPage
              ? "bg-gray-300 text-gray-500"
              : "hover:bg-gray-300 hover:text-gray-500"
          }`}>
          {page}
        </button>
      ))}

      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="py-2 px-4 my-4 rounded-lg bg-blue-500 text-white disabled:bg-gray-300 disabled:text-gray-500">
        {">"}
      </button>
    </div>
  );
};

export default CustomPagination;
*/
