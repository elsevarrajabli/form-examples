import { Container, Navbar } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand as={NavLink} to="/">
            React Hook Form
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Container fluid className="p-2">
        <div className="d-flex justify-content-center">
          <div className="col-4">
            <Outlet></Outlet>
          </div>
        </div>
      </Container>
    </>
  );
}
