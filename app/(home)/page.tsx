// pages/index.tsx
"use client";
/*
"use client";

import React, { useEffect, useState } from "react";
import Card from "../_components/Card";
import Pagination from "../(shared)/Pagination";
import Banner from "../_components/Banner";
import { Anime } from "@/types";
import { fetchAllAnime } from "@/utils/fetchAllAnime";

const Home: React.FC = () => {
  const [animeList, setAnimeList] = useState<Anime[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  useEffect(() => {
    const loadAnime = async () => {
      const allAnime = await fetchAllAnime();
      setAnimeList(allAnime);
    };
    loadAnime();
  }, []);

  const totalPages = Math.ceil(animeList.length / itemsPerPage);

  const paginatedAnimeList = animeList.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Banner />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-8 mx-4 lg:mx-8 gap-4">
        {paginatedAnimeList.map((anime: Anime) => (
          <Card key={anime.id} anime={anime} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Home;
*/

// import React, { useState } from "react";
// import Card from "../_components/Card";
// import Pagination from "../(shared)/Pagination";
// import { useQuery } from "@apollo/client";
// import { GET_ANIME_LIST } from "@/graphql/queries";
// import Banner from "../_components/Banner";

// const Home: React.FC = () => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const { loading, data, error } = useQuery(GET_ANIME_LIST);

//   // console.log(data, "<==");

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error || !data) {
//     return <div>Error: {error ? error.message : "Data not available"}</div>;
//   }

//   const animeList: Anime[] = data.Page.media;

//   const totalPages = Math.ceil(animeList.length / 12);

//   const paginatedAnimeList = animeList.slice(
//     (currentPage - 1) * 12,
//     currentPage * 12
//   );

//   const handlePageChange = (page: number) => {
//     setCurrentPage(page);
//   };

//   return (
//     <div>
//       <Banner />
//       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-8 mx-4 lg:mx-8 gap-4">
//         {paginatedAnimeList.map((anime: Anime) => (
//           <Card key={anime.id} anime={anime} />
//         ))}
//       </div>
//       <Pagination
//         currentPage={currentPage}
//         totalPages={totalPages}
//         onPageChange={handlePageChange}
//       />
//     </div>
//   );
// };

// export default Home;

// pages/index.tsx

import React, { useEffect, useState } from "react";
import Card from "../_components/Card";
import PaginationCustom from "../(shared)/Pagination";
import { fetchShows } from "@/utils/fetchAllAnime";
import Banner from "../_components/Banner";
import { Show } from "@/types";
import Stack from "@mui/material/Stack";

const Home: React.FC = () => {
  const [animeList, setAnimeList] = useState<Show[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalItems, setTotalItems] = useState<number>(0);
  const itemsPerPage = 10;

  useEffect(() => {
    const loadAnime = async () => {
      try {
        const allAnime = await fetchShows({ currentPage });
        console.log(allAnime.pageInfo, "<===");
        if (allAnime.shows) {
          setAnimeList(allAnime.shows);
          setTotalItems(allAnime.pageInfo?.total ?? 0);
        } else {
          console.error("No shows found.");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    loadAnime();
  }, [currentPage]);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Banner />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-8 mx-4 lg:mx-8 gap-4">
        {animeList.map((anime: Show) => (
          <Card key={anime.id} anime={anime} />
        ))}
      </div>
      <Stack spacing={2} alignItems="center" marginY={4}>
        <PaginationCustom
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          setCurrentPage={setCurrentPage} // Pass setCurrentPage to PaginationCustom
        />
      </Stack>
    </div>
  );
};

export default Home;
