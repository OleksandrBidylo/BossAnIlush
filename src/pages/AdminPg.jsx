import { useDispatch, useSelector } from "react-redux";
import { selectInfo } from "../redux/slice";
import { useEffect, useState } from "react";
import { delelteInfo, fetchInfo } from "../redux/ops";
import { Field, Form, Formik } from "formik";

const AdminPg = () => {
  const [isPasswordVerified, setIsPasswordVerified] = useState(false);

  const initialValues = {
    password: "",
  };

  const onSubmit = (values, options) => {
    if (values.password === "g9T7pUjL62") {
      setIsPasswordVerified(true);
      localStorage.setItem("isPasswordVerified", "true");
    }
    options.resetForm();
  };

  const dispatch = useDispatch();
  const userInfo = useSelector(selectInfo);

  useEffect(() => {
    const storedVerification = localStorage.getItem("isPasswordVerified");
    if (storedVerification === "true") {
      setIsPasswordVerified(true);
    }
  }, []);

  useEffect(() => {
    if (isPasswordVerified) {
      dispatch(fetchInfo());
    }
  }, [dispatch, isPasswordVerified]);

  return (
    <div>
      {!isPasswordVerified && (
        <div className="flex justify-center p-52">
          <Formik initialValues={initialValues} onSubmit={onSubmit}>
            <Form className="flex gap-5">
              <Field name="password" type="password" />
              <button type="submit" className="btn">
                войти
              </button>
            </Form>
          </Formik>
        </div>
      )}

      {isPasswordVerified && (
        <div className="text-xl font-custom text-white pl-5">
          <h2 className="text-3xl flex justify-center pb-5">
            Информация для админа
          </h2>
          <ul className="grid grid-cols-4 gap-1">
            {userInfo.map((item) => (
              <li
                className="border border-black flex
          flex-col text-left"
                key={item.id}
              >
                <p className="border-b border-black p-2">
                  номер заказа: {item.id}
                </p>
                <p className="border-b border-black p-2">имя: {item.name}</p>
                <p className="border-b border-black p-2">номер: {item.phone}</p>
                <p className="border-b border-black p-2">
                  услуга: {item.dropdown}
                </p>
                <p className="border-b border-black p-2">заказ: {item.area}</p>
                <p>
                  дата:
                  {item.timestamp
                    ? `${item.timestamp.slice(0, 10)} / ${item.timestamp.slice(
                        11,
                        19
                      )}`
                    : "Не указано"}
                </p>
                <input type="checkbox" />

                <button
                  className="btn"
                  onClick={() => dispatch(delelteInfo(item.id))}
                >
                  удалить
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AdminPg;
