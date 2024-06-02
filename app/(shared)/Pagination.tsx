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
  // Generate an array of page numbers
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center space-x-2 mt-4">
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`py-2 px-4 mb-8 rounded-full ${
            page === currentPage
              ? "bg-red-600 text-[#fff]"
              : "bg-slate-600 text-[#fff]"
          }`}>
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
