import React from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import Title from '../Title/Title';

const Video = () => {
  return (
    <section id="video">
      <Container>
        <Fade bottom duration={1000} delay={500} distance="30px">
          <Title title="Video" />
          <div className="video-container">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/zOWU5LBymmo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Video;
