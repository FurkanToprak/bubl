import React from "react";
import {
  Form,
  Container,
  Row,
  Col,
  OverlayTrigger,
  Tooltip,
  Button,
} from "react-bootstrap";

export default function GiphyConfigure() {
  return (
    <div style={{ marginTop: 10 }}>
      <Form>
        <Container>
          <Form.Group>
            <Row>
              <Col>
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder="search for giphy posts."
                />
              </Col>
              <Col md="auto">
                <OverlayTrigger
                  placement="bottom"
                  delay={{ show: 250, hide: 400 }}
                  overlay={
                    <Tooltip id="button-tooltip">
                      showing top 10 results.
                    </Tooltip>
                  }
                >
                  <Button
                    style={{ backgroundColor: "black" }}
                    type="submit"
                    size="lg"
                  >
                    search.
                  </Button>
                </OverlayTrigger>
              </Col>
            </Row>
          </Form.Group>
        </Container>
      </Form>
    </div>
  );
}
