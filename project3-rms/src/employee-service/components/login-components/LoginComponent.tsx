import React, { SyntheticEvent } from "react";
import { Form, Input, Button, FormGroup, Label, Col } from "reactstrap";
import { updateCurrentUser } from "../../action-mappers/login-action";

interface ILoginState {
  email: string;
  password: string;
}

interface ILoginProps {
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

  submitLogin = async (event: SyntheticEvent) => {
    event.preventDefault();
    this.props.updateCurrentUser(this.state.email, this.state.password);
  };

  render() {
    return (
      <div className="loginDiv">
        <h2>Login</h2>
        <Form className="loginForm" onSubmit={this.submitLogin}>
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
        <br />
        <p>{this.props.loginMessage}</p>
      </div>
    );
  }
}
