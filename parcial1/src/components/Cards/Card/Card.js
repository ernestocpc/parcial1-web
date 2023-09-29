import './Card.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function CardElement({id, title, summary, image}) {
    // const navegate = useNavigate();

    // const handleClick = (id) => {
    //     // navegate(`/detail/${id}`);
    //     console.log(id);
    // }
    // onClick={() =>handleClick(id)}
    return (
        <Card className='card-element' >
            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpPaEUzq1x3zD6wgpWU35q_7JSdjAUrRYnfIVWUc3n_GK7yrfCye9aE8B5io5YVkuVdUU&usqp=CAU" />
            <Card.Body>
                <Card.Title className='card-title'>{title}</Card.Title>
                <Card.Text className='card-summary'>
                    {summary}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}
export default CardElement;