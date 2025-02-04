import { useDispatch, useSelector } from "react-redux";
import {
  selectFilteredDataMemo,
  selectUncompletedInfoMemo,
} from "../redux/slice";
import { useEffect, useState, useRef } from "react";
import { delelteInfo, fetchInfo, toggleOrder } from "../redux/ops";
import { Field, Form, Formik } from "formik";
import { setFilterValue } from "../redux/filterSlice";

const AdminPg = () => {
  const [isPasswordVerified, setIsPasswordVerified] = useState(false);
  const prevUserInfoLength = useRef(0);

  const dispatch = useDispatch();
  const userInfo = useSelector(selectFilteredDataMemo);
  const uncompletedInfo = useSelector(selectUncompletedInfoMemo);

  useEffect(() => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then(() => {});
    }
  }, []);

  useEffect(() => {
    const storedVerification = localStorage.getItem("isPasswordVerified");
    if (storedVerification === "true") {
      setIsPasswordVerified(true);
    }
  }, []);

  useEffect(() => {
    if (isPasswordVerified) {
      dispatch(fetchInfo());

      const interval = setInterval(() => {
        dispatch(fetchInfo());
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [dispatch, isPasswordVerified]);

  useEffect(() => {
    if (isPasswordVerified) {
      if (userInfo.length > prevUserInfoLength.current) {
        const newOrders = userInfo.length - prevUserInfoLength.current;

        if (Notification.permission === "granted") {
          new Notification("Новый заказ!", {
            body: `Добавлен новый заказ.`,
          });
        }
      }
      prevUserInfoLength.current = userInfo.length;
    }
  }, [userInfo, isPasswordVerified]);

  return (
    <div>
      {!isPasswordVerified ? (
        <div className="flex justify-center p-52">
          <Formik
            initialValues={{ password: "" }}
            onSubmit={(values, actions) => {
              if (values.password === "g9T7pUjL62") {
                setIsPasswordVerified(true);
                localStorage.setItem("isPasswordVerified", "true");
              }
              actions.resetForm();
            }}
          >
            <Form className="flex gap-5">
              <Field name="password" type="password" />
              <button type="submit" className="btn">
                Войти
              </button>
            </Form>
          </Formik>
        </div>
      ) : (
        <div className="text-xl font-custom text-white pl-5">
          <h2 className="text-3xl flex justify-center pb-5 mt-12">
            Информация для админа
          </h2>
          <h3 className="flex justify-center gap-2">
            Не принято
            <span className="text-orange-500 font-bold text-2xl">
              {uncompletedInfo}
            </span>
            заявок
          </h3>
          <div className="flex gap-5 p-5 justify-center">
            <button
              onClick={() => dispatch(setFilterValue("all"))}
              className="btn w-52"
            >
              Все
            </button>
            <button
              onClick={() => dispatch(setFilterValue("completed"))}
              className="btn w-52"
            >
              Принятые
            </button>
            <button
              onClick={() => dispatch(setFilterValue("active"))}
              className="btn w-52"
            >
              Не принятые
            </button>
          </div>

          <ul className="grid grid-cols-4 gap-1">
            {userInfo.map((item) => (
              <li
                className="border border-black flex flex-col text-left"
                key={item.id}
              >
                <p className="border-b border-black p-2">
                  Номер заказа: {item.id}
                </p>
                <p className="border-b border-black p-2">Имя: {item.name}</p>
                <p className="border-b border-black p-2">Номер: {item.phone}</p>
                <p className="border-b border-black p-2">
                  Услуга: {item.dropdown}
                </p>
                <p className="border-b border-black p-2">Заказ: {item.area}</p>
                <p className="border-b border-black p-2">
                  Дата:{" "}
                  {item.timestamp
                    ? `${item.timestamp.slice(0, 10)} / ${item.timestamp.slice(
                        11,
                        19
                      )}`
                    : "Не указано"}
                </p>
                <div className="flex items-center gap-2 p-2">
                  Заказ принят
                  <input
                    type="checkbox"
                    checked={item.completed}
                    onChange={() => dispatch(toggleOrder(item))}
                  />
                </div>
                <button
                  className="btn"
                  onClick={() => dispatch(delelteInfo(item.id))}
                >
                  Удалить
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
