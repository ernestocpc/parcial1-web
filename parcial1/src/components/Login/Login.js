import "./Login.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FormattedMessage } from "react-intl";
import { useIntl } from 'react-intl'; 

function Login({ onLoginSuccess }) {
  const intl = useIntl();
  const [loginFailed, setLoginFailed] = useState(false);
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    favClass: "1",
  });

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setFormValues({ ...formValues, email: emailValue });
  };

  const handlePasswordChange = (e) => {
    const passwordValue = e.target.value;
    setFormValues({ ...formValues, password: passwordValue });
  };

  const handleCancelClick = () => {
    // Reset form values to their initial state
    setFormValues({
      email: "",
      password: "",
      favClass: "1",
    });
  };

  const clickSubmit = () => {
    // Metodo POST
    const URL = "http://localhost:3001/login";
    const data = {
      login: formValues.email,
      password: formValues.password,
    };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    fetch(URL, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.status === "success") {
          alert(intl.formatMessage({id: "welcome"}));
          onLoginSuccess();
        } else {
          setLoginFailed(true);
          alert(intl.formatMessage({id: "loginError"}));
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <>
      <div className="login-tile">
        <p>
          <strong>
            <FormattedMessage id="login" />
          </strong>
        </p>
      </div>
      <div className="login-container">
        <Form className="form-component">
          <Form.Group className="form-group" controlId="formBasicEmail">
            <Form.Label>
              <strong>
                <FormattedMessage id="user" />
              </strong>
            </Form.Label>
            <Form.Control
              type="email"
              onChange={handleEmailChange}
              value={formValues.email}
              className="form-control"
              isInvalid={loginFailed}
              style={{ backgroundColor: "#D9D9D9", borderRadius: "0%" }}
            />
          </Form.Group>
          <Form.Group className="form-group" controlId="formBasicPassword">
            <Form.Label>
              <strong>
                <FormattedMessage id="password" />
              </strong>
            </Form.Label>
            <Form.Control
              type="password"
              onChange={handlePasswordChange}
              value={formValues.password}
              className="form-control"
              isInvalid={loginFailed}
              style={{ backgroundColor: "#D9D9D9", borderRadius: "0%" }}
            />
          </Form.Group>
          <div class="button-container">
            <Button className="button" id="login-button" onClick={clickSubmit}>
              <FormattedMessage id="submit" />
            </Button>
            <Button
              className="button"
              id="cancel-button"
              onClick={handleCancelClick}
            >
              <FormattedMessage id="cancel" />
            </Button>
          </div>
          {loginFailed && (
            <p className="auth-error">
              <FormattedMessage id="error" />
            </p>
          )}
        </Form>
      </div>
    </>
  );
}

export default Login;
