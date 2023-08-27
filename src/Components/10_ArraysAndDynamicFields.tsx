import { Button, Form } from "react-bootstrap";
import { useFieldArray, useForm } from "react-hook-form";

type FormValues = {
  fullname: string;
  username: string;
  phoneNumbers: { number: string }[];
};

export default function ArraysAndDynamicFields() {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      fullname: "John Doe",
      username: "johndoe",
      phoneNumbers: [
        {
          number: "",
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "phoneNumbers",
    rules: {
      minLength: 1,
    },
  });

  const onSubmit = (formValues: FormValues) => {
    console.log(formValues);
  };

  return (
    <Form noValidate onSubmit={handleSubmit(onSubmit)}>
      <Form.Group controlId="fullname" className="mt-3">
        <Form.Label>Full Name</Form.Label>
        <Form.Control
          {...register("fullname", {
            required: "Full Name is required.",
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
      <Form.Group controlId="phoneNumberss" className="mt-3">
        <Form.Label>Phone numbers</Form.Label>
        {fields.map((field, index) => {
          return (
            <div key={field.id} className="mb-3">
              <div className="d-flex gap-3">
                <Form.Control
                  type="text"
                  key={field.id}
                  {...register(`phoneNumbers.${index}.number`, {
                    required: "Phone is required.",
                  })}
                />
                {index > 0 && (
                  <Button
                    variant="danger"
                    type="button"
                    onClick={() => remove(index)}
                  >
                    Remove
                  </Button>
                )}
              </div>
              <Form.Text className="text-danger">
                {errors.phoneNumbers?.[index]?.number?.message}
              </Form.Text>
            </div>
          );
        })}
        <div className="d-flex justify-content-center">
          <Button
            variant="primary"
            type="button"
            className="mt-2"
            onClick={() => append({ number: "" })}
          >
            Add phone number
          </Button>
        </div>
      </Form.Group>
      <Button variant="primary" type="submit" className="mt-3">
        Submit
      </Button>
    </Form>
  );
}
