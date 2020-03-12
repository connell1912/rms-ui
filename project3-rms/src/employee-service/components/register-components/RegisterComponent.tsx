import React, { useState } from "react";
import { Form, FormGroup, Label, Col, Input, Button } from "reactstrap";
import { addUser } from "../../../utility/api";
import IUser, { rolesEnum } from "../../model/IUser";

interface IRegisterProps {
  addUser: (body: IUser) => void;
  registerMessage: string;
}

export const RegisterComponent: React.FC<any> = (props: IRegisterProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [roles, setRoles] = useState(rolesEnum.ADMIN);

  return (
    <>
      <div className="registerDiv">
        <h2>Create an Account</h2>
        <Form
          className="loginForm"
          onSubmit={(e) =>
            {e.preventDefault();
            addUser({
              userId: 0,
              firstName: firstName,
              lastName: lastName,
              email: email,
              password: password,
              role: roles
            }).then(r => console.log(r.data))}
          }
        >
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
                placeholder="Email"
                onChange={val => setEmail(val.target.value)}
              />
              {/* <FormFeedback valid tooltip>Username is available!</FormFeedback>
                <FormFeedback invalid tooltip>Username is unavailable, please select another.</FormFeedback> */}
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="firstName" sm={2}>
              First Name
            </Label>
            <Col sm={10}>
              <Input
                required
                type="text"
                name="firstName"
                id="firstName"
                placeholder="First Name"
                onChange={val => setFirstName(val.target.value)}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="lastName" sm={2}>
              Last Name
            </Label>
            <Col sm={10}>
              <Input
                required
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Last Name"
                onChange={val => setLastName(val.target.value)}
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
                name="password"
                id="password"
                placeholder="Password"
                onChange={val => setPassword(val.target.value)}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="roles" sm={2}>
              Role
            </Label>
            <Col sm={10}>
              <Input
                type="select"
                name="select"
                id="exampleSelect"
                onChange={val => setRoles(val.target.valueAsNumber)}
              >
                <option defaultValue={0} disabled={false}>
                  Select a Role
                </option>
                <option value={0}>Training Manager</option>
                <option value={1}>Building Manager</option>
                <option value={2}>Trainer</option>
                <option value={3}>Admin</option>
              </Input>
            </Col>
          </FormGroup>
          <Button color="btn btn-outline-secondary" type="submit">
            Submit
          </Button>
        </Form>
        <br />
        <p>{props.registerMessage}</p>
      </div>
    </>
  );
};

export default RegisterComponent;
