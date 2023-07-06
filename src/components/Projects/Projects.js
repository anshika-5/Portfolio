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
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/anshika-5/HelpRight---Web-Application"
              //demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Movie}
              isBlog={false}
              title="CineSuggest - Movie Recommender System"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/anshika-5/Movie-Recommender-System"
              //demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={StockTrendPrediction}
              isBlog={false}
              title="Stock Trend Prediction"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/anshika-5/Stock-Trend-Prediction---Web-Application-"
              //demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Diabetes}
              isBlog={false}
              title="Diabetes Prediction using Machine Learning"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/anshika-5/Diabetes-Prediction-using-Machine-Learning"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Digit}
              isBlog={false}
              title="Handwritten Digit Recognition"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
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
