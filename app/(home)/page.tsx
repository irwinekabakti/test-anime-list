"use client";

import React, { useState } from "react";
import Card from "../_components/Card";
import Pagination from "../(shared)/Pagination";
import { useQuery } from "@apollo/client";
import { GET_ANIME_LIST } from "@/graphql/queries";
import { Anime } from "@/types";

const Home: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { loading, data, error } = useQuery(GET_ANIME_LIST);

  console.log(data, "<==");

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>Error: {error ? error.message : "Data not available"}</div>;
  }

  const animeList: Anime[] = data.Page.media;

  const totalPages = Math.ceil(animeList.length / 12); // Calculate total pages

  // Slice animeList to display items for the current page
  const paginatedAnimeList = animeList.slice(
    (currentPage - 1) * 12,
    currentPage * 12
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
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
