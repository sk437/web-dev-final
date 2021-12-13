const COMMENT_API = 'http://localhost:4000/api/comments';

export const fetchAllComments = (dispatch) =>
    fetch(COMMENT_API)
        .then(response => response.json()).then(comments => {
            dispatch({
                type: 'fetch-all-comments',
                comments
            })}
        );

export const createNewComment = (dispatch, fields) =>
    fetch(`${COMMENT_API}/create`, {
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
        type: 'delete-comment',
        comment
    }));

export const flagComment = (dispatch, comment, body) => {
    fetch(`${COMMENT_API}/${comment._id}/flags`, {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: {
            'content-type': 'application/json'
        }
    })};



