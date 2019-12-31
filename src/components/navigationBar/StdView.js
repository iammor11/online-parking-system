import React, {Component } from 'react';
import NavbarOfStd from './NavbarOfStd';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BookingParking from '../dashboard/students/BookParking';
import Feedback from '../dashboard/students/Feedback';
import ViewBooking from '../dashboard/students/ViewBooking';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class StdView extends Component{
  render(){
  const { auth } = this.props;
  if (!auth.uid) return <Redirect to='/' /> 

  return (
    <div>
      <BrowserRouter>
        <NavbarOfStd />
          <Switch>
            <Route exact path="/std_id" component={BookingParking} />
            <Route path="/std_id/bookparking" component={BookingParking} />
            <Route path="/std_id/givefeedback" component={Feedback} />
            <Route path="/std_id/viewbookingbystd" component={ViewBooking} />
          </Switch>
      </BrowserRouter>
    </div>      
);
}}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }}
  
export default connect(mapStateToProps)(StdView);