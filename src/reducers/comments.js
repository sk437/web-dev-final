import lists from '../components/comments.json';

const comments = (state = [],action) => {
    switch (action.type) {
        case 'fetch-all-comments':
            state = action.comments
            return(
                action.comments
            );
        default:
            return(state);
    }
};

export default comments;
