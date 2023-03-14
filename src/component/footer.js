import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../footer.css";
import { GrInstagram } from "react-icons/gr";
import { BsFacebook } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { Row, Col, Container } from "reactstrap";

const footer = () => {
  return (
    

    <div class="div">
      <div className="pl-20 pt-10 flex-initial  mt-4 ">
      <div className='container px-1 mx-auto'>
        <div class="input-group">
          <div>
            <div className="">
              <img src="/image/nttdata.png"></img>
            </div>
            <p className="text-gray-50">
              lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

            <input
              type="text"
              placeholder="E-Mail"
              aria-label="Recipient's username with two button addons"
            />
            <button class="btn btn-outline-secondary" type="button">
              Button
            </button>
          </div>
          <div className="pl-44 mb-10 text-gray-50">
            <h4>Title</h4>
            <h5>Subtitle</h5>
            <h5>Subtitle</h5>
            <h5>Subtitle</h5>
            <h5>Subtitle</h5>
          </div>
          <div className="pl-24 mb-10 text-gray-50">
            <h4>Title</h4>
            <h5>Subtitle</h5>
            <h5>Subtitle</h5>
            <h5>Subtitle</h5>
            <h5>Subtitle</h5>
          </div>
          <div className="pl-24 mb-10 text-gray-50">
            <h4>Title</h4>
            <h5>Subtitle</h5>
            <h5>Subtitle</h5>
            <h5>Subtitle</h5>
            <h5>Subtitle</h5>
          </div>
          </div>
        </div>
      </div>
      <div className="h-12 flex-initial w-full flex items-center justify-center mt-4 border-t border-white pt-4">
  <Container className="flex flex-wrap items-center justify-between w-full px-4">
    <Row className="w-full">
      <Col xs="12" sm="auto" className="flex items-center">
        <p className="text-white mb-0 mr-4">Contact@nttdata.com</p>
      </Col>
      <Col xs="12" sm="auto" className="flex-1 flex items-center">
        <p className="text-white mb-0 mr-4">+905356245678</p>
      </Col>
      <Col xs="12" sm="auto" className="flex items-center ml-auto">
        <div className="flex items-center gap-4">
          <GrInstagram className="text-white" />
          <BsFacebook className="text-white" />
          <FaLinkedin className="text-white" />
        </div>
      </Col>
    </Row>
  </Container>
</div>

    </div>
  );
};

export default footer;
