import lists from '../components/users.json';

const users = (state = lists,action) => {
    switch (action.type) {
        case 'fetch-all-users':
            return(
                action.users
            );
        default:
            return(state);
    }
};

export default users;