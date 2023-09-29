import './Login.css';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [formValues, setFormValues] = useState({ email: "", password: "", favClass: "1" })
  const [validationStates, setValidationStates] = useState({
    email: true,
    password: true,
  });
  const navigate = useNavigate();

  const handleLogin = (() => {
    navigate('/home');
  });

  const handleEmailChange = ((e) => {
    const emailValue = e.target.value;
    setFormValues({ ...formValues, email: emailValue });
  });

  const handleEmailValidation = (() => {
    const emailValue = formValues.email;
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);
    setValidationStates({ ...validationStates, email: isValidEmail });
    return isValidEmail;
  })

  const handlePasswordChange = ((e) => {
    const passwordValue = e.target.value;
    setFormValues({ ...formValues, password: passwordValue });
    const passwordPattern = /^(?=.*[a-z])(?=.*[0-9])(?=.{6,})/;
    const isValidPassword = passwordPattern.test(passwordValue);
    setValidationStates({ ...validationStates, password: isValidPassword });
  });

  const handleSelectChange = ((e) => {
    setFormValues({ ...formValues, favClass: e.target.value })
  });

  const clickSubmit = () => {
    const isValidEmail = handleEmailValidation();
    if (true) {
      // Metodo POST
      const URL = 'http://localhost:3001/login';
      const data = {
        login: formValues.email,
        password: formValues.password,
      };
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      };
      fetch(URL, requestOptions)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (data.status === 'success') {
            alert('Bienvenido! ');
            // localStorage.setItem('user', JSON.stringify(data.user));
            handleLogin();
          } else {
            alert('Usuario o contraseña incorrectos');
          }
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
      // handleLogin();

    } else {
      alert('Porfavor corregir los errores del formulario antes de enviar');
    }
  };


  useEffect(() => {
  }, [validationStates.email]);

  return (
    <div
      className="component-container modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog
        show={true}
        backdrop="static"
        centered
        size='lg'
        keyboard={false}
      >
        <Modal.Body>
          <div className='login-container'>
            <div className="login-form">
              <h1>Inicio de sesion</h1>
              <Form>
                <Form.Group className="form-group" controlId="formBasicEmail">
                  <Form.Label >Nombre de usuario</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    onChange={handleEmailChange}
                    value={formValues.email}
                    isInvalid={!validationStates.email}
                  />
                  {/* {!validationStates.email &&
                    <Form.Control.Feedback type="invalid">
                      Porfavor ingresar direccion de correo valida.
                    </Form.Control.Feedback>} */}
                </Form.Group>
                <Form.Group className="form-group" controlId="formBasicPassword">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    onChange={handlePasswordChange}
                    value={formValues.password}
                    // isInvalid={!validationStates.password}
                  />
                  {/* <Form.Control.Feedback type="invalid">La contraseña deberia tener al menos 6 caracteres y tener numeros y letras</Form.Control.Feedback> */}
                </Form.Group>
                <Button variant="success" className="green-button" onClick={clickSubmit}>
                  Ingresar
                </Button>
                <Button variant="danger" className="red-button" onClick={clickSubmit}>
                  Cancelar
                </Button>
              </Form>
            </div>
          </div>
        </Modal.Body>
      </Modal.Dialog>
    </div>
  );
}

export default Login;
