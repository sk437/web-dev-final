import lists from '../components/users.json';

const mods = (state = lists,action) => {
    switch (action.type) {
        case 'fetch-all-mods':
            state = action.mods
            return(
                action.mods
            );
        default:
            return(state);
    }
};

export default mods;