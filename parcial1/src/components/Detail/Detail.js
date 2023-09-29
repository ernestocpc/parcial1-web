import React, { useEffect, useState } from 'react';
import './Detail.css';

function Detail({id}) {
    const [cafeDetail, setCafeDetail] = useState({});
    const [role, setRole] = useState(true);


    useEffect(() => {
        console.log("Detalle de " , id)
        fetch(`http://localhost:3001/cafes/${id}`)
            .then(response => response.json())
            .then(data => {
                setCafeDetail(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [id]);

    return (
        <div className="card-container">
            <div className="card">
                <div className="card-body text-center">
                    <h4 className="card-title">{cafeDetail.nombre}</h4>
                    <p className="card-subtitle mb-2 text-muted">{cafeDetail.date}</p>
                    <img src={cafeDetail.image} alt={cafeDetail.nombre} className="card-img-top" />
                    <div className="card-text">
                        <p className="notas-label">Notas:</p>
                        <p className="notas-text">{cafeDetail.notas}</p>
                    </div>
                    <h4 className="card-text"><strong>{cafeDetail.region}</strong></h4>
                </div>
            </div>
        </div>
    );
}
export default Detail;