import { useEffect } from "react";

const Modal = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      document.getElementById("my_modal_1").showModal();
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="font-custom   ">
      <dialog id="my_modal_1" className="modal">
        <div className="  modal-box ">
          <h3 className="font-bold text-lg text-primary">Внимание!</h3>
          <p className="py-4">
            Мы предлагаем{" "}
            <span className="font-bold text-primary">бесплатную</span> пробную
            мойку, чтобы вы могли убедиться в профессионализме нашей команды.
          </p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-primary">Закрыть</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
