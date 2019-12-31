import authReducer from './authReducer';
import { combineReducers } from 'redux';
import stdReducer from './stdReducer';
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase';
import feedbackReducer from './feedbackReducer';
import bookingReducer from './bookingReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    std: stdReducer,
    feedback: feedbackReducer,
    booking: bookingReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer;