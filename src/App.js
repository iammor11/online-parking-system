import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/dashboard/Login';
import AdminView from './components/navigationBar/AdminView';
import StdView from './components/navigationBar/StdView';
import BookParking from './components/dashboard/students/BookParking';
import Feedback from './components/dashboard/students/Feedback';
import ViewBooking from './components/dashboard/students/ViewBooking';
import Navbar from './components/navigationBar/Navbar';
import StudentDetail from './components/dashboard/admin/StudentDetail';
import ViewBookingByAdmin from './components/dashboard/admin/ViewBookingByAdmin';
import ViewFeedback from './components/dashboard/admin/ViewFeedback';
import Signup from './components/dashboard/Signup';

class App extends Component{
  render(){
  return (
    <div className="App">
      
    <BrowserRouter>
    <Navbar />
       <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/std_id" component={StdView} />
          <Route path="/std_id/bookparking" component={BookParking} />
          <Route path="/std_id/givefeedback" component={Feedback} />
          <Route path="/std_id/viewbookingbystd" component={ViewBooking} />
          <Route exact path="/admin_id" component={AdminView} />
          <Route path="/admin_id/studentdetail" component={StudentDetail} />
          <Route path="/admin_id/viewbookingbyadmin" component={ViewBookingByAdmin} />
          <Route path="/admin_id/viewfeedback" component={ViewFeedback} />
        </Switch>
        </BrowserRouter>
    </div>
  );
}}

export default App;