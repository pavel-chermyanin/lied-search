import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdLandscape } from "react-icons/md";
import { MdSegment } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";

import Button from "./Button";
import DropBox from "./DropBox";

const Header = () => {
  return (
    <div className="relative z-10">
      <div className="container flex justify-between items-center text-base py-3 mb-[50px]">
        <a
          href="#"
          className="logo text-center"
        >
          <p>
            <MdLandscape className="logoIcon" />
          </p>
          <span className="">PROPMSTAN</span>
        </a>

        <nav className="hidden lg:block py-3">
          <ul className="navList flex space-x-2">
            <li className="">
              <a
                hover
                className="navListLink"
                href="#"
              >
                Листогибы
              </a>
              <span>
                <MdKeyboardArrowDown />
              </span>
              <span className="arrowUp">
                <MdKeyboardArrowUp />
              </span>
              <DropBox />
            </li>
            <li>
              <a
                className="navListLink"
                href="#"
              >
                Запчасти для листогибов
              </a>
              <span>
                <MdKeyboardArrowDown />
              </span>
              <span className="arrowUp">
                <MdKeyboardArrowUp />
              </span>
              <DropBox />
            </li>
            <li>
              <a
                className="navListLink"
                href="#"
              >
                О компании
              </a>
              <span>
                <MdKeyboardArrowDown />
              </span>
              <span className="arrowUp">
                <MdKeyboardArrowUp />
              </span>
              <DropBox />
            </li>
          </ul>
        </nav>

        <div className="lg:hidden">
          <MdSegment style={{ fontSize: "30px" }} />
        </div>

        <div className="hidden lg:flex gap-5 items-center">
          <a
            className="text-lg hover:text-[#dba42c] transition-all duration-[.3s]"
            href="tel:+88005059590"
          >
            8(800)505-95-90
          </a>
          <a
            className="w-[30px] h-[30px] rounded-full bg-[#3c3c40] flex items-center justify-center transition-all duration-[.3s] hover:bg-[#dba42c]"
            href="#"
          >
            <FaTelegramPlane />
          </a>
        </div>

        <div className="hidden sm:block">
          <Button size='sm'>ЗАКАЗАТЬ ЗВОНОК</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
