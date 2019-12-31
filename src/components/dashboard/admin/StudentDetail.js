import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

class StudentDetail extends Component{  
  render(){
    
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/' /> 
  
    const bioData =  this.props.std && this.props.std.map( data => {
      return(
        <tr key={data.seatno}>
            <td>{data.firstname}</td>
            <td>{data.lastname}</td>
            <td>{data.seatno}</td>
            <td>{data.shift}</td>
            <td>{data.mobileno}</td>
            <td>{data.address}</td>
            <td>{data.email}</td>
        </tr>
      )})
  return (
    <div className="studentdetail">
      <h1>Student Detail</h1>
      
      <table className="stddetailtable">
        <thead>
          <tr>
            <th>Name</th>
            <th>Father Name</th>
            <th>Seat No</th>
            <th>Shift</th>
            <th>Mobile No</th>
            <th>Address</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {bioData}  
        </tbody>
      </table>
      <br />
    </div>
  );
}}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    std : state.firestore.ordered.std
  }}
 
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
   { collection: 'std' }
  ])
 )(StudentDetail);