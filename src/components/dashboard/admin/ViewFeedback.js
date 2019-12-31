import React, {Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

class ViewFeedback extends Component{
  render(){
    
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/' /> 
  
    const data =  this.props.feedback && this.props.feedback.map( detail => {
      return(
        <tr key={detail.id}>
          <td>{detail.email}</td>
          <td>{detail.comment}</td>
        </tr>
      )})
  return (
    <div className="heading">
      <h1>Feedback By Student</h1>
        <table id="viewfeedbacktable" className="mytable">
          <thead>
            <tr>
              <th>Email</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {data}
          </tbody>
        </table>
        <br />
    </div>
);
}}
const mapStateToProps = (state) => {
  return{
  feedback : state.firestore.ordered.feedback,
  auth: state.firebase.auth
}}
export default compose(connect(mapStateToProps),firestoreConnect([{
  collection: 'feedback'
}]))
(ViewFeedback);