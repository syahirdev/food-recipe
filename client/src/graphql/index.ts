import { gql } from "@apollo/client";

export const GET_ALL_RECIPES = gql`
{
  recipes {
    data {
      attributes {
        name
        category
        duration
        serving
        isBookmark
        image {
          data {
            attributes {
              url
            }
          }
        }
        ingredients {
          data {
            id
            attributes {
              name
              quantity
            }
          }
        }
        author {
          data {
            id
            attributes {
              name
              image {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
        }
        viewers {
          data {
            id
            attributes {
              image {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}`;
