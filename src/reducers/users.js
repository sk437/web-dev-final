import lists from '../components/users.json';

const users = (state = [],action) => {
    switch (action.type) {
        case 'fetch-all-users':
            state=action.users
            return(
                action.users
            );
        default:
            return(state);
    }
};

export default users;