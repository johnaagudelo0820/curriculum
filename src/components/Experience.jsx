import React from 'react';

const Experience = props => (
  <div className="Experience">
    <div className="Experience-container"> 
      {props.data.map((exp, index) => (
        <div key={index} className="Experience-item">
          <h3>{exp.company}</h3>
          <p>{exp.jobTitle}</p>
          <p>{exp.jobDescription}</p>
          <p>{exp.startDate} - {exp.endDate}</p>
        </div>
      ))}
    </div>
  </div>
)

export default Experience;