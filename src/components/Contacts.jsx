import React from "react";
import { MdLocationOn } from "react-icons/md";
import { MdGroupWork } from "react-icons/md";
import Button from "./Button";
import Pipe from "./Pipe";

const Contacts = () => {
  return (
    <div className="container">
      <div className="contactsTop mt-[100px] mb-[30px]">
        <h3 className="text-2xl text-[#dba42c] font-bold mb-[60px]">
          Контакты компании PromStan
        </h3>
        <div className="contactsItem">
          <ul className="contactsGrid">
            <li className="flex">
              <MdLocationOn />
              <div>
                <h5>г.Туймазы ул.Гафурова, 64</h5>
                <p>Режим работы</p>
                <p>пн-пт 9:00 - 20:00</p>
                <p>сб 10:00 - 18:00</p>
                <a
                  className="avito text-sm relative"
                  href="#"
                >
                  Мы на авито
                </a>
              </div>
            </li>
            <li className="flex">
              <Pipe height={100} />
              <div>
                <h5>Телефон</h5>
                <a href="tel:+79991329308">+7(999)132-93-08</a>
                <p>(whatsApp)</p>
                <a href="tel:+79991329308">+7(999)132-93-08</a>
                <p>(бесплатно по РФ)</p>
              </div>
            </li>
            <li className="flex">
              <Pipe height={50} />
              <div>
                <h5>Емайл</h5>
                <a href="mailto:prom.stan2017@yandex.ru">
                  prom.stan2017@yandex.ru
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div className="contactsItem">
          <ul className="contactsGrid">
            <li className="flex">
              <MdLocationOn />
              <div>
                <h5>г.Уфа ул.50 лет СССР, 30</h5>
                <p>Режим работы</p>
                <p>пн-пт 9:00 - 18:00</p>
              </div>
            </li>
            <li className="flex">
              <Pipe height={50} />
              <div>
                <h5>Телефон</h5>
                <a href="tel:+79991329308">+7(999)132-93-08</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="map mb-[100px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d147389.47101115927!2d56.020172800000005!3d54.7454976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1674072436987!5m2!1sru!2sru"
          width="100%"
          height="570px"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="contactsBottom text-base pb-[50px] flex flex-col md:flex-row  justify-between gap-10 md:gap-20">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, magni
          beatae eum veniam maiores blanditiis iusto alias nemo consectetur? Ad
          laboriosam eum reprehenderit delectus voluptates velit quaerat commodi
          amet eligendi, reiciendis nemo blanditiis modi in beatae sit enim
          inventore nobis accusamus, molestias tempore obcaecati. Soluta,
          ratione animi. Officiis corrupti cum alias est sequi repellendus
          obcaecati aspernatur blanditiis{" "}
        </p>
        <Button size="sm">Предложить сотрудничество</Button>
      </div>
    </div>
  );
};

export default Contacts;
