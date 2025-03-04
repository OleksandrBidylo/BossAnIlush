import { FaTelegram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="font-custom text-2xl 2xl:text-4xl">
      <footer className="flex bg-neutral text-white p-10 justify-center  items-center">
        <div className="flex flex-col items-center ">
          <p>Наши соц-сети</p>
          <div className="flex gap-2 text-4xl">
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
