import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { addInfo } from "../redux/ops";
import { useState } from "react";
import { Navigate } from "react-router-dom";

const OrderForm = () => {
  const initialValues = {
    name: "",
    phone: "",
    area: "",
    timestamp: "",
    submited: false,
    dropdown: "",
  };

  const [submited, setSubmited] = useState(false);

  const dispatch = useDispatch();
  const onSubmit = (values, options) => {
    const currentDateTime = new Date().toISOString();
    const formData = {
      ...values,
      timestamp: currentDateTime,
      dropdown: [values.dropdown],
    };

    dispatch(addInfo(formData));
    setSubmited(true);
    options.resetForm();
  };

  if (submited) {
    return <Navigate to="/succes" />;
  }

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Оформите заказ !</h1>
          <p className="py-6">
            когда вы отправляете заявку вы подтверждаете, что ваши данные будут
            переданы администратору!
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <Formik onSubmit={onSubmit} initialValues={initialValues}>
            <Form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Имя</span>
                </label>
                <Field
                  name="name"
                  type="text"
                  placeholder="Введите имя"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Телефон</span>
                </label>
                <Field
                  name="phone"
                  type="tel"
                  placeholder="Введите номер телефона"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Услуга</span>
                </label>
                <Field
                  as="select"
                  name="dropdown"
                  className="input
                  input-bordered"
                  required
                >
                  <option value="Минет">Минет</option>
                  <option value="Анал">Анал</option>
                  <option value="Классика">Классика</option>
                  <option value="Копро">Копро</option>
                  <option value="Фистинг">Фистинг</option>
                </Field>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Подробнее об заказе</span>
                </label>
                <Field
                  name="area"
                  as="textarea"
                  placeholder="Введите заказ"
                  className="input input-bordered"
                  required
                />
              </div>

              <Field name="timestamp" type="hidden" />
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Отправить
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default OrderForm;
