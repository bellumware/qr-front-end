import React, { useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  InputText,
  Content,
  Card,
  CardTittle,
  CardContent,
  CardActions,
  Button,
  Alert,
} from "../../ui";

import {
  useApi,
  validateInput,
  validateEmail,
  defaultInputValue,
  inputReducer,
} from "../../common";

import { authActions } from "../store/auth-slice";

import Loader from "../../ui/Loader";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [email, emailDispatch] = useReducer(inputReducer, defaultInputValue);
  const [password, passwordDispatch] = useReducer(
    inputReducer,
    defaultInputValue
  );
  const [isLoading, error, setError, sendRequest] = useApi();

  let alertErrors = [];

  if (error) {
    error.map((e, i) => {
      alertErrors.push(
        <Alert key={i} type="error">
          {e.message}
        </Alert>
      );
    });
  }

  const handleEmailChange = (event) => {
    emailDispatch({ type: "valueChange", value: event.target.value });
  };

  const handlePasswordChange = (event) => {
    passwordDispatch({ type: "valueChange", value: event.target.value });
  };

  const handleLoginResponse = (response) => {
    dispatch(
      authActions.setLogin({
        isLoggedIn: true,
        accessToken: response.data.login.accessToken,
        refreshToken: response.data.login.refreshToken,
        user: response.data.login.user,
      })
    );
    navigate("/");
  };

  const handleLogIn = (e) => {
    e.preventDefault();
    setError(null);
    //validate fields
    const emailValidation = validateEmail(email.value);
    const passwordValidation = validateInput(password.value, "Password");
    //update input reducers with validation result
    emailDispatch({ type: "validateResult", validateResult: emailValidation });
    passwordDispatch({
      type: "validateResult",
      validateResult: passwordValidation,
    });
    //if input are valid send login request to backend
    if (!emailValidation.isInvalid && !passwordValidation.isInvalid) {
      sendRequest(
        {
          endpoint: "graphql",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: {
            query: `
              mutation Login($email: String!, $password: String!){
                login(userInput: {
                  email: $email,
                  password: $password
                }){
                  refreshToken
                  accessToken
                  user{
                    id
                    email
                    role
                  }
                }
              }
            `,
            variables: {
              email: email.value,
              password: password.value,
            },
          },
        },
        handleLoginResponse
      );
    }
  };

  return (
    <Content style={{ justifyContent: "center" }}>
      <Card hideCardEffecOnMobile={true} style={{ width: "50rem" }}>
        <form onSubmit={handleLogIn}>
          <CardTittle style={{ textAlign: "center" }}>Log in</CardTittle>
          <CardContent>
            {alertErrors.length > 0 && alertErrors}
            <InputText
              value={email.value}
              onChange={handleEmailChange}
              icon="alternate_email"
              placeholder="Email"
              isInvalid={email.isInvalid}
              invalidMessage={email.errorMsg}
            />
            <InputText
              value={password.value}
              onChange={handlePasswordChange}
              icon="lock"
              placeholder="Password"
              isInvalid={password.isInvalid}
              invalidMessage={password.errorMsg}
              type="password"
            />
          </CardContent>
          <CardActions>
            <Button startIcon="person" type="submit">
              Log in
            </Button>
            <Button endIcon="person">Sign Up</Button>
            {isLoading && <Loader size={8}></Loader>}
          </CardActions>
        </form>
      </Card>
    </Content>
  );
};

export default Login;
