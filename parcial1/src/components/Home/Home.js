import "./Home.css";
import CardList from "../CardList/CardList";
import Detail from "../Detail/Detail";
import { Col, Container, Row } from "react-bootstrap";
import { useState } from "react";
import Login from "../Login/Login";
import { FormattedMessage } from "react-intl";

function Home() {
  const [visible, setVisible] = useState(false);
  const [userLogged, setUserLogged] = useState(true);
  const [detailId, setDetailId] = useState(null);

  const onLoginSuccess = () => {
    setUserLogged(false);
  };

  // Function to handle card click
  const onCardClick = (cardId) => {
    setDetailId(cardId);
    setVisible(true);
  };

  return (
    <>
      <Container>
        <div className="page-title">
          <span className="text-title">El aroma magico</span>
        </div>
        <hr></hr>
        <img src="./cafe.png" alt="cafe" className="cafe-image"></img>
        <hr></hr>
        <Row>
          <Col md={{ offset: 2, span: 8 }}>
            {userLogged && <Login onLoginSuccess={onLoginSuccess} />}
          </Col>
          <Col md= {{span: 8}}>{!userLogged && <CardList onCardClick={onCardClick} />}</Col>
          <Col>{visible && <Detail id={detailId} />}</Col>
        </Row>
      </Container>
      <Container className="footer-container">
        <Row className="page-footer">
          <footer>
          <FormattedMessage id="footer"/>: +57 3102105253 - info@elaromamagico.com - @elaromamagico
          </footer>
        </Row>
      </Container>
    </>
  );
}
export default Home;
