import Button from "./Button";
import Input from "./Input";
import { FaTelegramPlane } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { MdSend } from "react-icons/md";

const FooterMini = () => {
  return (
    <div className="footerMini bg-[#202024]">
      <div className="container">
        <div className="gridList ">
          <div>
            <h5>Листогрибы</h5>
            <ul>
              <li>
                <a href="#">Листогрибы б/у</a>
              </li>
            </ul>
          </div>

          <div>
            <h5>
              <a href="#">Запчасти для листогибов</a>
            </h5>
            <ul>
              <li>
                <a href="#">Запчасти для листогибов Tapco</a>
              </li>
              <li>
                <a href="#">Запчасти для листогибов Van Mark</a>
              </li>
            </ul>
          </div>

          <div>
            <h5>О Компании</h5>
            <ul>
              <li>
                <a href="#">Доставка</a>
              </li>
              <li>
                <a href="#">Контакты</a>
              </li>
            </ul>
          </div>

          <div className="max-w-[280px]">
            <h5>Оставьте заявку</h5>
            <form className="flex gap-3 ">
              <Input size="16" />
              <div className="sendBox">
                <Button padding="10">
                  <MdSend />
                </Button>
              </div>
            </form>
            <p className="text-xs mt-3">
              Вы соглашаетесь с политикой конфиденциальности
            </p>

            <div className="footerMiniSocial text-base gap-4 mt-3">
              <a href="#">
                <FaYoutube />
              </a>
              <a href="#">
                <FaTelegramPlane />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterMini;
