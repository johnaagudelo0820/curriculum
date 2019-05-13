import React from 'react';

const Certificates = props => (
  <div className="Certificates">
    <div className="Certificates-container"> 
     {props.data.map((cer,index) => (
        <div key={index} className="Certificates-item">
          <h3>{cer.name}</h3>
          <p>{cer.institution}</p>
          <p>{cer.description}</p>
          <p>{cer.date}</p>
        </div>
     ))}
    </div>
  </div>
)

export default Certificates;