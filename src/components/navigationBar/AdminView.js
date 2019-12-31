import React, {Component } from 'react';
import NavbarOfAdmin from './NavbarOfAdmin';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ViewBookingByAdmin from '../dashboard/admin/ViewBookingByAdmin';
import StudentDetail from '../dashboard/admin/StudentDetail';
import ViewFeedback from '../dashboard/admin/ViewFeedback';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class AdminView extends Component{
  render(){
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/' /> 
  return (
      <div>      
        <BrowserRouter>
          <NavbarOfAdmin />
            <Switch>
              <Route exact path="/admin_id" component={ViewBookingByAdmin} />
              <Route path="/admin_id/viewbookingbyadmin" component={ViewBookingByAdmin} />
              <Route path="/admin_id/studentdetail" component={StudentDetail} />
              <Route path="/admin_id/viewfeedback" component={ViewFeedback} />
            </Switch>
        </BrowserRouter>
      </div>      
);
}}
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }}
  
export default connect(mapStateToProps)(AdminView);