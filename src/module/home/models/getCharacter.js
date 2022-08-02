import { gql } from "@apollo/client";

export const GET_CHARACTER = gql`
  query character($id: ID!) {
    character(id: $id) {
      name
      status
      species
      type
      gender
      origin {
        name
        __typename
      }
      location {
        name
        __typename
      }
      image
      episode {
        name
        __typename
      }
      created
      __typename
    }
  }
`;
