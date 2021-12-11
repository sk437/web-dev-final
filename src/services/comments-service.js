const COMMENT_API = 'http://localhost:4000/api/comments';

export const fetchAllComments = (dispatch) =>
    fetch(COMMENT_API)
        .then(response => response.json())
        .then(comments =>
            dispatch({
                type: 'fetch-all-comments',
                comments
            })
        );

export const createNewComment = (dispatch, fields) =>
    fetch(COMMENT_API, {
        method: 'POST',
        body: JSON.stringify(fields),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(comments =>
            dispatch({
                type: 'fetch-all-comments',
                comments
            })
        );

export const deleteComment = (dispatch, comment) =>
    fetch(`${COMMENT_API}/${comment._id}`, {
        method: 'DELETE'
    }).then(response => dispatch({
        type: 'fetch-all-comments',
        comment
    }));

export const flagComment = (dispatch, comment) =>
    fetch(`${COMMENT_API}/${comment._id}/flags`, {
        method: 'PUT'
    })
        .then(response =>
            dispatch({
                type: 'fetch-all-comments',
                comment
            }));



