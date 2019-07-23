import React, { Component } from "react"
//import {Redirect} from "react-router-don"




class Register extends Component {
    state = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        Redirect: "false",
    }
    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state);
    };
    handleChange =  event  => {
        this.setState( { [event.target.name]: event.target.value } );
        
    };

        render() {
         return (
            <div>
             <form className="flexbox" onSubmit={this.handleSubmit}/>
                <input
                    value={this.state.firstName}
                    placeholder="First name"
                    name="firstName"
                    onChange={event => this.handleChange(event)}
                    required
                />
                <input
                    value={this.state.lastName}
                    placeholder="Last name"
                    name="lastName"
                    onChange={event => this.handleChange(event)}
                    required
                />
                <input
                    value={this.state.email}
                    placeholder="email"
                    name="email"
                    onChange={event => this.handleChange(event)}
                    required
                />
                <input
                    value={this.state.password}
                    placeholder="Password"
                    name="password"
                    onChange={event => this.handleChange(event)}
                    required
                />
                <input
                    value={this.state.confirmPassword}
                    placeholder="Confirm Passowrd"
                    name="confirmPassword"
                    onChange={event => this.handleChange(event)}
                    required
                />
                <button onClick={event => this.handleSubmit(event)} type="submit">Submit</button>
             </div>
         )}
}

export default Register;