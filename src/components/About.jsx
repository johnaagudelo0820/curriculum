import React from 'react';
import Social from './Social';
import style from 'styled-components';

const AboutStyle = style.div`
  text-align: center;
`;

const About = props => (
  <AboutStyle>
    <div className="About-container">
      <div className="About-avatar">
        <figure>
          <img src={props.avatar} alt={props.name}/>
        </figure>
      </div>
      <div className="About-name">
        <h2>{props.name}</h2>
      </div>
      <div className="About-profession">
        <p>{props.profession}</p>
      </div>
      <div className="About-desc">
        <p>{props.bio}</p>
      </div>
      <div className="About-location">
        <p>{props.address}</p>
      </div>
      <div className="About-social">
       <Social social={props.social} />
      </div>
    </div>
  </AboutStyle>
);

export default About;