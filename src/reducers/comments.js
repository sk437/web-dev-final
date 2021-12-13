import lists from '../components/comments.json';

const comments = (state = [],action) => {
    switch (action.type) {
        case 'fetch-all-comments':
            state = action.comments
            if(!state) {
                state = []
                }
            return(
                action.comments
            );
        case 'delete-comment':
            return (state.filter(comment => comment._id !== action.comment._id));
        default:
            return(state);
    }
};

export default comments;
