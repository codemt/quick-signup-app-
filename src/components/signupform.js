import React, { Component } from 'react';
import '../stylesheets/signupform.css';
import fire from '../config/fire';
 class SignupForm extends Component {

    constructor(props){
        super(props);
        this.state = {

                name : '',
                interest: '',
                email:'',
                phone:''

        }
      //  this.handleChange = this.handleChange.bind(this);
    }
    submitForm(e){
        
        e.preventDefault();
        console.log(123);
        const name = e.target.name.value;
        const interest = e.target.interest.value;
        const email = e.target.email.value;
        const phone = e.target.phone.value;
        console.log(name);
        console.log(interest);
        console.log(email);
        console.log(phone);

       // console.log(this.state.name);
    }
  render() {
    return (
      <div>
          <div class="container">
    <div class="wrapper animated bounceInLeft">
      <div class="company-info">
        <h3>Fill up this form to become a volunteer , and we will get back to you. </h3>
        <ul>
          <li><i class="fa fa-road"></i> 44 Something st</li>
          <li><i class="fa fa-phone"></i> (555) 555-5555</li>
          <li><i class="fa fa-envelope"></i> test@acme.test</li>
        </ul>
      </div>
      <div class="contact">
        <h3>Email Us</h3>
        <form onSubmit={this.submitForm.bind(this)}>
          <p>
            <label>Name</label>
            <input type="text" name="name"   ref="name"    />
          </p>
          <p>
            <label>Email Address</label>
            <input type="email" name="email"  ref="email"  />
          </p>
          <p>
            <label>Want to Apply for </label>
            <input type="text" name="interest" ref="interest"  />
          </p>
          <p>
            <label>Phone Number</label>
            <input type="text" name="phone" ref="phone"   />
          </p>
          <p class="full">
            <label>Message</label>
            <textarea name="message" rows="5"></textarea>
          </p>
          <p class="full">
            <button type="submit">Submit</button>
          </p>
        </form>
      </div>
    </div>
  </div>
      </div>
    )
  }
}
export default SignupForm;