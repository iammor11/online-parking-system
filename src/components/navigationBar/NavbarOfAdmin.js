import React, {Component } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../images/1.png';
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authAction'

class NavbarOfAdmin extends Component{
  render(){
  return (    
    <div>
      <header id="content" className='navbar navbar-expand-sm fixed-top'>
        <button className='navbar-toggler' data-toggle="collapse" data-target='#list'>
        <span className='navbar-toggler-icon' id="myicon1"></span><br />
        <span className='navbar-toggler-icon' id="myicon2"></span><br />
        <span className='navbar-toggler-icon' id="myicon3"></span>
        </button>

        <div id="logo">
        <NavLink to="/admin_id" className='navbar-brand'><img src={Logo} alt="our logo" /></NavLink>
        </div>
      
        <div className="collapse navbar-collapse" id="list">
          <ul id="navBar">
            <li><NavLink to="/admin_id/viewbookingbyadmin">View Booking</NavLink></li>
            <li><NavLink to="/admin_id/studentdetail">Student Detail</NavLink></li>
            <li><NavLink to="/admin_id/viewfeedback">Feedback</NavLink></li>
            <li><a href="/" onClick={this.props.signOut}>Log Out</a></li>
          </ul>
        </div>
      </header>
    </div>
);
}}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }}

export default connect(null, mapDispatchToProps)(NavbarOfAdmin);