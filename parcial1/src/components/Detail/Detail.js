import React, { useEffect, useState } from 'react';
import './Detail.css';

function Detail({id}) {
    const [cafeDetail, setCafeDetail] = useState({});

    useEffect(() => {
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
                    <p className="card-subtitle mb-2 text-muted">{cafeDetail.fecha_cultivo}</p>
                    <img src={cafeDetail.image} alt={cafeDetail.nombre} className="card-img-top" />
                    <div className="card-text">
                        <p className="notas-label">Notas:</p>
                        <p className="notas-text">{cafeDetail.notas}</p>
                    </div>
                    <h4 className="card-text"><strong>Cultivado a una altura de : {cafeDetail.altura}m</strong></h4>
                </div>
            </div>
        </div>
    );
}
export default Detail;