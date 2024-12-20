import { gql } from "@apollo/client"
export const CHARACTER_FRAGMENT = gql`

  fragment characterFrag on Character {
    name
    id
    status
    species
    image
    location{
        name
    }
    origin{
        name
    }
  }
`