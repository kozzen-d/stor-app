import { useState } from "react";
import { Formik, Form, Field } from "formik";
import CategoriesList from "../../components/CategoriesList";

interface CategoryFormValues {
  name: string;
  image: string;
}

export default function CategoriesPage() {
  const [updateList, setUpdateList] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  async function createCategory(values: CategoryFormValues) {
    try {
      const res = await fetch("https://api.escuelajs.co/api/v1/categories/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!res.ok) throw new Error("Ошибка при создании категории");

      setMessage("💃 Категория успешно создана!");
      setUpdateList((prev) => !prev);
    } catch (error) {
      console.error(error);
      setMessage("😵‍💫 Ошибка при создании категории");
    }
  }

  return (
    <div>
      <h1>Создать категорию</h1>

      <Formik
        initialValues={{ name: "", image: "" }}
        onSubmit={async (values, actions) => {
          await createCategory(values);
          actions.resetForm();
          actions.setSubmitting(false);
        }}
      >
        <Form>
          <label htmlFor="name">Наименование категории</label>
          <Field id="name" name="name" type="text" placeholder="Введите" />

          <label htmlFor="image">Фото</label>
          <Field
            id="image"
            name="image"
            type="text"
            placeholder="https://..."
          />

          <button type="submit">Создать</button>
        </Form>
      </Formik>

      {message && <p>{message}</p>}

      <h2>Список категорий</h2>
      <CategoriesList updateList={updateList} />
    </div>
  );
}
