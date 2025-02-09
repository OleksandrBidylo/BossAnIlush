import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Modal = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      toast.info(
        <div>
          <h3 className="font-bold text-lg  text-gray-800">Внимание!</h3>
          <p className="py-2 text-gray-800">
            Мы предлагаем <span className="font-bold ">бесплатную</span> пробную
            мойку, чтобы вы могли убедиться в профессионализме нашей команды.
          </p>
        </div>,
        {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          style: { backgroundColor: "#9ad69a" },
        }
      );
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="font-custom">
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        style={{ zIndex: 52, position: "fixed" }}
      />
    </div>
  );
};

export default Modal;
