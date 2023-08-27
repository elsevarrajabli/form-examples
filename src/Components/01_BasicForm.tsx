import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

type FormValues = {
  fullname: string;
  username: string;
  email: string;
};

export default function BasicForm() {
  const { handleSubmit, register, control } = useForm<FormValues>();

  const onSubmit = (formValues: FormValues) => {
    console.log(formValues);
  };

  return (
    <>
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
        <Button variant="primary" type="submit" className="mt-3">
          Submit
        </Button>
      </Form>
      <DevTool control={control} />
    </>
  );
}
