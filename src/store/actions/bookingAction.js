export const booking = (bookingbystd) => {
    return(dispatch, getState, {getFirestore} ) => {
        const firestore = getFirestore();
        firestore.collection('booking').add({
            ...bookingbystd,
        }).then(() => {
            dispatch({ type: 'DO_BOOKING', bookingbystd });
        }).catch((err) => {
            dispatch({ type: 'DO_BOOKING_ERROR', err});
        })}}