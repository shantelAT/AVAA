import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TextCard from "./TextCard";
import ImageCard from "./ImageCard";
import React, { useEffect } from 'react';

function ParagraphGridImageGrid() {

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 20) {
        document.querySelector('.navbar').classList.add('sticky');
      } else {
        document.querySelector('.navbar').classList.remove('sticky');
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className='aboutus-main'> 
    <div className='aboutus'>
      <Row className='aboutus-row'>
        <Col>
        <TextCard cardclassName= "textcard-aboutus" titleclassName="textcard-title" textclassName= "textcard-text" showElement ></TextCard>
        </Col>
        <Col>
        <ImageCard cardBody={"imagecard-carousel"} cardImage={"imagecard-image-about"}  src={"weightinhand.svg"}/>
        </Col>
      </Row>
    </div>
    </div>
  );
}

export default ParagraphGridImageGrid;