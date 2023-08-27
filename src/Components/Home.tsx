import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <Nav className="flex-column text-center">
      <NavLink to="/basic-form" className="nav-link">
        Basic Form
      </NavLink>
      <NavLink to="/nested-objects" className="nav-link">
        Nested Objects
      </NavLink>
      <NavLink to="/setting-default-values" className="nav-link">
        Setting Default Values
      </NavLink>
      <NavLink to="/setting-form-values" className="nav-link">
        Setting Form Values
      </NavLink>
      <NavLink to="/setting-field-value" className="nav-link">
        Setting Field Value
      </NavLink>
      <NavLink to="/form-validation" className="nav-link">
        Form Validation
      </NavLink>
      <NavLink to="/setting-errors" className="nav-link">
        Setting Errors
      </NavLink>
      <NavLink to="/conditional-render" className="nav-link">
        Conditional Render
      </NavLink>
      <NavLink to="/conditional-enabling" className="nav-link">
        Conditional Enabling
      </NavLink>
      <NavLink to="/arrays-and-dynamic-fields" className="nav-link">
        Arrays and Dynamic Fields
      </NavLink>
      <NavLink to="/checkbox-and-radio-button-fields" className="nav-link">
        Checkbox and Radio Button Fields
      </NavLink>
    </Nav>
  );
}
