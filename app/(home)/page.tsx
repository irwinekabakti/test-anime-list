"use client";
import Image from "next/image";
import Card from "../_components/Card";
import Banner from "../_components/Banner";
import ApolloProvider from "@/graphql/ApolloProvider";

const Home: React.FC = () => {
  return (
    <ApolloProvider>
      <Banner />
      <Card />
    </ApolloProvider>
  );
};

export default Home;
