const BeforeAfter = () => {
  return (
    <div className="mt-52 mb-52 shadow-2xl shadow-black p-20 rounded-xl">
      <p className="flex justify-center mb-16 text-3xl p-4  font-custom font-semibold">
        Окна до нас и после
      </p>
      <div className="diff aspect-[2/1] ">
        <div className="diff-item-1 ">
          <img
            className="rounded-md"
            alt="daisy"
            src="https://i.imgur.com/Xt4ErOI.jpeg"
          />
        </div>
        <div className="diff-item-2">
          <img
            className="rounded-md"
            alt="daisy"
            src="https://i.imgur.com/8kHtbYg.jpeg"
          />
        </div>
        <div className="diff-resizer"></div>
      </div>
    </div>
  );
};

export default BeforeAfter;
