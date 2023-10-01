import { Container, Row } from "react-bootstrap";
import "./Footer.css";
import { FormattedMessage } from "react-intl";

function Footer() {
  return (
    <Container className="footer-container">
      <Row className="page-footer">
        <footer>
          <FormattedMessage id="footer" />: +57 3102105253 -
          info@elaromamagico.com - @elaromamagico
        </footer>
      </Row>
    </Container>
  );
}
export default Footer;
