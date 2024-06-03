/*
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
*/

import React from "react";

// interface PaginationProps {
//   totalPages: number;
//   currentPage: number;
//   onPageChange: (page: number) => void;
//   style?: React.CSSProperties;
// }

// const Pagination: React.FC<PaginationProps> = ({
//   totalPages,
//   currentPage,
//   onPageChange,
//   style,
// }) => {
//   const getPageNumbers = () => {
//     const adjacentPages = 2;
//     const pageNumbers = [];
//     let startPage = Math.max(1, currentPage - adjacentPages);
//     let endPage = Math.min(totalPages, currentPage + adjacentPages);

//     // Adjust startPage and endPage if currentPage is close to the first or last page
//     if (currentPage <= adjacentPages) {
//       endPage = Math.min(totalPages, adjacentPages * 2 + 1);
//     } else if (currentPage >= totalPages - adjacentPages) {
//       startPage = Math.max(1, totalPages - adjacentPages * 2);
//     }

//     for (let page = startPage; page <= endPage; page++) {
//       pageNumbers.push(page);
//     }

//     return pageNumbers;
//   };

//   return (
//     <div className="flex justify-center space-x-2 mt-4" style={style}>
//       <button
//         disabled={currentPage === 1}
//         onClick={() => onPageChange(1)}
//         className="py-2 px-4 my-4 rounded-lg bg-blue-500 text-white disabled:bg-gray-300 disabled:text-gray-500">
//         {"<<"}
//       </button>
//       <button
//         disabled={currentPage === 1}
//         onClick={() => onPageChange(currentPage - 1)}
//         className="py-2 px-4 my-4 rounded-lg bg-blue-500 text-white disabled:bg-gray-300 disabled:text-gray-500">
//         {"<"}
//       </button>
//       {getPageNumbers().map((page) => (
//         <button
//           key={page}
//           onClick={() => onPageChange(page)}
//           className={`py-2 px-4 my-4 rounded-lg bg-blue-500 text-white ${
//             page === currentPage
//               ? "bg-gray-300 text-gray-500"
//               : "hover:bg-gray-300 hover:text-gray-500"
//           }`}>
//           {page}
//         </button>
//       ))}
//       <button
//         disabled={currentPage === totalPages}
//         onClick={() => onPageChange(currentPage + 1)}
//         className="py-2 px-4 my-4 rounded-lg bg-blue-500 text-white disabled:bg-gray-300 disabled:text-gray-500">
//         {">"}
//       </button>
//       <button
//         disabled={currentPage === totalPages}
//         onClick={() => onPageChange(totalPages)}
//         className="py-2 px-4 my-4 rounded-lg bg-blue-500 text-white disabled:bg-gray-300 disabled:text-gray-500">
//         {">>"}
//       </button>
//     </div>
//   );
// };

// export default Pagination;

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}
const PaginationCustom: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
  setCurrentPage,
}) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    onPageChange(page);
    setCurrentPage(page);
  };

  return (
    <Stack
      spacing={2}
      direction={isSmallScreen ? "column" : "row"}
      justifyContent={isSmallScreen ? "center" : "flex-start"}
      alignItems="center">
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
        showFirstButton
        showLastButton
        color="primary"
      />
    </Stack>
  );
};

export default PaginationCustom;
