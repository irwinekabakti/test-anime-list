"use client";
import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_ANIME_LIST } from "@/graphql/queries";
import Card from "../_components/Card";
import Banner from "../_components/Banner";

const Home: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { loading, data, error } = useQuery(GET_ANIME_LIST, {
    variables: {
      perPage: 12,
      page: currentPage,
    },
  });

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>Error: {error ? error.message : "Data not available"}</div>;
  }

  return (
    <>
      <Banner />
      <Card page={currentPage} onPageChange={handlePageChange} />
    </>
  );
};

export default Home;
