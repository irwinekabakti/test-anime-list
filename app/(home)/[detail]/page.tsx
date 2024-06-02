// pages/home/[detail]/[id].tsx

import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { GET_ANIME_DETAILS } from "@/graphql/queries";

const DetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const { loading, error, data } = useQuery(GET_ANIME_DETAILS, {
    variables: { id },
  });

  console.log(data, "<==");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const anime = data.Media;

  return (
    <div>
      <h1>{anime.title.english || anime.title.romaji}</h1>
      <img src={anime.coverImage.large} alt={anime.title.romaji} />
      <p>{anime.description}</p>
    </div>
  );
};

export default DetailPage;
