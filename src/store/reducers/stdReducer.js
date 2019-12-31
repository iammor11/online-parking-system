const initState = {}

const stdReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_STUDENT':
        console.log('created project', action.std);
        return state;
        case 'ADD_STUDENT_ERROR':
        console.log('created project error', action.err);
        return state;
        default :
        return state;
    }}
export default stdReducer;