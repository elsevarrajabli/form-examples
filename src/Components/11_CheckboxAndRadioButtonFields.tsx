import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

type FormValues = {
  fullname: string;
  username: string;
  email: string;
  gender: string;
  isSubscribedToNewsletter: boolean;
};

export default function CheckboxAndRadioButtonFields() {
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
      <Form.Group controlId="gender" className="mt-3">
        <Form.Check
          type="radio"
          value="male"
          label="Male"
          id="genderMale"
          {...register("gender")}
        />
        <Form.Check
          type="radio"
          value="female"
          label="Female"
          id="genderFemale"
          {...register("gender")}
        />
      </Form.Group>
      <Form.Group controlId="isSubscribedToNewsletter" className="mt-3">
        <Form.Check
          type="checkbox"
          label="Subscribe to newsletter"
          {...register("isSubscribedToNewsletter")}
        />
      </Form.Group>
      <Button variant="primary" type="submit" className="mt-3">
        Submit
      </Button>
    </Form>
  );
}
