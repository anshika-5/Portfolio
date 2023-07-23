import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import StockTrendPrediction from "../../Assets/Projects/StockTrendPrediction.png";
import Digit from "../../Assets/Projects/Digit.png";
import Movie from "../../Assets/Projects/Movie.png";
import Yoga from "../../Assets/Projects/Yoga.png";
import Diabetes from "../../Assets/Projects/Diabetes.jpeg";
import Helpright from "../../Assets/Projects/Helpright.png";

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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Yoga}
              isBlog={false}
              title="YogaMaster - AI Yoga Trainer"
              description="A realtime AI-based Yoga Trainer, available 24/7, detects and evaluates yoga poses in real-time, providing accurate
              monitoring of one’s practice."
              ghLink="https://github.com/anshika-5/YogaMaster---AI-Yoga-Trainer"
              //demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Helpright}
              isBlog={false}
              title="HelpRight"
              description="Developed a user-friendly web application to connect volunteers, NGOs, and individuals in need through a post section, facilitating quick and effective communication."
              ghLink="https://github.com/anshika-5/HelpRight---Web-Application"
              //demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Movie}
              isBlog={false}
              title="CineSuggest - Movie Recommender System"
              description="Developed it using collaborative filtering techniques,achieving 80\% accuracy on the testing set to provide personalized movie recommendations to users."
              ghLink="https://github.com/anshika-5/Movie-Recommender-System"
              //demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={StockTrendPrediction}
              isBlog={false}
              title="Stock Trend Prediction"
              description="Developing a precise machine learning model to forecast stock trends using historical data, technical indicators, and market sentiment. The project aims to empower investors and traders with actionable insights to make informed decisions and identify potential opportunities while managing risks in the stock market."
              ghLink="https://github.com/anshika-5/Stock-Trend-Prediction---Web-Application-"
              //demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Diabetes}
              isBlog={false}
              title="Diabetes Prediction using Machine Learning"
              description="Developing a model to predict diabetes risk based on health data, aiding early detection and proactive interventions for better healthcare outcomes."
              ghLink="https://github.com/anshika-5/Diabetes-Prediction-using-Machine-Learning"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Digit}
              isBlog={false}
              title="Handwritten Digit Recognition"
              description="Creating a system to accurately recognize handwritten digits, enabling automated processing of handwritten content for various applications."
              ghLink="https://github.com/anshika-5/Handwritten-Digit-Recognition"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
