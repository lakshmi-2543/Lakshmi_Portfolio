import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import student_dashboard from "../../Assets/Projects/student_dashboard.jpg"
import library from "../../Assets/Projects/library.jpg"


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={student_dashboard}
              isBlog={false}
              title="Zen Student Dashboard"
              description=" A responsive and dynamic Student Dashboard project made up using Reactjs, nodejs & Mongodb.The Student Dashboard, is the page where students can login and view their courses and course progress, task details and the certificates and achievements they have earned."
              ghLink="https://github.com/lakshmi-2543/stu-tea"
              demoLink="https://stupendous-starlight-7a8eb7.netlify.app/"
            />
          </Col>

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={library}
              isBlog={false}
              title="Library Management"
              description="The application I made is a simple library management react application with CRUD operations.A responsive and dynamic library management project made up using Reactjs & bootstrap"
              ghLink="https://github.com/lakshmi-2543/Library"
              demoLink="https://spiffy-strudel-27f9b1.netlify.app/"
            />
          </Col>
          </Row>
      </Container>
    </Container>
  );
}

export default Projects;
