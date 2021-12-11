const MODERATOR_API = 'http://localhost:4000/api/mods';

export const fetchAllModerators = () =>
    fetch(MODERATOR_API)
        .then(response => response.json());

export const createNewModerator = (field) =>
    fetch(MODERATOR_API, {
        method: 'POST',
        body: JSON.stringify(field),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json());

export const updateBanned = (moderator, bannedUser) =>
    fetch(`${MODERATOR_API}/${moderator._id}/ban`, {
        method: 'PUT',
        body: JSON.stringify(bannedUser),
        headers: {
            'content-type': 'application/json'
        }
    });



