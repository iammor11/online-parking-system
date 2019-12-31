import React, {Component } from 'react';
import ShowNothing from './ShowNothing';
import { connect } from 'react-redux';
import AdminView from './AdminView';
import StdView from './StdView';

class Navbar extends Component{
  render(){
    const { auth } = this.props;
    const links = auth.email=== 'admin@gmail.com'? <AdminView /> : <StdView />;
    const links1 = auth.isEmpty ? <ShowNothing /> : links;

  return (
    <div>{links1}</div>
  );
}}

const mapStateToProps = (state) => {
  return{
    auth: state.firebase.auth
  }}

export default connect(mapStateToProps)(Navbar);