import {gql} from '@apollo/client'
import {CHARACTER_FRAGMENT} from '../fragments/CHARACTER_FRAGMENT'
export const GET_ALL_CHARACTERS = gql`

    query GetAllCharacters ($page: Int ,$filters:FilterCharacter) {
        characters(page: $page,filter:$filters) {
          info {
            count
          }
          results {
            ...characterFrag
          
          }
        }
        location(id: 1) {
          id
        }
        episodesByIds(ids: [1, 2]) {
          id
        }
    }
    ${CHARACTER_FRAGMENT}

`