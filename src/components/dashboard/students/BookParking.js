import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { booking } from '../../../store/actions/bookingAction';
import Modal from '../Modal';

class BookParking extends Component{
  state = {
    date: null,
    email: this.props.auth.email,
    starttime: null,
    endtime: null,
    myid: ""
  }
  handleChange = (e) => {
    this.setState({
    [e.target.id]: e.target.value,
    myid : "myModal" 
  })}
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.booking(this.state);
    this.setState({
      date: "",
    starttime: "",
    endtime: "",
      myid : "" 
      })
  }    
  todaydate = () => {
    var d = new Date();
    var year = d.getFullYear();
    var month = d.getMonth() + 1;
    var day = d.getDate();
      if(day === 1){
      day = "01";
      }else if(day===2){
      day = "02";
      }else if(day===3){
      day = "03";
      }else if(day===4){
      day = "04";
      }else if(day===5){
      day = "05";
      }else if(day===6){
      day = "06";
      }else if(day===7){
      day = "07";
      }else if(day===8){
      day = "08";
      }else if(day===9){
      day = "09";
      }
    var mystrings = [year, month ,day]; 
    var dd = mystrings.join("-");
    return dd;
  }
  render(){
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/' /> 
    
      const mytodaydate = this.todaydate();
  return(
      <div className="heading">
        <h1>Book A Parking</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="date">Select Date :</label><br /> 
              <input type="date" name="date" className="form-control" min={mytodaydate} id="date"  onChange={this.handleChange} value={this.state.date} required="required"/>
            </div><br />

            <div className="form-group hide">
              <label htmlFor="slot">Email :</label><br /> 
              <input type="email" name="email" className="form-control" id="email" onChange={this.handleChange} value={this.state.email} required="required"/>
            </div><br />

            <div className="form-group">
              <label htmlFor="startingtime">Choose Starting Time :</label><br />
              <input list="startingtime" className="form-control mylist" id="starttime" value={this.state.starttime} onChange={this.handleChange} required="required" />
                <datalist name="startingtime" id="startingtime" >       
                  <option value="08:00 am" />
                  <option value="09:00 am" />
                  <option value="10:00 am" />
                  <option value="11:00 am" />
                  <option value="12:00 pm" />
                  <option value="01:00 pm" />
                  <option value="02:00 pm" />
                  <option value="03:00 pm" />
                  <option value="04:00 pm" />
                  <option value="05:00 pm" />
                  <option value="06:00 pm" />
                  <option value="07:00 pm" />
                  <option value="08:00 pm" />
                </datalist>
            </div><br />
                    
            <div className="form-group">
              <label htmlFor="endingtime">Choose Ending Time :</label><br />
              <input list="endingtime" className="form-control mylist" id="endtime" value={this.state.endtime} onChange={this.handleChange} required="required" />
                <datalist name="endingtime" id="endingtime" >
                  <option value="09:00 am" />
                  <option value="10:00 am" />
                  <option value="11:00 am" />
                  <option value="12:00 pm" />
                  <option value="01:00 pm" />
                  <option value="02:00 pm" />
                  <option value="03:00 pm" />
                  <option value="04:00 pm" />
                  <option value="05:00 pm" />
                  <option value="06:00 pm" />
                  <option value="07:00 pm" />
                  <option value="08:00 pm" />
                  <option value="09:00 pm" />
                </datalist>
            </div><br /><br />                    
                    
            <input type="submit" className="btn" name="submit" data-target="#myModal" data-toggle="modal"/>    
          </form><br />

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
    booking: (bookingbystd) => dispatch(booking(bookingbystd))
  }}
 
export default connect(mapStateToProps, mapDispatchToProps)(BookParking);