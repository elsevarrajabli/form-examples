import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

type FormValues = {
  file: File;
};

export default function SettingErrors() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setError,
  } = useForm<FormValues>();

  const onSubmit = (formValues: FormValues) => {
    // simulate async api call with set timeout
    setTimeout(() => {
      setError("file", { message: "The file could not be empty." });
    }, 1000);
  };

  return (
    <Form noValidate onSubmit={handleSubmit(onSubmit)}>
      <Form.Group controlId="file" className="mt-3">
        <Form.Label>File</Form.Label>
        <Form.Control
          type="file"
          {...register("file", {
            required: "File is required.",
          })}
        />
        <Form.Text className="text-danger">{errors.file?.message}</Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit" className="mt-3">
        Submit
      </Button>
    </Form>
  );
}
