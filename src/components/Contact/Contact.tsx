
import React from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import Title from '../Title/Title';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faEnvelope, faInstagram, faTiktok, faMobileAlt);

const Contact = () => {
  return (
    <Container id="contact">
      <Fade bottom duration={1000} delay={500} distance="30px">
        <Title title="Contact" />
        <div className="social-links">
          <FontAwesomeIcon icon={['fas', 'mobile-alt']} />
          <a href="tel:307-413-1379">(307) 413-1379</a>

          <FontAwesomeIcon icon={["far", "envelope"]} />
          <a href="mailto:samanthawittig2@gmail.com">samanthawittig2@gmail.com</a>

          <FontAwesomeIcon icon={["fab", "instagram"]} />
          <a href="https://www.instagram.com/sam.wittig">@sam.wittig</a>

          <FontAwesomeIcon icon={['fab', 'tiktok']} />
          <a href="https://tiktok.com/ZMdebdRSv">@swittig</a>
        </div>
      </Fade>
    </Container>
  );
};

export default Contact;
