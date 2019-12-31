const initState = {}

const feedbackReducer = (state = initState, action) => {
    switch (action.type) {
        case 'GIVE_FEEDBACK':
        console.log('feedback is given', action.feedback);
        return state;
        case 'GIVE_FEEDBACK_ERROR':
        console.log('feedback error', action.err);
        return state;
        default :
        return state;
    }}
export default feedbackReducer;