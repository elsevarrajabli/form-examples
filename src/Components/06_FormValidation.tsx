import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

type FormValues = {
  fullname: string;
  username: string;
  email: string;
};

export default function FormValidation() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (formValues: FormValues) => {
    console.log(formValues);
  };

  return (
    <Form noValidate onSubmit={handleSubmit(onSubmit)}>
      <Form.Group controlId="fullname" className="mt-3">
        <Form.Label>Full Name</Form.Label>
        <Form.Control
          {...register("fullname", {
            required: {
              value: true,
              message: "Full Name is required.",
            },
          })}
        />
        <Form.Text className="text-danger">
          {errors.fullname?.message}
        </Form.Text>
      </Form.Group>
      <Form.Group controlId="username" className="mt-3">
        <Form.Label>Username</Form.Label>
        <Form.Control
          {...register("username", {
            required: "Username is required.",
          })}
        />
        <Form.Text className="text-danger">
          {errors.username?.message}
        </Form.Text>
      </Form.Group>
      <Form.Group controlId="email" className="mt-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          {...register("email", {
            required: {
              value: true,
              message: "Email is required.",
            },
            pattern: {
              value:
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/,
              message: "Invalid email format.",
            },
            validate: {
              allowed: (value) => {
                return (
                  !value.endsWith("baddomain.com") || "Invalid email domain."
                );
              },
              uniqueAsync: async (value) => {
                const response = await fetch(
                  `https://jsonplaceholder.typicode.com/users?email=${value}`
                );
                const users = await response.json();
                return users.length === 0 || "Email is already registered.";
              },
            },
          })}
        />
        <Form.Text className="text-danger">{errors.email?.message}</Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit" className="mt-3">
        Submit
      </Button>
    </Form>
  );
}
