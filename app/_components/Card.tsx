"use client";

import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_ANIME_LIST } from "@/graphql/queries";
import Link from "next/link";
import { Anime } from "@/types";
import Pagination from "../(shared)/Pagination";

interface CardProps {
  page: number;
  onPageChange: (page: number) => void;
}

const Card: React.FC<CardProps> = ({ page }, { onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { loading, data, error, fetchMore } = useQuery(GET_ANIME_LIST, {
    variables: {
      perPage: 12,
      page: currentPage,
    },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>Error: {error ? error.message : "Data not available"}</div>;
  }

  const animeList: Anime[] = data.Page.media;

  return (
    <div className="card">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-8 mx-4 lg:mx-8 gap-4">
        {animeList.map((anime) => (
          <div key={anime.id} className="col-span-1 md:col-span-1 mb-6 md:mb-0">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src={anime.coverImage.medium} alt={anime.title.romaji} />
              <div className="p-4">
                <h5 className="text-xl font-semibold mb-2">
                  {anime.title.english || anime.title.romaji}
                </h5>
                <Link
                  href="#"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded inline-block">
                  Go somewhere
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Pagination
        totalPages={data.Page.pageInfo.lastPage}
        currentPage={page}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default Card;
