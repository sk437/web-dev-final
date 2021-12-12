import lists from '../components/users.json';

const mods = (state = lists,action) => {
    switch (action.type) {
        case 'fetch-all-mods':
            return(
                action.users
            );
        default:
            return(state);
    }
};

export default mods;