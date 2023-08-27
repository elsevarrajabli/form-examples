import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

type FormValues = {
  fullname: string;
  username: string;
  email: string;
  address: {
    street: string;
    city: string;
  };
};

export default function NestedObjects() {
  const { handleSubmit, register } = useForm<FormValues>();

  const onSubmit = (formValues: FormValues) => {
    console.log(formValues);
  };

  return (
    <Form noValidate onSubmit={handleSubmit(onSubmit)}>
      <Form.Group controlId="fullname" className="mt-3">
        <Form.Label>Full Name</Form.Label>
        <Form.Control {...register("fullname")} />
      </Form.Group>
      <Form.Group controlId="username" className="mt-3">
        <Form.Label>Username</Form.Label>
        <Form.Control {...register("username")} />
      </Form.Group>
      <Form.Group controlId="email" className="mt-3">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" {...register("email")} />
      </Form.Group>
      <Form.Group controlId="street" className="mt-3">
        <Form.Label>Street</Form.Label>
        <Form.Control {...register("address.street")} />
      </Form.Group>
      <Form.Group controlId="city" className="mt-3">
        <Form.Label>City</Form.Label>
        <Form.Control {...register("address.city")} />
      </Form.Group>
      <Button variant="primary" type="submit" className="mt-3">
        Submit
      </Button>
    </Form>
  );
}
