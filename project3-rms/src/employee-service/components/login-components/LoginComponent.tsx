import React, { SyntheticEvent } from "react";
import { Form, Input, Button, FormGroup, Label, Col } from "reactstrap";

interface ILoginState {
  email: string;
  password: string;
}

interface ILoginProps {
 /*  currentUser: any; */
  updateCurrentUser: (e: string, p: string) => void;
  loginMessage: string;
}

export class LoginComponent extends React.Component<ILoginProps, ILoginState> {
  constructor(props: any) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  updateEmail = (event: any) => {
    this.setState({
      ...this.state,
      email: event.target.value
    });
  };

  updatePassword = (event: any) => {
    this.setState({
      ...this.state,
      password: event.target.value
    });
  };

  /* submitLogin = async (event: SyntheticEvent) => {
    event.preventDefault();
    await this.props.updateCurrentUser(
      this.state.email,
      this.state.password
      /* false */
    /* ); */
    /* console.log(this.props.currentUser);
    if (this.props.currentUser === null) {
      console.log("You are not a user");
    } else {
      if (this.props.currentUser["role"] === "ADMIN") {
        console.log("Admin");
        this.props.history.push("/admin");
      } else if (this.props.currentUser["role"] !== "ADMIN") {
        console.log("employee");
        this.props.history.push("/employee");
      }
    } */
  /* }; */

  submitLogin = async (event: SyntheticEvent) => {
    event.preventDefault();
    this.props.updateCurrentUser(this.state.email, this.state.password);
  }

  render() {
    return (
      /* {<div id="login-body">
        <div className="login">
          <div>
            <h1>Login</h1>
            Email:
            <input
              type="text"
              placeholder="email@email.com"
              className="txtb"
              onChange={this.updateEmail}
            />
            Password:
            <input
              type="password"
              placeholder="Password"
              className="txtb"
              onChange={this.updatePassword}
            />
            <input
              type="submit"
              value="Login"
              className="signup-btn"
              onClick={this.submitLogin}
            />
            <Link id="link" to="/register">
              Add an Employee
            </Link>
          </div>
        </div>
      </div>} */
      <div className="loginDiv">
          <h2>Login</h2>
        <Form className="loginForm" onSubmit = {this.submitLogin}>
        <FormGroup row>
            <Label for="email" sm={2}>
              Email
            </Label>
            <Col sm={10}>
          <Input 
            required
              type="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.updateEmail}
              />
              </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="password" sm={2}>
              Password
            </Label>
            <Col sm={10}>
          <Input 
            required
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.updatePassword}
              />
              </Col>
          </FormGroup>
          <Button id="login">Login</Button>
        </Form>
        <br/>
        <p>{this.props.loginMessage}</p>
      </div>
    );
  }
}