import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { addInfo } from "../redux/ops";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { motion } from "framer-motion";

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

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const buttonAnimation = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  return (
    <div className="hero bg-base-200 min-h-screen font-custom">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <motion.div
          className="text-center lg:text-left"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <h1 className="text-2xl 2xl:text-5xl font-bold text-primary">
            Оформите заказ!
          </h1>
          <p className="text-sm py-2 2xl:py-6">
            Когда вы отправляете заявку, вы подтверждаете, что ваши данные будут
            переданы администратору!
          </p>
        </motion.div>
        <motion.div
          className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
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
                  className="input input-bordered text-sm 2xl:text-lg w-64 2xl:w-80"
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
                  className="input input-bordered text-sm 2xl:text-lg w-64 2xl:w-80"
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
                  className="input input-bordered text-xs lg:text-sm w-64 2xl:w-80"
                  required
                >
                  <option value="Промышленная мойка окон">
                    Промышленная мойка окон
                  </option>
                  <option value="Частная мойка окон">Частная мойка окон</option>
                  <option value="Мойка фасада">Мойка фасада</option>
                  <option value="Украшение коттеджей">
                    Украшение коттеджей
                  </option>
                  <option value="Очистка кровли от мха">
                    Очистка кровли от мха
                  </option>
                  <option value="Очистка кровли от снега и наледи">
                    Очистка кровли от снега и наледи
                  </option>
                  <option value="Подготовка водостоков к зиме">
                    Подготовка водостоков к зиме
                  </option>
                  <option value="Удаление сосулек">Удаление сосулек</option>
                  <option value="Другое">Другое</option>
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
                  className="input input-bordered pt-2 text-sm 2xl:text-lg w-64 2xl:w-80"
                  required
                />
              </div>

              <Field name="timestamp" type="hidden" />
              <div className="form-control mt-6">
                <motion.button
                  type="submit"
                  className="btn btn-primary text-sm 2xl:text-lg"
                  whileHover="hover"
                  whileTap="tap"
                  variants={buttonAnimation}
                >
                  Отправить
                </motion.button>
              </div>
            </Form>
          </Formik>
        </motion.div>
      </div>
    </div>
  );
};

export default OrderForm;
