import React from 'react';

const Education = props => (
  <div className="Education">
    <div className="Education-container">
      {props.data.map((edu, index) => (
        <div key={index} className="Education-item">
          <h3>
            {edu.degree} {edu.institution}
            <span>{edu.starDate} - {edu.endDate}</span>
          </h3>
          <p>Aprendi muchas cosas</p>
        </div>
      ))} 
    </div>
  </div>
)

export default Education;