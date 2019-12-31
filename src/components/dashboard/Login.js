import React, {Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authAction';
import { Redirect, NavLink } from 'react-router-dom';
import loading from '../images/loader.gif';

class Login extends Component{
  state = {
    email: '',
    password: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state);
  }

render(){
  const { authError } = this.props;
  const { auth } = this.props;

  if (auth.email === 'admin@gmail.com') return <Redirect to='/admin_id' />;
  if (auth.email && auth.email !== 'admin@gmail.com') return <Redirect to='/std_id' />;

return (
  <div>
  {this.props.auth.isLoaded ? 
    <div className="bg">
    <div className="login">
      <h1 id="loginheading">Online UBIT Parking System</h1>
      <form method="POST" onSubmit={this.handleSubmit}>
      
        <br /> 
        <div className="form-group">        
          <label htmlFor="email">Email :</label>
          <input type="email" name="email" id="email" className="form-control" placeholder="Enter your id" onChange={this.handleChange} />
        </div><br />

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" className="form-control" placeholder="Enter your password" onChange={this.handleChange} />
        </div><br />

        <input type="submit" className="btn submitButton" value="Submit" />
        <br /><br />
        { authError ? <p>{authError}</p> : null}
      </form>
      <p>Need an account? <NavLink to="/signup"> Sign Up</NavLink> </p>
      <p>Admin email is admin@gmail.com and password is imadmin</p>
    </div>
  </div> :
    <img src={loading} alt="your speed is slow" style={{margin: "auto",position: "absolute",top: "50%",left: "50%",transform: "translate(-50%, -50%)"}} />}
  </div>
);
}}

const mapStateToProps = (state) => {
  return{
    authError: state.auth.authError,
    auth: state.firebase.auth
  }}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds))
  }}

export default connect(mapStateToProps, mapDispatchToProps)(Login);