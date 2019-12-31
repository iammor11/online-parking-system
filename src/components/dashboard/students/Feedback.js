import React, { Component } from 'react';
import { feedbackByStd } from '../../../store/actions/feedbackAction';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Modal from '../Modal';

class Feedback extends Component{
  state = {
    comment: null,
    email: this.props.auth.email,
    myid: "",
    }
  handleChange = (e) => {
    this.setState({
    [e.target.id]: e.target.value,
    myid : "myModal" 
    })}
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.feedbackByStd(this.state);
    this.setState({
    comment: "",
    myid : "" 
    })}  
    
render(){
  
  const { auth } = this.props;
  if (!auth.uid) return <Redirect to='/' /> 

  return(
    <div className="heading">
      <h1>Your's Feedback</h1>
        <form id="feedbackform" onSubmit={this.handleSubmit}>
          <div className="form-group">
          <textarea rows="4" cols="50" type="comment" name="comment" className="form-control" id="comment" value={this.state.comment} placeholder="Write Your Message" onChange={this.handleChange} required="required"></textarea>
          </div>

          <input type="submit" className="btn" name="submit" data-target="#myModal" data-toggle="modal"/>
        </form>
        
        <div className="modal fade" id={this.state.myid}>
          <Modal />
        </div>
    </div>
    );
  }}

  const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
    }}

  const mapDispatchToProps = (dispatch) => {
  return {
    feedbackByStd: (feedback) => dispatch(feedbackByStd(feedback))
    }}
    
export default connect(mapStateToProps, mapDispatchToProps)(Feedback);