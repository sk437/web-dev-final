const USER_API = 'http://localhost:4000/api/users';

export const fetchAllUsers = () =>
    fetch(USER_API)
        .then(response => response.json());


export const updateBanned = (user, nowBanned) =>
    fetch(`${USER_API}/${user._id}/banned`, {
        method: 'PUT',
        body: JSON.stringify(nowBanned),
        headers: {
            'content-type': 'application/json'
        }
    });

export const updateProfile = (user, fields) =>
    fetch(`${USER_API}/${user._id}`, {
        method: 'PUT',
        body: JSON.stringify(fields),
        headers: {
            'content-type': 'application/json'
        }
    });

export const updateReport = (user, bannedUser) =>
    fetch(`${USER_API}/${user._id}/report`, {
        method: 'PUT',
        body: JSON.stringify(bannedUser),
        headers: {
            'content-type': 'application/json'
        }
    });



