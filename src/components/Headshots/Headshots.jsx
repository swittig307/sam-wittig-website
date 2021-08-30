import React from 'react';
import { Container, Carousel } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import Title from '../Title/Title';
import { StaticImage } from 'gatsby-plugin-image';

const Headshots = () => {

  return (
    <section id="headshots" >
      <Container>
        <Fade bottom duration={1000} delay={500} distance="30px">
          <Title title="Headshots" />
          <Carousel>
            <Carousel.Item>
              <div className="carousel-img-container">
                <StaticImage className="d-block w-100" src="../../images/headshot1.jpg" alt="Headshot 1" />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <StaticImage style={{ objectFit: 'contain' }} className="d-block w-100" src="../../images/headshot2.jpg" alt="Headshot 2" />
            </Carousel.Item>
          </Carousel>
        </Fade>
      </Container>
    </section>
  );
};

export default Headshots;
