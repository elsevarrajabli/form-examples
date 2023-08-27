import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

type FormValues = {
  fullname: string;
  username: string;
  email: string;
};

export default function SettingFormValues() {
  const { handleSubmit, register, reset } = useForm<FormValues>();
  const [formValues, setFormValues] = useState<FormValues>();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      const user = await response.json();
      setFormValues({
        fullname: user.name,
        username: user.username,
        email: user.email,
      });
    };

    fetchData();
  }, []);

  useEffect(() => {
    reset(formValues);
  }, [formValues, reset]);

  const handleReset = () => {
    reset();
  };

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
      <Button variant="primary" type="submit" className="mt-3">
        Submit
      </Button>
      <Button
        variant="primary"
        type="button"
        className="ms-3 mt-3"
        onClick={handleReset}
      >
        Reset
      </Button>
    </Form>
  );
}
