import React, {useEffect, useState} from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function App() {
  const [toyData, setToyData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch('https://localhost:7035/api/toys/');
      const toyResults = await response.json();
      setToyData(toyResults);
    }
    getData();
  }, []);

  const alertBox = (e) => {
    window.alert("Exchange request sent!");
  }

  return (
    <>
    <div className="App">
    <Container>
    <div className='toy-listing'>   
      <Row>
      {toyData.map((w, i) =>
      <Col>
        <Card style={{ width: '18rem' }} className='card'>
          <Card.Img variant="top" className='pics' src={w.imageUrl} />
          <Card.Body>
            <Card.Title>{w.name}</Card.Title>
            <Card.Text>
              {w.description}
            </Card.Text>
            <Button variant="primary" onClick={alertBox}>Exchange</Button>
          </Card.Body>
        </Card>
      </Col>
      )}
      </Row>
    </div>
  </Container>
    </div></>
  );
}

export default App;