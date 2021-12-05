import { gql } from "@apollo/client";

export const GET_ALL_RECIPES = gql`
{
  recipes {
    id
    name
    duration
    serving
    isBookmark @client
    image {
      url
    }
    category {
      id
      name
    }
    ingredients {
      id
      name
      quantity
    }
    author {
      id
      name
      image {
        url
      }
    }
    viewers {
      id
      image {
        url
      }
    }
  }
}`;

export const CREATE_INGREDIENT = gql`
mutation CreateIngredient($name: String!, $quantity: String!) {
  createIngredient(input: {data: {name: $name, quantity: $quantity}}) {
    ingredient {
      id
    }
  }
}
`;

export const CREATE_RECIPE = gql`
mutation CreateRecipe(
  $name: String!,
  $duration: Int!,
  $serving: Int!,
  $category: ID!,
  $ingredients: [ID]!,
  $author: ID!
) {
  createRecipe(input: {data: {
    name: $name,
    duration: $duration,
    serving: $serving
    category: $category
    ingredients : $ingredients
    author: $author
  }}) {
    recipe {
      id
    }
  }
}
`;

export const UPLOAD_IMAGE = gql`
mutation SingleUpload(
  $refId: ID, 
  $ref: String, 
  $field: String, 
  $file: Upload!
) {
    upload(
      refId: $refId, 
      ref: $ref, 
      field:$field, 
      file:$file
    ) {
    name
  }
}
`;

export const SET_BOOKMARK = gql`
mutation SetBookmark($recipeId: ID!) {
    setBookmark(recipeId: $recipeId) @client
}
`;

export const BOOKMARK_FRAGMENT = gql`
fragment BookmarkFragment on Recipe {
    isBookmark
}
`;

export const GET_BOOKMARK_COUNT = gql`
{
    bookmarkCounter @client
}
`;

export const GET_CATEGORIES = gql`
{
  categories {
    id
    name
  }
}
`;
