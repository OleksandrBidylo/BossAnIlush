import after from "../../assets/images/clearWindow.jpg";
import before from "../../assets/images/dirtyWindow.jpg";
const BeforeAfterMob = () => {
  return (
    <div className="mt-52 mb-52 shadow-2xl shadow-black p-4 pb-10 rounded-xl  ">
      <p className="flex justify-center mb-5 text-2xl p-4  font-custom font-semibold">
        Окна до нас и после
      </p>
      <div className="diff aspect-[5/5]  ">
        <div className="diff-item-1 ">
          <img className="rounded-md" alt="daisy" src={after} />
        </div>
        <div className="diff-item-2">
          <img className="rounded-md" alt="daisy" src={before} />
        </div>
        <div className="diff-resizer"></div>
      </div>
    </div>
  );
};

export default BeforeAfterMob;
