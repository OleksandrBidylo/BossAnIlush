import { useDispatch, useSelector } from "react-redux";
import { selectInfo } from "../redux/slice";
import { useEffect, useState } from "react";
import { delelteInfo, fetchInfo } from "../redux/ops";
import { Field, Form, Formik } from "formik";

const AdminPg = () => {
  const [password, setPassword] = useState("");
  const initialValues = {
    password: "",
  };
  const onSubmit = (values, options) => {
    setPassword(values.password);
    options.resetForm();
  };
  const dispatch = useDispatch();
  const userInfo = useSelector(selectInfo);
  useEffect(() => {
    dispatch(fetchInfo());
  }, [dispatch]);

  return (
    <div>
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

      {password === "g9T7pUjL62" && (
        <div className="text-xl font-custom  text-white pl-5">
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

                {/* You can open the modal using document.getElementById('ID').showModal() method */}
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
