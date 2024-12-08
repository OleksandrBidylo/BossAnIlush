import { NavLink } from "react-router-dom";

const OurServices = () => {
  return (
    <div className="font-custom">
      <ul className="grid grid-cols-1 lg:grid-cols-2 lg:ml-32 2xl:grid-cols-3 2xl:gap-12 mt-20 2xl:ml-52 mb-20  gap-10  ">
        <li>
          <div className="card card-compact bg-base-100 2xl:w-96 shadow-xl w-72 ml-11">
            <figure>
              <img
                src="https://i.imgur.com/U8Mr53V.jpeg"
                className="h-96 w-96"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title"> Промышленная мойка окон </h2>
              <p>
                Включает комплексные услуги по очистке окон промышленных зданий
                с использованием специализированного оборудования и эффективных
                методов для достижения высокого качества результата.
              </p>
              <div className="card-actions justify-end flex items-center gap-2 ">
                <div className="btn ">от 20 руб</div>
                <NavLink to="/order" className="btn btn-primary">
                  Заказать
                </NavLink>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="card card-compact bg-base-100 2xl:w-96 shadow-xl w-72 ml-11">
            <figure>
              <img
                src="https://i.imgur.com/Jnf3YF8.jpeg"
                className="h-96 w-96"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title"> Частная мойка окон</h2>
              <p>
                Предусматривает услуги по профессиональной очистке окон в жилых
                домах, квартирах и на дачах с учетом особенностей каждого
                объекта для обеспечения чистоты и комфорта.
              </p>
              <div className="card-actions justify-end flex items-center gap-2 ">
                <div className="btn ">цена договорная </div>
                <NavLink to="/order" className="btn btn-primary">
                  Заказать
                </NavLink>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="card card-compact bg-base-100 2xl:w-96 shadow-xl w-72 ml-11">
            <figure>
              <img
                src="https://i.imgur.com/5JjeDxG.jpeg"
                className="w-96 h-96"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Мойка фасада </h2>
              <p>
                Осуществляется тщательная очистка наружных стен зданий от
                различных видов загрязнений с применением современных технологий
                для поддержания презентабельного внешнего вида.
              </p>
              <div className="card-actions justify-end flex items-center gap-2 ">
                <div className="btn ">от 20 руб</div>
                <NavLink to="/order" className="btn btn-primary">
                  Заказать
                </NavLink>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="card card-compact bg-base-100 2xl:w-96 shadow-xl w-72 ml-11">
            <figure>
              <img
                src="https://i.imgur.com/UasLR5i.jpeg"
                className="w-96 h-96"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Украшение коттеджей</h2>
              <p>
                Предлагаются услуги по оформлению и декорированию внешнего вида
                частного дома, что придает индивидуальность и эстетическую
                привлекательность зданию.
              </p>
              <div className="card-actions justify-end flex items-center gap-2 ">
                <div className="btn ">цена договорная</div>
                <NavLink to="/order" className="btn btn-primary">
                  Заказать
                </NavLink>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="card card-compact bg-base-100 2xl:w-96 shadow-xl w-72 ml-11">
            <figure>
              <img src="https://i.imgur.com/ekM3HMx.jpeg" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Очистка кровли от мха </h2>
              <p>
                Включает удаление мха, лишайников и других растений с крыши, что
                помогает предотвратить их разрушительное воздействие на
                материалы покрытия.
              </p>
              <div className="card-actions justify-end flex items-center gap-2 ">
                <div className="btn ">50 руб/м²</div>
                <NavLink to="/order" className="btn btn-primary">
                  Заказать
                </NavLink>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="card card-compact bg-base-100 2xl:w-96 shadow-xl w-72 ml-11">
            <figure>
              <img src="https://i.imgur.com/HDxWBJX.jpeg" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Очистка кровли от снега и наледи </h2>
              <p>
                Предусматривает комплексные услуги по безопасному удалению
                снежных и ледяных отложений с крыши для предотвращения
                повреждений и протечек.
              </p>
              <div className="card-actions justify-end flex items-center gap-2 ">
                <div className="btn ">от 25 руб/м²</div>
                <NavLink to="/order" className="btn btn-primary">
                  Заказать
                </NavLink>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="card card-compact bg-base-100 2xl:w-96 shadow-xl w-72 ml-11">
            <figure>
              <img src="https://i.imgur.com/veUmIMW.jpeg" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Подготовка водостоков к зиме </h2>
              <p>
                Включает очистку и профилактическую обработку водостоков для
                предотвращения замерзания воды и образования ледяных пробок в
                зимний период.
              </p>
              <div className="card-actions justify-end flex items-center gap-2 ">
                <div className="btn ">от 350 руб </div>
                <NavLink to="/order" className="btn btn-primary">
                  Заказать
                </NavLink>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="card card-compact bg-base-100 2xl:w-96 shadow-xl w-72 ml-11">
            <figure>
              <img src="https://i.imgur.com/BkpcQPf.jpeg" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Удаление сосулек </h2>
              <p>
                Предлагаются услуги по эффективному удалению наледи и сосулек с
                крыш и водостоков для обеспечения безопасности и предотвращения
                возможных повреждений.
              </p>
              <div className="card-actions justify-end flex items-center gap-2 ">
                <div className="btn ">от 40 руб</div>
                <NavLink to="/order" className="btn btn-primary">
                  Заказать
                </NavLink>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default OurServices;
