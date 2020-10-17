import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Home() {
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
        }}
      >
        home.
      </h1>
      <Container>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((i: number) => {
          return (
            <Row>
              <Col
                style={{
                  backgroundColor: i % 2 === 0 ? "white" : "black",
                }}>1</Col>
                <Col
                style={{
                  backgroundColor: i % 2 === 0 ? "red" : "blue",
                }}>2</Col>
              <Col
                style={{
                  backgroundColor: i % 2 === 0 ? "purple" : "yellow",
                }}>3</Col>
            </Row>
          );
        })}
      </Container>
    </div>
  );
}

export default Home;
