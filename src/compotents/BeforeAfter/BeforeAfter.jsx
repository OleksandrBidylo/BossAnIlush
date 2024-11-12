const BeforeAfter = () => {
  return (
    <div className="mt-52 mb-52  border border-primary bg-primary">
      <p className="flex justify-center mb-2 text-3xl p-4 text-black font-custom">
        Окна до нас и после
      </p>
      <div className="diff aspect-[2/1]">
        <div className="diff-item-1">
          <img alt="daisy" src="https://i.imgur.com/Xt4ErOI.jpeg" />
        </div>
        <div className="diff-item-2">
          <img alt="daisy" src="https://i.imgur.com/8kHtbYg.jpeg" />
        </div>
        <div className="diff-resizer"></div>
      </div>
    </div>
  );
};

export default BeforeAfter;
