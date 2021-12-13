const USER_API = 'http://localhost:4000/api/users';

export const fetchAllUsers = (dispatch) =>
    fetch(USER_API)
        .then(response => response.json()).then(users => {
        dispatch({
            type: 'fetch-all-users',
            users
        })}
    );


export const updateBanned = (dispatch, user, nowBanned) =>
    fetch(`${USER_API}/${user}/banned`, {
        method: 'PUT',
        body: JSON.stringify(nowBanned),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => dispatch({
              type: 'update-ban',
              user
          }));

export const updateProfile = (user, fields) => {
    fetch(`${USER_API}/${user}`, {
        method: 'PUT',
        body: JSON.stringify(fields),
        headers: {
            'content-type': 'application/json'
        }
    })};

export const updateReport = (user, bannedUser) => {
    fetch(`${USER_API}/${user}/report`, {
        method: 'PUT',
        body: JSON.stringify(bannedUser),
        headers: {
            'content-type': 'application/json'
        }
    })};



