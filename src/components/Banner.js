import {Row, Col} from 'react-bootstrap';
import "./Banner.css"

const Banner = () => {
  return (
    <Row id="banner"  className="d-flex justify-content-center align-items-center" fluid>
      {/* <Col className="text-center">
        <h1></h1>
      </Col> */}
      <h1 className="text-center">Tutorial UI</h1>
    </Row>
  );
};

export default Banner;