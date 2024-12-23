const BeforeAfterStatic = () => {
  return (
    <div className="font-custom font-semibold mt-52 mb-52 shadow-2xl shadow-black p-4 pb-10 rounded-xl">
      <p className="flex justify-center mb-5 text-2xl p-4   ">
        Окна до нас и после
      </p>
      <div className="flex gap-5">
        <div className="flex flex-col gap-2 text-center">
          <img
            className="rounded-md  "
            alt="daisy"
            src="https://i.imgur.com/8kHtbYg.jpeg"
          />
          <p>До</p>
        </div>
        <div className="flex flex-col gap-2 text-center">
          <img
            className="rounded-md  "
            alt="daisy"
            src="https://i.imgur.com/Xt4ErOI.jpeg"
          />
          <p>После</p>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterStatic;
