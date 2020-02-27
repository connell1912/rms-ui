import React, { SyntheticEvent, useState } from "react";
import { Form, FormGroup, Label, Col, Input, Button } from "reactstrap";

interface ILoginProps {
  updateCurrentUser: (email: string, password: string) => void;
  loginMessage: string;
}

export const LoginComponent: React.FC<any> = (props: ILoginProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitLogin = async (event: SyntheticEvent) => {
    event.preventDefault();
    props.updateCurrentUser(email, password);
  };

  return (
    <>
      <div className="loginDiv">
        <h2>Login</h2>
        <Form className="loginForm" onSubmit={submitLogin}>
          <FormGroup row>
            <Label for="email" sm={2}>
              Email
            </Label>
            <Col sm={10}>
              <Input
                required
                type="email"
                name="email"
                id="email"
                value={email}
                placeholder="Email"
                onChange={val => setEmail(val.target.value)}
              />
              {/* this is an example of data binding,
                            we take data from the state and put it
                            in our tsx */}
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
                name="password"
                id="password"
                value={password}
                placeholder="Password"
                onChange={val => setPassword(val.target.value)}
              />
            </Col>
          </FormGroup>
          <Button outline id="submitButton" color="secondary" type="submit">
            Login
          </Button>
        </Form>
        <br />
        <p>{props.loginMessage}</p>
        </div>
    </>
  );
};
