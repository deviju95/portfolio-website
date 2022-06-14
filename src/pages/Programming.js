import React from 'react';
import { CardGroup, Col, Row } from 'react-bootstrap';

import Resume from '../assets/Justin Jang Resume_2022-05.pdf';
import { projectData } from '../data/project-data';
import ProjectCard from '../components/ProjectCard';

const Programming = () => {
  return (
    <>
      <Row className='pb-5 pt-5' id='programming'>
        <Col md={12}>
          {/* Intro */}
          <Col>
            <p>programming</p>
            <h1>
              <mark>Create solutions through coding</mark>
            </h1>
            <p>
              <small>
                I create simply beautiful applications that will make our daily
                life more intuitive and interesting.
              </small>
            </p>
          </Col>
          {/* Full Resume Button */}
          <Col className='mt-4'>
            <a
              className='btn btn-outline-primary btn-sm'
              href={Resume}
              target='_blank'
              rel='noreferrer'
              area-label='Resume'
            >
              View Full Resume
            </a>
          </Col>
          {/* Short Resume */}
          <Col className='mt-4'>
            {/* <h6 className='mt-4'>Work Experience</h6>
            <ul className='list_style link_hover'>
              <li>
                <small>
                  <a href='/' target='_blank' rel='noreferrer'>
                    _____
                  </a>
                  :: role
                  <small className='text-muted'>, Date -</small>
                </small>
              </li>
            </ul> */}
            <h6 className='mt-4'>Achievements</h6>
            <ul className='list_style link_hover'>
              <li>
                <small>
                  <a
                    href='https://socalkgroup.org/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    SoCal K-Group Hackathon
                  </a>
                  :: Gold Coin
                  <small className='text-muted'>, 2021.11</small>
                </small>
              </li>
            </ul>
          </Col>
          {/* Project Cards */}
          <Col className='mt-4 project__card-width'>
            <h6 className='mb-3'>projects</h6>
            <Row md={1} className='g-4'>
              {projectData.map((project) => (
                <CardGroup key={project.id}>
                  <ProjectCard project={project} />
                </CardGroup>
              ))}
            </Row>
          </Col>
        </Col>
      </Row>
    </>
  );
};

export default Programming;