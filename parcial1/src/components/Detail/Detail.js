import React, { useEffect, useState } from "react";
import "./Detail.css";
import { FormattedMessage } from "react-intl";
import { FormattedDate } from "react-intl";
function Detail({ id }) {
  const [cafeDetail, setCafeDetail] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3001/cafes/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setCafeDetail(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);

  return (
    <div className="card">
      <h4 className="card-title">
        <strong>{cafeDetail.nombre}</strong>
      </h4>
      <p className="card-subtitle text-muted">
        {" "}
        <FormattedDate
          value={new Date(cafeDetail.fecha_cultivo)}
          year="numeric"
          month="numeric"
          day="numeric"
        />
      </p>
      <img
        src={cafeDetail.imagen}
        alt={cafeDetail.nombre}
        className="card-img"
      />
      <div className="card-text">
        <p className="notas-label">
          <FormattedMessage id="notes" />
        </p>
        <p className="notas-text">{cafeDetail.notas}</p>
      </div>
      <h4 className="card-text">
        <strong>
          <FormattedMessage id="altitude" /> 
           {cafeDetail.altura} <FormattedMessage id="seaLevel" />
        </strong>
      </h4>
    </div>
  );
}
export default Detail;
//
