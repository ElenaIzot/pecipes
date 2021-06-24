const recipes = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/1351238/pexels-photo-1351238.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    title: 'Тосты с авокадо',
    time: 15,
    portions: 2,
    ingridients: [
      { 'name': 'Хлеб для тостов', 'count': 2, 'measure': 'штуки', 'calories': 206},
      { 'name': 'Авокадо', 'count': 1, 'measure': 'штука', 'calories': 160},
      { 'name': 'Салат Руккола', 'count': 50, 'measure': 'грамм', 'calories': 13 },
      { 'name': 'Яйца', 'count': 2, 'measure': 'штуки', 'calories': 153},
      { 'name': 'Миндаль', 'count': 15, 'measure': 'грамм', 'calories': 86 },
      { 'name': 'Бальзамический соус', 'count': 0.5, 'measure': 'чайной ложки', 'calories': 246},
      { 'name': 'специи', 'count': null, 'measure': 'по вкусу', 'calories': 0},
    ],
    instruction: ['Тосты посыпать с одной стороны специями (базилик, орегано и пр.), обжарить до хрустящей корочки на предварительно разогретой сковороде, без масла, примерно по 0,5-1 мин с каждой стороны.', 'Из авокадо извлечь кость, очистить от кожуры и размять в пюре при помощи вилки или блендера. Готовую пасту из авокадо равномерно распределить по тостам. Миндаль порубить.', 'Разместить на тостах рукколe, сбрызнуть бальзамическим соусом, посыпать рубленными орехами и подавать к столу!']
  },

  {
    id: 2,
    image: 'https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    title: 'Лосось запеченный',
    time: 25,
    portions: 2,
    ingridients: [
      { 'name': 'петрушка', 'count': 40, 'measure': 'грамм', 'calories': 14},
      { 'name': 'чеснок', 'count': 3, 'measure': 'зубчика', 'calories': 12 },
      { 'name': 'горчица', 'count': 0.5, 'measure': 'столовой ложки','calories': 4 },
      { 'name': 'молотый черный перец', 'count': 0.13, 'measure': 'чайной ложки', 'calories': 1},
      { 'name': 'оливковое масло', 'count': 0.13, 'measure': 'стакана', 'calories': 450},
      { 'name': 'лимонный сок', 'count': 2, 'measure': 'столовые ложки', 'calories': 150},
      { 'name': 'филе лосося', 'count': 4, 'measure': 'куска', 'calories': 350}
    ],
    instruction: ['В небольшой миске смешайте 2 столовые ложки мелко нарезанной зелени петрушки, 2-3 зубчика чеснока, 1/2 столовой ложки дижонской горчицы, 1/2 чайной ложки соли, 1/8 чайной ложки перца, 1/8 стакана оливкового масла и 2 столовые ложки лимонного сока.', 'На противень положите 4 кусочка филе лосося, обильно полейте их соусом и положите сверху дольки лимона. Выпекайте 12-15 минут при температуре 220°C.'],
  },

  {
    id: 3,
    image: 'https://images.pexels.com/photos/5639252/pexels-photo-5639252.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    title: 'Вок на рисе с говядиной и овощами',
    time: 30,
    portions: 4,
    ingridients: [
      { 'name': 'Говядина', 'count': 300, 'measure': 'грамм', 'calories': 150},
      { 'name': 'Кабачок', 'count': 150, 'measure': 'грамм','calories': 150 },
      { 'name': 'чеснок', 'count': 3, 'measure': 'зубчика', 'calories': 12},
      { 'name': 'оливковое масло', 'count': 2, 'measure': 'столовые ложки', 'calories': 150},
      { 'name': 'Лук красный', 'count': 1, 'measure': 'штука', 'calories': 150},
      { 'name': 'Перец болгарский', 'count': 1, 'measure': 'штука', 'calories': 150},
      { 'name': 'Фасоль стручковая', 'count': 100, 'measure': 'грамм', 'calories': 150},
      { 'name': 'Рис', 'count': 100, 'measure': 'грамм', 'calories': 150},
      { 'name': ' Соевый соус', 'count': 1, 'measure': 'столовая ложка','calories': 150 },
      { 'name': ' Соус для вока', 'count': 1, 'measure': 'пачка', 'calories': 150},
      { 'name': 'Арахис жаренный для посыпки', 'count': 1, 'measure': 'столовая ложка','calories': 150 },
      { 'name': 'молотый черный перец', 'count': null, 'measure': 'по вкусу', 'calories': 1},
      { 'name': 'зелень', 'count': null, 'measure': 'по вкусу','calories': 150 },
    ],
    instruction: ['Мясо нарезать тоненькими полосками.', 'Добавить измельченный чеснок и 1/3 соуса для вока. Перемешать и оставить минут на 15.', 'Этим временем отварить рис в подсоленной воде.',
      'Нарезать лук перьями, перец – колечками, кабачок - нетолстыми полукольцами.', 'На максимальном огне разогреть сковороду (вок). В разогретый вок с маслом выложить мясо. Быстро обжарить.',
      'Следом добавить лук. Через минуту - фасоль.',
      'Перемешать и через полминуты добавить перец и через минуту кабачок.',
      'Добавить оставшийся соус для вока и соевый соус. Жарить три минуты.',
      'Снять с огня. Вок с говядиной и овощами готов.',
      'Выложить рис в тарелку, сверху вок с говядиной. При подаче посыпать жаренными арахисом и зеленью.',
    ]
  },

  {
    id: 4,
    image: 'https://images.pexels.com/photos/2765875/pexels-photo-2765875.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    title: 'Запеканка с сыром',
    time: 60,
    portions: 4,
    ingridients: [
      { 'name': 'Картофель', 'count': 5, 'measure': 'штук','calories': 150 },
      { 'name': 'сыр твердый', 'count': 100, 'measure': 'грамм', 'calories': 150},
      { 'name': 'яйца куриные', 'count': 2, 'measure': 'штуки','calories': 153 },
      { 'name': 'молотый черный перец', 'count': 0.13, 'measure': 'столовые ложки','calories': 1 },
      { 'name': 'Майонез', 'count': 5, 'measure': 'столовые ложки', 'calories': 150},
      { 'name': 'чеснок', 'count': 2, 'measure': 'зубчика', 'calories': 8},
      { 'name': 'соль', 'count': 0.05, 'measure': 'куска', 'calories': 0},
      { 'name': 'перец черный молотый ', 'count': 0.05, 'measure': 'куска','calories': 150 },
    ],
    instruction: ['Сыр натрите на терке среднего размера.Возьмите половину тертого сыра и соедините с яйцом (1 шт) и майонезом. Добавьте соль, черный молотый перец и чеснок.', 'Картофель для запеканки можно подготовить, используя один из традиционных вариантов. Натереть на крупной терке или порезать крупными слайсами', 'Картофель соединить с приготовленным ранее сырным соусом.', 'Картофель в сырной заправке выложить в форму для запекания. Оставшийся сыр перемешать с куриным яйцом и залить смесью картофель в форме.', 'Запечь в духовом шкафу при температуре 180 градусов, 35-40 минут. Определить готовность блюда можно по румяной корочке.'],
  },
  {
    id: 5,
    image: 'https://images.pexels.com/photos/4629324/pexels-photo-4629324.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    title: 'Томатный суп с мидиями',
    time: 40,
    portions: 4,
    ingridients: [
      { 'name': 'мидии', 'count': 300, 'measure': 'грамм', 'calories': 150},
      { 'name': 'Помидоры', 'count': 500, 'measure': 'граммов','calories': 150 },
      { 'name': 'Лук репчатый', 'count': 1, 'measure': 'штука', 'calories': 150},
      { 'name': 'Чеснок', 'count': 1, 'measure': 'зубчик', 'calories': 4},
      { 'name': 'лимонный сок', 'count': 1, 'measure': 'столовая ложка', 'calories': 150},
      { 'name': 'оливковое масло', 'count': 1, 'measure': 'столовая ложка', 'calories': 150},
      { 'name': 'горчица', 'count': 0.5, 'measure': 'столовой ложки','calories': 150 },
      { 'name': 'Вино белое сухое', 'count': 100, 'measure': 'миллилитров', 'calories': 150},
      { 'name': 'Томатная паста', 'count': 1, 'measure': 'столовая ложка', 'calories': 150},
      { 'name': 'Соль', 'count': null, 'measure': 'по вкусу','calories':0 },
      { 'name': 'молотый черный перец', 'count': null, 'measure': 'по вкусу','calories': 1 },
    ],
    instruction: ['Помидоры промыть, обдать кипятком и снять кожицу. Затем некрупно нарезать. Чеснок и лук очистить и мелко нарезать.',
      'В сотейнике обжарить лук и чеснок, добавить томатную пасту, соль и перец по вкусу. Затем влить белое вино, перемешать и потушить на медленном огне 5-7 минут.', 'Добавить томаты, довести до кипения, перемешать и томить 10 минут. Выложить мидии и варить еще 10 минут.', 'При подаче украсить зеленью по вкусу.'],
  },
  {
    id: 6,
    image: 'https://images.pexels.com/photos/769969/pexels-photo-769969.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    title: 'Паста с овощами',
    time: 40,
    portions: 4,
    ingridients: [
      { 'name': 'Спагетти', 'count': 0.5, 'measure': 'пачки','calories': 150 },
      { 'name': 'Грудка куриная', 'count': 2, 'measure': 'штуки','calories': 150 },
      { 'name': 'Перец болгарский', 'count': 1, 'measure': 'штука','calories': 150 },
      { 'name': 'Лук репчатый', 'count': 1, 'measure': 'штука','calories': 150 },
      { 'name': 'Чеснок', 'count': 2, 'measure': 'зубчика','calories': 8 },
      { 'name': 'Лук зеленый ', 'count': 1, 'measure': 'пучок','calories': 150 },
      { 'name': 'Масло оливковое', 'count': 4, 'measure': 'столовые ложки', 'calories': 150},
      { 'name': 'Фасоль стручковая', 'count': 200, 'measure': 'грамм', 'calories': 150},
      { 'name': 'Морковь', 'count': 1, 'measure': 'штука','calories': 150 },
      { 'name': 'Соевый соус', 'count': 1, 'measure': 'столовая ложка','calories': 150 },
      { 'name': 'Соль', 'count': null, 'measure': 'по вкусу','calories': 0 }
    ],
    instruction: [
      'Спагетти отвариваем в большом количестве подсоленной воды с добавлением 1 ст. л. оливкового масла до состояния "аль-денте"!', 'Куриные грудки нарезаем длинными ломтиками и подрумяниваем в небольшом количестве оливкового масла.', 'Лук нарезаем перьями, чеснок и корень имбиря мелко режем. Отправляем в сковороду к румяному мясу.', 'Следом отправляем в сковороду морковь и сельдерей, нарезанные полукольцами.', 'Перец болгарский режем длинной соломкой, чили - тонкими полукольцами, предварительно очистив от семечек и перегородок! Добавляем к основной массе в сковороде.', 'Замороженную зеленую стручковую фасоль тоже отправляем в сковороду и аккуратно перемешиваем смесь.', 'Зеленый лук, кинзу и укроп мелко рубим и добавляем в сковороду', 'Теперь пришло время приготовленных спагетти. Отправляем их к овощной смеси с куриной грудкой и аккуратно перемешиваем лопаточкой. Добавляем соевый соус, накрываем крышкой и пропариваем 3-4 минуты.'],
  },
  {
    id: 7,
    image: 'https://images.pexels.com/photos/842519/pexels-photo-842519.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    title: 'Пицца с курицей',
    time: 20,
    portions: 5,
    ingridients: [
      { 'name': 'Тесто для пиццы', 'count': 350, 'measure': 'грамм','calories': 150 },
      { 'name': 'Куриное филе вареное', 'count': 200, 'measure': 'грамм', 'calories': 150},
      { 'name': 'Сладкий перец', 'count': 1, 'measure': 'штука','calories': 150 },
      { 'name': 'Лук репчатый', 'count': 1.2, 'measure': 'штука' ,'calories': 150},
      { 'name': 'Кетчуп', 'count': 2, 'measure': 'столовые ложки','calories': 150 },
      { 'name': 'Сыр твердый', 'count': 80, 'measure': 'грамм', 'calories': 150},
      { 'name': 'молотый черный перец', 'measure': 'по вкусу','calories': 1 },
      { 'name': 'Соль', 'count': null, 'measure': 'по вкусу','calories': 0 }

    ],
    instruction: ['Тесто раскатайте и уложите в поддон для выпечки пиццы, сформируйте бортик из теста.', 'Смажьте тесто кетчупом и посыпьте луком (тонкими перьями).', 'Выложите мясо вареной куриной грудки (кубиками) на основу для пиццы.', 'Затем разложите по всей площади будущей пиццы полукольца сладкого перца.', 'Засыпьте начинку твёрдым сыром (крупная тёрка) и посыпьте небольшим количеством чёрного молотого перца.', 'Запекайте пиццу примерно 15 минут в разогретой до 200 градусов духовке.'],
  },

  {
    id: 8,
    image: 'https://images.pexels.com/photos/2732666/pexels-photo-2732666.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    title: 'Блины на молоке',
    time: 20,
    portions: 10,
    ingridients: [
      { 'name': 'Пшеничная мука', 'count': 400, 'measure': 'грамм','calories': 150 },
      { 'name': 'Сахар', 'count': 2, 'measure': 'столовые ложки','calories': 110 },
      { 'name': 'Куриное яйцо', 'count': 5, 'measure': 'штук','calories': 150 },
      { 'name': 'Молоко', 'count': 1, 'measure': 'литр','calories': 150 },
      { 'name': 'Масло оливковое', 'count': 2, 'measure': 'столовые ложки', 'calories': 150},
      { 'name': 'Соль', 'count': null, 'measure': 'на кончике ножа', 'calories': 0}
    ],
    instruction: ['Взбейте яйца с сахаром.', 'Постепенно введите муку и соль, чередуя с молоком и аккуратно размешайте до однородной массы.',
      'Оставьте на 20 минут.', 'Добавьте в тесто растительное масло и жарьте блины на сильно разогретой сковороде.'],
  },
  {
    id: 9,
    image: 'https://images.pexels.com/photos/2072476/pexels-photo-2072476.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    title: 'Шарлотка',
    time: 15,
    portions: 8,
    ingridients: [
      { 'name': 'Пшеничная мука', 'count': 1, 'measure': 'стакан','calories': 150 },
      { 'name': 'Сахар', 'count': 1, 'measure': 'стакан','calories': 55 },
      { 'name': 'Куриное яйцо', 'count': 4, 'measure': 'штуки', 'calories': 150},
      { 'name': 'Яблоко', 'count': 1, 'measure': 'киллограмм','calories': 150 },
      { 'name': 'Сода', 'count': 0.5, 'measure': 'чайной ложки','calories': 150 },
      { 'name': 'Соль', 'count': null, 'measure': 'на кончике ножа', 'calories': 0}
    ],
    instruction: ['Белки взбить с половиной стакана сахара.', 'Желтки взбить с оставшимся сахаром.', 'Соединить все вместе и постепенно добавить муку.', 'Добавить соль и соду.', 'Добавить нарезанные кубиками яблоки.', 'Форму для выпекания смазать маслом и посыпать манной крупой.', 'Выложить массу в форму и поставить в духовку, разогретую до 180 градусов.', 'Выпекать 30-40 минут'],
  },
  {
    id: 10,
    image: 'https://images.pexels.com/photos/3535383/pexels-photo-3535383.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    title: 'Стейк',
    time: 20,
    portions: 2,
    ingridients: [
      { 'name': 'Свинина ошеек', 'count': 450, 'measure': 'грамм','calories': 150 },
      { 'name': 'Лук репчатый', 'count': 1, 'measure': 'штука','calories': 150 },
      { 'name': 'Масло оливковое', 'count': 6, 'measure': 'столовых ложки', 'calories': 150},
      { 'name': 'Соевый соус', 'count': 3, 'measure': 'столовые ложки','calories': 150 },
      { 'name': 'молотый черный перец', 'count': null, 'measure': 'по вкусу','calories': 1 },
      { 'name': 'Помидоры', 'count': 1, 'measure': 'штука','calories': 150 },
      { 'name': 'Соль', 'count': null, 'measure': 'на кончике ножа','calories': 0 }
    ],
    instruction: ['Подготовить мясо для маринования, лучше, когда оно имеет комнатную температуру. Отбивать его не нужно, просто нужно взять вилку поострее и сделать множество проколов с обеих сторон.', 'Мясо хорошо смазать оливковым маслом.Добавить соевый соус.', 'Помолоть чёрный перец, можно раздавить в ступке, чтобы частички были крупнее. Посолить.', 'Мясо хорошо смочить полученным маринадом и оставить немного полежать в ванночке (минут 5-10).', 'На смазанную маслом раскалённую сковороду уложить кусок свинины плашмя, огонь убавить до среднего, обжаривать с одной стороны не менее 5-6 минут. Перевернуть и обжарить столько же с другой стороны.', 'Приготовить кусок фольги, на который уложить обжаренное мясо, можно положить на него кусочек сливочного масла. Хорошо упаковать фольгу и дать стейку настояться, чтобы мясные соки в нем равномерно распределились.',
      'Тем временем приготовить гарнир: нарезать крупными дольками лук и помидоры, можно взять мелкие луковички или шалот целиком, помидоры могут быть черри. Но, если не окажется мелких овощей, и так получается очень вкусно, главное — не превратить всё в кашу.',
      'На оливковом масле слегка обжарить лук.Когда он чуть зарумянится, уложить в промежутки между луком помидоры, кожицей вниз, слегка пожарить до мягкости — минуты 3, поперчить и посолить.', 'Всё, стейк готов, остаётся его развернуть. Из мяса вытекает прозрачный сок, если мутный, — то ваш стейк не прожарился. Отправьте его в микроволновку на 2-3 минуты при максимальной мощности, кстати, разогревать тоже лучше в микроволновке. Можно подавать стейки прямо в конвертиках, можно выложить на тарелку и огарнировать поджаренными овощами.'],
  },

  {
    id: 11,
    image: 'https://images.pexels.com/photos/793762/pexels-photo-793762.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    title: 'Американские блины',
    time: 20,
    portions: 10,
    ingridients: [
      { 'name': 'Пшеничная мука', 'count': 2, 'measure': 'стакана','calories': 150 },
      { 'name': 'Сахар', 'count': 3, 'measure': 'столовые ложки','calories': 165 },
      { 'name': 'Куриное яйцо', 'count': 2, 'measure': 'штуки', 'calories': 150},
      { 'name': 'Молоко', 'count': 2, 'measure': 'стакана','calories': 13 },
      { 'name': 'Растительное масло', 'count': 0.25, 'measure': 'стакана','calories': 150 },
      { 'name': 'Гашеная сода', 'count': 1, 'measure': 'чайная ложка','calories': 150 },
      { 'name': 'Соль', 'count': 1, 'measure': 'чайная ложка','calories': 10 }
    ],
    instruction: ['Яйца взбить с сахаром и солью до появления пены.', 'Добавить стакан молока, хорошо взбить венчиком, постепенно всыпать муку, постоянно разбивая комочки венчиком.', 'Повторить предыдущий пункт, добавив оставшиеся стаканы молока и муки.', 'Влить растительное масло (можно заменить топленым сливочным).', 'Погасить соду, добавить в тесто и еще раз хорошо перемешать. Оставить постоять минут 5–10. За это время разогреть сковороду.', 'Жарить на умеренном огне. Как только появятся и начнут лопаться пузырьки, перевернуть оладушек и жарить еще секунд 20.'],
  },
  {
    id: 12,
    image: 'https://images.pexels.com/photos/1755785/pexels-photo-1755785.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    title: 'Французский хлеб',
    time: 20,
    portions: 6,
    ingridients: [
      { 'name': 'Пшеничная мука', 'count': 1, 'measure': 'килограмм', 'calories': 550},
      { 'name': 'Вода', 'count': 625, 'measure': 'миллилитров','calories': 0 },
      { 'name': 'Свежие дрожжи', 'count': 40, 'measure': 'грамм' , 'calories': 100},
      { 'name': 'Соль', 'count': 16, 'measure': 'грамм','calories': 0 }
    ],
    instruction: ['Смешайте соль с мукой и дрожжами. Насыпьте половину муки в большую миску, потом налейте половину воды, и в таком же порядке добавьте оставшиеся муку и воду. Руками разомните дрожжи и замесите тесто. При необходимости добавьте еще муки или воды, чтобы получить правильную консистенцию.', 'Накройте миску с тестом пищевой пленкой и поставьте подниматься (до двукратной величины) в теплое место. Я еще укутываю миску полотенцем и ставлю на грелку, но и без грелки за час тесто увеличится вдвое.', 'Когда тесто поднялось, выньте его из миски и еще раз хорошо вымесите, чтобы не осталось пузырьков воздуха. Сделайте из теста шар (движением снаружи внутрь вы как бы растягиваете тесто с верхней части шара, чтобы неровные концы оказались внизу, у вас в ладони).', 'На противень постелите пекарскую бумагу, посыпьте мукой и положите сформованный шар теста и оставьте на противне подниматься еще примерно на час.', 'Когда тесто во второй раз поднялось, сделайте несколько надрезов ножом и поставьте в духовку (250 градусов) на 35–40 минут, пока корочка не станет золотисто-коричневой. Важно ставить духовку на режим простого нагрева (без вентилятора) и на дно духовки нужно поставить емкость с водой, чтобы воздух был влажным.', 'Когда хлеб готов, выньте его из духовки, положите на решетку и оставьте так примерно на 3 часа доходить до кондиции, после чего хлеб готов к употреблению.'],
  },

  {
    id: 13,
    image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    title: 'Бургер',
    time: 25,
    portions: 1,
    ingridients: [
      { 'name': 'Говяжья лопатка', 'count': 200, 'measure': 'грамм','calories': 150 },
      { 'name': 'Помидоры', 'count': 10, 'measure': 'грамм','calories': 150 },
      { 'name': 'Маринованные огурцы', 'count': 10, 'measure': 'грамм','calories': 150 },
      { 'name': 'Красный лук', 'count': 5, 'measure': 'грамм','calories': 150 },
      { 'name': 'Салат айсберг', 'count': 20, 'measure': 'грамм','calories': 150 },
      { 'name': 'Сырный соус', 'count': 20, 'measure': 'грамм','calories': 150 },
      { 'name': 'Растительное масло', 'count': 1, 'measure': 'столовые ложки', 'calories': 150},
      { 'name': 'Масло для фритюрая', 'count': 1, 'measure': 'литр', 'calories': 150},
      { 'name': 'Булочка с кунжутом', 'count': 1, 'measure': 'штука','calories': 150 },
      { 'name': 'Бекон', 'count': 2, 'measure': 'ломтика','calories': 150 },
      { 'name': 'Соль', 'count': null, 'measure': 'по вкусу','calories': 0 },
      { 'name': 'Кетчуп', 'count': null, 'measure': 'по вкусу', 'calories': 150},
      { 'name': 'Молотый черный перец', 'count': null, 'measure': 'по вкусу','calories': 1}
    ],
    instruction: ['Говяжью лопатку вместе с жиром прокрутить через крупный нож мясорубки, добавить соль и черный перец, сформировать получившийся фарш в котлету. Жарить на растительном масле на сковороде-гриль до нужной степени готовности.', 'Картошку нарезать крупной соломкой, затем обвалять в кукурузной муке и обжарить во фритюре.', 'Круглую булочку для бургера разрезать надвое, слегка поджарить на сковороде-гриль половины с внутренней стороны. На нижнюю половину постелить салат «Айсберг», добавить следом соус для бургера, на него положить котлету, бекон, полить ее сырным соусом «Чеддер», сверху выложить нарезанные помидоры, огурцы, тонкие колечки красного лука и посыпать жареным хрустящим луком. Накрыть второй половиной булки.', 'Подавать бургер с картофелем фри и кетчупом.'],
  },

  {
    id: 14,
    image: 'https://images.pexels.com/photos/4110251/pexels-photo-4110251.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    title: 'Рис',
    time: 25,
    portions: 1,
    ingridients: [
      { 'name': 'Говяжья лопатка', 'count': 200, 'measure': 'грамм','calories': 150 },
      { 'name': 'Помидоры', 'count': 10, 'measure': 'грамм','calories': 150 },
      { 'name': 'Маринованные огурцы', 'count': 10, 'measure': 'грамм','calories': 150 },
      { 'name': 'Красный лук', 'count': 5, 'measure': 'грамм', 'calories': 150},
      { 'name': 'Салат айсберг', 'count': 20, 'measure': 'грамм', 'calories': 150},
      { 'name': 'Сырный соус', 'count': 20, 'measure': 'грамм', 'calories': 150},
      { 'name': 'Растительное масло', 'count': 1, 'measure': 'столовые ложки','calories': 150},
      { 'name': 'Масло для фритюрая', 'count': 1, 'measure': 'литр', 'calories': 150},
      { 'name': 'Булочка с кунжутом', 'count': 1, 'measure': 'штука', 'calories': 150},
      { 'name': 'Бекон', 'count': 2, 'measure': 'ломтика','calories': 150 },
      { 'name': 'Соль', 'count': null, 'measure': 'по вкусу','calories': 0 },
      { 'name': 'Кетчуп', 'count': null, 'measure': 'по вкусу','calories': 150 },
      { 'name': 'Молотый черный перец', 'count': null, 'measure': 'по вкусу','calories': 1 }
    ],
    instruction: ['Говяжью лопатку вместе с жиром прокрутить через крупный нож мясорубки, добавить соль и черный перец, сформировать получившийся фарш в котлету. Жарить на растительном масле на сковороде-гриль до нужной степени готовности.', 'Картошку нарезать крупной соломкой, затем обвалять в кукурузной муке и обжарить во фритюре.', 'Круглую булочку для бургера разрезать надвое, слегка поджарить на сковороде-гриль половины с внутренней стороны. На нижнюю половину постелить салат «Айсберг», добавить следом соус для бургера, на него положить котлету, бекон, полить ее сырным соусом «Чеддер», сверху выложить нарезанные помидоры, огурцы, тонкие колечки красного лука и посыпать жареным хрустящим луком. Накрыть второй половиной булки.', 'Подавать бургер с картофелем фри и кетчупом.'],
  },
]

interface Ingridient {
  name: string,
  count?: number | null,
  measure: string,
  calories: number,
}

interface Recipe {
  id: number,
  image: string,
  title: string,
  time: number,
  portions: number,
  ingridients: Ingridient[],
  instruction: string[],
}

export function getRecipe(id: number): Recipe {
  const copyFrom: Recipe = recipes[id % recipes.length];
  let { image, title, time, ingridients, instruction, portions } = copyFrom;

  return {
    id: id,
    image: image,
    title: title,
    time: time,
    portions: portions,
    ingridients: ingridients,
    instruction: instruction,
  }
}

function getRecipes(pageNumber: number): Recipe[] {
  const RECIPIES_PER_PAGE: number = 16;
  const recipies: Recipe[] = [];

  for (let i = 1; i <= RECIPIES_PER_PAGE; ++i) {
    const cardIndex: number = pageNumber * RECIPIES_PER_PAGE + i;
    recipies.push(getRecipe(cardIndex));
  }

  return recipies;
}

interface Page<T> {
  totalPages: number,
  nextPage: number,
  prevPage: number,
  currentPage: number,
  result: T[],
}

export function getRecipesFromServer(page: number): Page<Recipe> {
  const TOTAL_PAGES: number = 100;
  const ITEM_PER_PAGE: number = 16;

  return {
    totalPages: TOTAL_PAGES,
    nextPage: page + 1,
    prevPage: page - 1,
    currentPage: page,
    result: getRecipes(page),
  }
}

export function getRecipesFromServerAsync(page: number): Promise<Page<Recipe>> {
  return new Promise((resolve, reject) => {
    const delay: number = Math.random() * (1000 - 200) + 200; // 0.2 to 5 seconds
    setTimeout(() => {
      resolve(getRecipesFromServer(page)); // resolve promise
    }, delay);
  });

}

