import "../App.css";
import HomeCarousel from "../HomeCarousel/HomeCarousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container } from "react-bootstrap";
import GridCard from "../components/GridCard";



function App() {
  return (
    <>
      <Container fluid>
        <Row className="Carousel">
          <Col>
              <HomeCarousel />
          </Col>
        </Row>
<div className="introduce"> Kaipaatko magiaa arkeesi? <br></br>Verkkokaupastamme löydät maagisen hyviä tuotteita arjen jokaiseen spesiaali hetkeen!<br></br> Tervetuloa ostoksille!</div>

<div className="gridTitle">Suosituimpia tuotteitamme</div>


          <Col>
              <GridCard />
          </Col>
     
      </Container>
    </>
  );
}

export default App;