import { InMemoryCache } from "@apollo/client";
import { GET_BOOKMARK_COUNT } from "./index";

export const cache = new InMemoryCache({
    typePolicies: {
        Recipe: {
            fields: {
                isBookmark: {
                    read(isBookmark = false) {
                        return isBookmark;
                    }
                }
            }
        }
    }
});

cache.writeQuery({
    query: GET_BOOKMARK_COUNT,
    data: {
        bookmarkCounter: 0
    }
});
