import React from "react";
import Image from "next/image";
import { Anime } from "@/types";
import Link from "next/link";
import { useQuery } from "@apollo/client";
import { GET_ANIME_DETAILS } from "@/graphql/queries";
import { GET_ANIME_LIST } from "@/graphql/queries";

interface CardProps {
  anime: Anime;
}

const Card: React.FC<CardProps> = ({ anime }) => {
  return (
    <div className="col-span-1 md:col-span-1 mb-6 md:mb-0">
      <div className="shadow-md rounded-lg overflow-hidden bg-[#fff] h-full transition duration-300 hover:shadow-2xl">
        <Image
          src={anime.coverImage.large}
          width={150}
          height={100}
          alt={anime.title.romaji}
          rel="preload"
          quality={100}
          className="mx-auto mt-6"
        />
        <div className="p-4">
          <h5 className="text-xl font-semibold text-center">
            {anime.title.english || anime.title.romaji}
          </h5>
          <div className="flex justify-around mt-6">
            <Link
              href={`/detail/${anime.id}`}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded inline-block">
              Detail
            </Link>
            <button className="bg-[#1a6068] hover:bg-[#144b51] text-white font-semibold px-4 py-2 rounded">
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
