
import { gql } from "@apollo/client";

export const GET_TOTAL_CHARACTER = gql`
  query characters {
    characters{
      info {
        count
        __typename
      }
      __typename
    }
  }

`