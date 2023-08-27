import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

type FormValues = {
  fullName: string;
  username: string;
  email: string;
  preferredContactMethod: string;
  phone: string;
};

export default function ConditionalRender() {
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (formValues: FormValues) => {
    console.log(formValues);
  };

  return (
    <Form noValidate onSubmit={handleSubmit(onSubmit)}>
      <Form.Group controlId="fullName" className="mt-3">
        <Form.Label>Full Name</Form.Label>
        <Form.Control
          {...register("fullName", {
            required: "Full Name is required.",
          })}
        />
        <Form.Text className="text-danger">
          {errors.fullName?.message}
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
            required: "Email is required.",
            pattern: {
              value:
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/,
              message: "Invalid email format.",
            },
          })}
        />
        <Form.Text className="text-danger">{errors.email?.message}</Form.Text>
      </Form.Group>
      <Form.Group controlId="preferredContactMethod" className="mt-3">
        <Form.Label>Preferred contact method</Form.Label>
        <Form.Select {...register("preferredContactMethod")}>
          <option value="email">Email</option>
          <option value="phone">Phone</option>
        </Form.Select>
      </Form.Group>
      {watch("preferredContactMethod") === "phone" && (
        <Form.Group controlId="email" className="mt-3">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="phone"
            {...register("phone", {
              required: "Phone is required.",
            })}
          />
          <Form.Text className="text-danger">{errors.phone?.message}</Form.Text>
        </Form.Group>
      )}
      <Button variant="primary" type="submit" className="mt-3">
        Submit
      </Button>
    </Form>
  );
}
