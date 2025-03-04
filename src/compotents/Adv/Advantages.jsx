const Advantages = () => {
  return (
    <div className="hidden font-custom font-semibold  mt-52 mb-52 items-center  flex-col min-h-96 shadow-2xl shadow-black py-10 lg:py-20 rounded-xl ">
      <p className="flex justify-center text-2xl mb-10 lg:text-3xl lg:mb-20">
        Наши преимущества
      </p>
      <ul className="flex flex-wrap lg:flex-row gap-10 text-black  justify-center">
        <li>
          <div className="flex flex-col mx-auto w-72 lg:min-h-96 lg:w-96">
            <div className="collapse collapse-arrow bg-primary ">
              <input type="radio" name="my-accordion-2" defaultChecked />
              <div className="collapse-title text-xl font-medium">
                Современное оборудование
              </div>
              <div className="collapse-content">
                <p>
                  Используем новейшее снаряжение и инструменты, соответствующие
                  мировым стандартам безопасности.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-primary">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
                Быстрое реагирование
              </div>
              <div className="collapse-content">
                <p>
                  Мы готовы начать работу в кратчайшие сроки, даже в условиях
                  срочных заказов.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-primary">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
                Гарантия качества
              </div>
              <div className="collapse-content">
                <p>
                  На все выполненные работы предоставляется гарантия, что
                  подтверждает наше качество и профессионализм.
                </p>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="flex flex-col w-72 lg:px-auto lg:w-96">
            <div className="collapse collapse-arrow bg-primary">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
                Индивидуальный подход
              </div>
              <div className="collapse-content">
                <p>
                  Каждый проект разрабатывается с учётом особенностей объекта и
                  требований клиента.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-primary">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
                Бесплатная консультация и оценка работ
              </div>
              <div className="collapse-content">
                <p>
                  Мы предоставляем бесплатный осмотр объекта и детализированное
                  коммерческое предложение.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-primary">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
                Опыт работы с крупными объектами
              </div>
              <div className="collapse-content">
                <p>
                  В нашем портфолио — успешные проекты на высотных зданиях,
                  бизнес-центрах и промышленных предприятиях.
                </p>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="flex flex-col mx-auto w-72 lg:w-96">
            <div className="collapse collapse-arrow bg-primary">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
                Доступность услуг в любое время суток
              </div>
              <div className="collapse-content">
                <p>
                  Мы работаем круглосуточно, что позволяет нам оперативно решать
                  проблемы даже в ночное время.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-primary">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
                Полное соблюдение сроков
              </div>
              <div className="collapse-content">
                <p>
                  Мы гарантируем выполнение всех работ в установленные сроки,
                  что позволяет минимизировать простои на объекте.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-primary">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
                Выполнение работ в любой сезон
              </div>
              <div className="collapse-content">
                <p>
                  Наши специалисты готовы работать в любых погодных условиях,
                  включая зиму и дождливое лето.
                </p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Advantages;
