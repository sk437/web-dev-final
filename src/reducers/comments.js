import lists from '../components/comments.json';

const comments = (state = lists,action) => {
    switch (action.type) {
        case 'fetch-all-comments':
            return(
                action.comments
            );
        default:
            return(state);
    }
};

export default comments;
