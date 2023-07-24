import Card from 'react-bootstrap/Card';

function TextCard({cardclassName, titleclassName, textclassName, showElement }) {
  return (
    <div className={cardclassName} >
      <Card.Body>
        <Card.Title className={titleclassName}>Welcome to AVAA!</Card.Title>
        <Card.Text className={textclassName}>
        AVAA is an advanced virtual assistant software designed to streamline and enhance both your professional 
        and personal life. Powered by cutting-edge artificial intelligence and machine learning algorithms, 
        AVAA utilizes your personal data to provide tailored assistance and support, ensuring maximum productivity and 
        efficiency. Benefits of AVAA includes:

        <br></br>
        1. Personalized Task Management
        <br></br>
        2. Contextual Information Retrieval
        <br></br>
        3. Smart Work Automation
        <br></br>
        4. Life Organization and Balance 
        </Card.Text>
        {showElement ? <Card.Link className='textcard-btn hidden' href="/chatbot">Explore</Card.Link> : <Card.Link className='d-none textcard-btn hidden' href="#">Card Link</Card.Link>}
      </Card.Body>
    </div>
  );
}

export default TextCard;