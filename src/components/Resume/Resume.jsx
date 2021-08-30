import React from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import Title from '../Title/Title';
import { Document, Page, pdfjs } from 'react-pdf';
import resume from '../../images/resume.pdf';

const Resume = () => {
  pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  const openResume = () => window.open(resume, "_blank");
  return (
    <section id="resume">
      <Container>
        <Fade bottom duration={1000} delay={500} distance="30px">
          <Title title="Resume" />
          <div className="resume-container" role="button" onClick={openResume} onKeyDown={openResume} tabIndex={0}>
            <Document file={resume}>
              <Page pageNumber={1} />
            </Document>
            <a className="resume-button" href={resume} download="My Resume" target="_blank" rel="noreferrer">
              DOWNLOAD RESUME
            </a>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Resume;
