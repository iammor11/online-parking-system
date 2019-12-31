export const feedbackByStd = (feedback) => {
    return(dispatch, getState, {getFirestore} ) => {
        const firestore = getFirestore();
        firestore.collection('feedback').add({
            ...feedback,
        }).then(() => {
            dispatch({ type: 'GIVE_FEEDBACK', feedback });
        }).catch((err) => {
            dispatch({ type: 'GIVE_FEEDBACK_ERROR', err});
        })}}