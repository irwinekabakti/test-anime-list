"use client";
import { gql } from "@apollo/client";

const GET_ANIME_LIST = gql`
  query GetAnimeList($perPage: Int, $page: Int) {
    Page(perPage: $perPage, page: $page) {
      media(type: ANIME) {
        id
        title {
          romaji
          english
          native
        }
        coverImage {
          medium
          large
        }
      }
    }
  }
`;

export { GET_ANIME_LIST };
