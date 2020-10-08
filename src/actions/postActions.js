import { FETCH_POSTS, NEW_POST } from './types'

export const fetchPosts = () => dispatch => {
    fetch("url/posts")
        .then(res => res.json())
        .then(posts =>
            dispatch({
            type: FETCH_POSTS,
            payload: posts
        })
    );
};