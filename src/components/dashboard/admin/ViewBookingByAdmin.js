import React, {Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

class ViewBookingByAdmin extends Component{
  render(){
    
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/' /> 
  
    const bookingdata =  this.props.booking && this.props.booking.map( detail => {
      return(
        <tr key={detail.id}>
          <td>{detail.email}</td>
          <td>{detail.date}</td>
          <td>{detail.starttime}</td>
          <td>{detail.endtime}</td>
        </tr>
      )})
  return (
    <div className="heading ">
      <h1>View Booking Detail</h1>
        <table className="mytable" id="vbbyadmin">
          <thead>
            <tr>
              <th>Email</th>
              <th>Date</th>
              <th>Starting Time</th>
              <th>Ending Time</th>
            </tr>
          </thead>
          <tbody>
            {bookingdata}
          </tbody>
        </table>
        <br />
    </div>
);
}}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    booking : state.firestore.ordered.booking
  }}
 
export default compose(connect(mapStateToProps),firestoreConnect([{ 
  collection: 'booking' 
}]))
(ViewBookingByAdmin);