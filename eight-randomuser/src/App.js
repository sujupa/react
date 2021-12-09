import React, {useState, useEffect} from 'react';
import { Container, Row, Col, Card } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Cards from './Card';
import './App.css';

import Axios from "axios";

function App() {

  const [details, setDetails] = useState({});

  const fetchDetails = async () => {
    const {data} = await Axios.get("https://randomuser.me/api/");
    console.log("response: ", data);

    const detail = data.results[0];

    setDetails(detail);

  }

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <Container fluid className="p-4 bg-primary App">
      <Row>
        <Col md={4} className="offset-md-4 mt-4">
          <Cards detail={details}/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
