import "./Home.css";
import TableComponent from "../Table/TableComponent";
import Detail from "../Detail/Detail";
import { Col, Container, Row } from "react-bootstrap";
import { useState } from "react";

function Home() {
  const [visible, setVisible] = useState(false);
  const [detailId, setDetailId] = useState(null);

  // Function to handle card click
  const onCardClick = (cardId) => {
    setDetailId(cardId);
    setVisible(true);
  };

  return (
      <Container>
        <Row>
          <Col md={{ span: 8 }}>
            <TableComponent onCardClick={onCardClick} />
          </Col>
          <Col>{visible && <Detail id={detailId} />}</Col>
        </Row>
      </Container>
  );
}
export default Home;
