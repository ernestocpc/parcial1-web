import { Col, Row } from "react-bootstrap";
import "./Header.css";

function Header() {
  return (
    <Row>
      <Col>
        <div className="page-title">
          <span className="text-title">El aroma mágico</span>
        </div>
        <hr className="custom-hr"></hr>
        <img src="./cafe.png" alt="café" className="cafe-image"></img>
        <hr className="custom-hr"></hr>
      </Col>
    </Row>
  );
}

export default Header;
