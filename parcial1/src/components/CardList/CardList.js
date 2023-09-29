import './CardList.css';
import { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

function CardList({ onCardClick }) {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/cafes")
            .then(response => response.json())
            .then(data => {
                setCards(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <Container fluid className="cardList-container">
            <Row>
                <Table striped bordered hover size='sm' >
                    <thead className='table-dark'>
                        <tr>
                            <th>#</th>
                            <th>Nombre</th>
                            <th>Tipo</th>
                            <th>Region</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cards.map((card, index) => (
                            <tr key={index} onClick={() => onCardClick(card.id)}>
                                <td>{card.id}</td>
                                <td>{card.nombre}</td>
                                <td>{card.tipo}</td>
                                <td>{card.region}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Row>
        </Container>
    );
}
export default CardList;
