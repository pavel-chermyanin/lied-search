import Button from "./Button.jsx";
import { FaYoutube } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { ImWhatsapp } from "react-icons/im";
import Input from "./Input.jsx";

const Footer = () => {
  return (
    <footer className="container pt-[70px] pb-[30px] mb-[50px]">

      <div className="gridList">
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

        <div className="flex gap-[15px]">
          <p>
            <a
              className="text-[36px] leading-10"
              href="tel:+88005059590"
            >
              8 800 505 95 90
            </a>
          </p>
          <p>
            <a
              className="text-[#DBA42C]"
              href="mailto:prom.stan2017@yandex.ru"
            >
              prom.stan2017@yandex.ru
            </a>
          </p>
          <p className="contactsBox">
            <a href="#">
              <span>
                <FaYoutube />
              </span>
            </a>
            <a href="#">
              <span>
                <FaTelegramPlane />
              </span>
            </a>
            <a href="#">
              <span>
                <ImWhatsapp />
              </span>
            </a>
          </p>
        </div>
      </div>

      <div className="formBox py-12 flex flex-col justify-between gap-10 md:flex-row md:gap-20">
        <div>
          <h3 className="text-[36px] leading-10 text-[#DBA42C] mb-2">
            Заказать звонок
          </h3>
          <p>Оставьте заявку и наш специалист свяжется с Вами</p>
        </div>

        <div className="footerForm grow ">
          <form className="flex flex-col gap-[10px] mb-2 lg:flex-row">
            <Input />
            <Button className="shrink-0">Заказать звонок</Button>
          </form>
          <p className="text-base">
            Вы соглашаетесь с
            {' '}
            <a href="#" className="underline underline-offset-4 z-1">
              политикой конфиденциальности
            </a>
          </p>
        </div>
      </div>

      <div className="footerBottom py-[30px] flex flex-col items-center gap-5 text-base md:flex-row md:justify-between">
        <p>© Все права защищены ООО “Промстан” 2022</p>
        <a
          className="underline underline-offset-4"
          href="#"
        >
          Политика конфиденциальности
        </a>
      </div>
    </footer>
  );
};

export default Footer;
