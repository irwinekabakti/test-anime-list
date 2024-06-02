"use client";

import React, { ReactNode } from "react";
import { ApolloProvider as ApolloHooksProvider } from "@apollo/client";
import createApolloClient from "./client";
interface ApolloProviderProps {
  children: ReactNode;
}

const ApolloProvider: React.FC<ApolloProviderProps> = ({ children }) => {
  const client = createApolloClient();
  return <ApolloHooksProvider client={client}>{children}</ApolloHooksProvider>;
};

export default ApolloProvider;
