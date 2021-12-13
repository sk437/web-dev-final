import lists from '../components/users.json';

const users = (state = [],action) => {
    switch (action.type) {
        case 'fetch-all-users':
            state=action.users
            return(
                action.users
            );
        case 'update-ban':
            return (state.map(user => {
                if (user.username === action.user) {
                    user.isBanned = !user.isBanned
                }
                return(user);
            }));
        default:
            return(state);
    }
};

export default users;