import { Field, Form, Formik } from "formik";
import { useState } from "react";
import { FaTelegram, FaYoutube } from "react-icons/fa";
import { SiDota2 } from "react-icons/si";
import { Navigate } from "react-router-dom";

const Footer = () => {
  const [password, setPassword] = useState("");
  const initialValues = {
    password: "",
  };
  const onSubmit = (values, options) => {
    setPassword(values.password);
    options.resetForm();
  };
  return (
    <div>
      <footer className="footer bg-neutral text-white p-10 justify-between relative">
        <div>
          <SiDota2 />
          <p>BossAnAlp</p>
        </div>
        <div className="flex flex-col">
          <p>Наши соц-сети</p>
          <div className="flex gap-2">
            <FaTelegram />
            <FaYoutube />
          </div>
        </div>
        <div className="text-black">
          <button
            className="btn"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            для админа
          </button>
          <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
              <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <h3 className="font-bold text-lg">Введите пароль</h3>
              <Formik initialValues={initialValues} onSubmit={onSubmit}>
                <Form>
                  <Field
                    name="password"
                    type="password"
                    className="border border-black"
                  />
                  <button type="submit">Отправить</button>
                  {password === "48KNsK9vx4" && <Navigate to="/admin-stuff" />}
                </Form>
              </Formik>
            </div>
          </dialog>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
