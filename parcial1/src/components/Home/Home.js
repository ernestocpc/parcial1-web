import { useNavigate } from 'react-router-dom';
import './Home.css'
import CardList from '../Cards/CardList/CardList';
import Detail from '../Detail/Detail';
import { Col, Container, Row } from 'react-bootstrap';
import { useState } from 'react';

function Home() {
    const [visible, setVisible] = useState(false);
    const navigate = useNavigate();
    const [detailId, setDetailId] = useState(null);

    const clickLogin = () => {
        navigate('/login');
    }

    // Function to handle card click
    const onCardClick = (cardId) => {
        setDetailId(cardId)
        setVisible(true);
    };

    return (
        <Container>
            <h1>El aroma magico</h1>
            <hr></hr>
            <p>Proximamente una imagen</p>
            <hr></hr>
            <Row>
                <Col>
                    <CardList onCardClick={onCardClick} />
                </Col>
                <Col>
                    {visible && <Detail id={detailId} />}
                </Col>
            </Row>
        </Container>
    );
}
export default Home;