import { Container } from "react-bootstrap";
import img from "../assets/www.jpg";

import "./Strip.css";
const Strip = () => {
  return (
    <Container className="Containerdiv">
      <img src={img} alt="tt" className="contImg" />
      <div style={{ width: "90%", height: "100px" }}>
        <h4 style={{ marginTop: "20px" }}>satesto</h4>
        <p>xhhb</p>
      </div>
    </Container>
  );
};

export default Strip;
