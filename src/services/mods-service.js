const MODERATOR_API = 'http://localhost:4000/api/mods';

export const fetchAllModerators = (dispatch) =>
    fetch(MODERATOR_API)
        .then(response => response.json()).then(mods =>
        dispatch({
            type: 'fetch-all-mods',
            mods
        })
    );

export const createNewModerator = (dispatch, field) =>
    fetch(MODERATOR_API, {
        method: 'POST',
        body: JSON.stringify(field),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(mods =>
        dispatch({
            type: 'fetch-all-mods',
            mods
        }));

export const banUser = (moderator, bannedUser) =>
    fetch(`${MODERATOR_API}/${moderator}/ban`, {
        method: 'PUT',
        body: JSON.stringify(bannedUser),
        headers: {
            'content-type': 'application/json'
        }
    });



