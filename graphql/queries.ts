import { gql } from "@apollo/client";

const GET_ANIME_LIST = gql`
  query GetAnimeList($perPage: Int, $page: Int) {
    Page(perPage: $perPage, page: $page) {
      pageInfo {
        currentPage
        lastPage
        hasNextPage
      }
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

const GET_ANIME_DETAILS = gql`
  query GetAnimeDetails($id: Int!) {
    Media(id: $id, type: ANIME) {
      id
      title {
        romaji
        english
        native
      }
      description
      coverImage {
        medium
        large
      }
      genres
      status
      episodes
      averageScore
      meanScore
    }
  }
`;

export { GET_ANIME_LIST, GET_ANIME_DETAILS };
