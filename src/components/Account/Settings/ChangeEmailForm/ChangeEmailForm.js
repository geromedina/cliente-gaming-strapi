import { Form } from "semantic-ui-react";
import { useFormik } from "formik";
import { User } from "@/api";
import { initialValues, validationSchema } from "./ChangeEmailForm.form";
import { useAuth } from "@/hooks";
import styles from "./ChangeEmailForm.module.scss";

const userCtrl = new User();

export function ChangeEmailForm() {
  const { user, updateUser } = useAuth();

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        await userCtrl.updateMe(user.id, { email: formValue.email });
        updateUser("email", formValue.email);
        formik.handleReset();
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit} className={styles.form}>
      <label>Cambiar correo electrónico</label>
      <Form.Input
        name="email"
        placeholder="Nuevo correo electrónico"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.errors.email}
      />
      <Form.Input
        name="repeatEmail"
        placeholder="Repetir nuevo correo electrónico"
        value={formik.values.repeatEmail}
        onChange={formik.handleChange}
        error={formik.errors.repeatEmail}
      />
      <Form.Button loading={formik.isSubmitting} type="submit">
        Enviar
      </Form.Button>
    </Form>
  );
}
