import { BOOKMARK_FRAGMENT, GET_BOOKMARK_COUNT } from "./index";

export const resolver = {
    Mutation: {
        setBookmark(_root: any, args: any, {client, cache}: any) {
            const recipeId = cache.identify({
                __typename: "Recipe",
                id: args.recipeId
            });

            const {isBookmark} = client.readFragment({
                fragment: BOOKMARK_FRAGMENT,
                id: recipeId
            });


            client.writeFragment({
                fragment: BOOKMARK_FRAGMENT,
                id: recipeId,
                data: {
                    isBookmark: !isBookmark
                }
            });

            const {bookmarkCounter} = client.readQuery({
                query: GET_BOOKMARK_COUNT
            });

            console.log(bookmarkCounter);

            client.writeQuery({
                query: GET_BOOKMARK_COUNT,
                data: {
                    bookmarkCounter: isBookmark ? bookmarkCounter - 1 : bookmarkCounter + 1
                }
            });
        }
    }
};
