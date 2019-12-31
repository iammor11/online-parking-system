import React, {Component } from 'react';
import { connect } from 'react-redux';
import { addStudent } from '../../store/actions/stdAction';
import firebase from 'firebase/app';
import { Redirect } from 'react-router-dom';
import { signIn } from '../../store/actions/authAction';

class Signup extends Component{
  state = {
    firstname: null,
    lastname: null,
    seatno: null,
    shift: null,
    mobileno: null,
    address: null,
    email: null,
    password: null,
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    firebase.auth()
    .createUserWithEmailAndPassword(this.state.email, this.state.password).catch(e => {
      console.log(e.code);
      console.log(e.message);
    });
    this.props.addStudent(this.state);
    this.setState({
      firstname: "",
      lastname: "",
      seatno: "",
      shift: "",
      mobileno: "",
      address: "",
      email: "",
      password: "",
    })
  }
  render(){
      
  const { auth } = this.props;

  if (auth.email === 'admin@gmail.com') return <Redirect to='/admin_id' />;
  if (auth.email && auth.email !== 'admin@gmail.com') return <Redirect to='/std_id' />;
    
  return (
    <div className="bg">
      <div className="login">

      <form onSubmit={this.handleSubmit}>
        <h1>Online UBIT Parking System</h1>
        <br /> 
      <div className="form-row">
      
      <div className="form-group col-6">
      <label htmlFor="firstname">First Name</label>
      <input type="text" className="form-control" id="firstname" placeholder="Enter Your First Name" onChange={this.handleChange}/>
      </div>
      
      <div className="form-group col-6">
      <label htmlFor="lastname">Last Name</label>
      <input type="lastname" className="form-control" id="lastname" placeholder="Enter Your Last Name" onChange={this.handleChange}/>
      </div>
      </div>
      
      <div className="form-row">
      <div className="form-group col-6">
      <label htmlFor="email">Email</label>
      <input type="email" className="form-control" id="email" placeholder="Enter Email" onChange={this.handleChange} />
      </div>
      <div className="form-group col-6">
      <label htmlFor="password">Password</label>
      <input type="password" className="form-control" id="password" minLength="8" placeholder="Password" onChange={this.handleChange}/>
      </div>
      </div>
  
      <div className="form-row">
      <div className="form-group col-5">
      <label htmlFor="mobileno">Mobile No</label>
      <input type="tel" className="form-control" id="mobileno" placeholder="Enter Mobile No" onChange={this.handleChange}/>
      </div>
      <div className="form-group col-4">
      <label htmlFor="shift">Shift</label>
      <input type="text" className="form-control" id="shift" placeholder="Enter Shift" onChange={this.handleChange}/>
      </div><div className="form-group col-3">
      <label htmlFor="seatno">Seat No</label>
      <input type="text" className="form-control" id="seatno" onChange={this.handleChange} placeholder="Enter Your Seat No" />
      </div>
      </div>
  
      <div className="form-group">
      <label htmlFor="address">Address</label>
      <input type="text" className="form-control" id="address" onChange={this.handleChange} placeholder="Enter Your Current Address" />
      </div>
      <input type="submit" className="btn" name="submit" />
      
      </form><br /> 
      </div>
      </div>
  );
}}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  }}

const mapDispatchToProps = (dispatch) => {
  return {
    addStudent: (std) => dispatch(addStudent(std)),
    signIn: (creds) => dispatch(signIn(creds)) 
  }}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);