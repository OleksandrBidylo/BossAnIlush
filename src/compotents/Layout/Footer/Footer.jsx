import { FaTelegram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="font-custom 2xl:text-2xl">
      <footer className="flex bg-neutral text-white p-10 justify-center 2xl:justify-between items-center">
        <div className="hidden 2xl:flex items-center font-bold">
          <img className="w-10" src="/src/assets/images/logoNg.png" />
          <p>BossAnAlp</p>
        </div>
        <div className="flex flex-col items-center ">
          <p>Наши соц-сети</p>
          <div className="flex gap-2">
            <a target="_blank" href="https://t.me/b0ssanalp">
              {" "}
              <FaTelegram />
            </a>
            <a target="_blank" href="https://www.youtube.com/@BossAnAlp">
              {" "}
              <FaYoutube />
            </a>
          </div>
        </div>
        <div className="text-black"></div>
      </footer>
    </div>
  );
};

export default Footer;
