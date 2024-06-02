import React from "react";
import Image from "next/image";
import { Show } from "@/types";
import Link from "next/link";

interface AnimeCardProps {
  anime: Show;
}
const Card: React.FC<AnimeCardProps> = ({ anime }) => {
  return (
    <div className="col-span-1 md:col-span-1 mb-6 md:mb-0">
      <div className="shadow-md rounded-lg overflow-hidden bg-[#fff] h-full transition duration-300 hover:shadow-2xl">
        <Image
          src={anime.coverImage.extraLarge}
          width={150}
          height={100}
          alt={anime.title.romaji}
          rel="preload"
          quality={100}
          className="mx-auto mt-6"
        />
        <div className="p-4">
          <h5 className="text-xl font-semibold text-center">
            {anime.title.romaji}
          </h5>
          <div className="grid grid-cols-1 md:grid-cols-2 mt-6 gap-2 md:gap-4">
            <Link
              href={`/detail/${anime.id}`}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold text-center px-4 py-2 rounded">
              Detail
            </Link>
            <button className="bg-[#1a6068] hover:bg-[#144b51] text-white font-semibold text-center px-4 py-2 rounded">
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
