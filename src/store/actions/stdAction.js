export const addStudent = (std) => {
    return(dispatch, getState, {getFirestore} ) => {
        const firestore = getFirestore();
        firestore.collection('std').add({
            ...std,
        }).then(() => {
            dispatch({ type: 'ADD_STUDENT', std });
        }).catch((err) => {
            dispatch({ type: 'ADD_STUDENT_ERROR', err});
        })}}