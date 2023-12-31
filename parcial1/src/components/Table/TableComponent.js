import './TableComponent.css';
import { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { FormattedMessage } from 'react-intl';

function TableComponent({ onCardClick }) {
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
        <Container fluid className="table-container">
            <Row>
                <Table hover size='lg' >
                    <thead className='table-dark'>
                        <tr>
                            <th>#</th>
                            <th>
                                <FormattedMessage id="Name"/>
                            </th>
                            <th>
                                <FormattedMessage id="Type"/>
                            </th>
                            <th>
                                <FormattedMessage id="Region"/>
                            </th>
                        </tr>
                    </thead>
                    <tbody className='table-body'>
                        {cards.map((card, index) => (
                            <tr key={index} onClick={() => onCardClick(card.id)}>
                                <td><strong>{card.id}</strong></td>
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
export default TableComponent;
