const initState = {}

const bookingReducer = (state = initState, action) => {
    switch (action.type) {
        case 'DO_BOOKING':
        console.log('parking is booked', action.bookingbystd);
        return state;
        case 'DO_BOOKING_ERROR':
        console.log('parking is error', action.err);
        return state;
        default :
        return state;
    }}
export default bookingReducer;