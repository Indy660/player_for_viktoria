const MUSIC_LIST = [
  {
    songName: 'ABBA - Mamma Mia.mp3'
  },
  {
    songName: 'Adele - Rolling in the Deep.mp3'
  },
  {
    songName: 'Antonio Vivaldi - inverno Winter (Allegro non molto).mp3'
  },
  {
    songName: 'Frank Sinatra - Fly Me To The Moon.mp3'
  },
  {
    songName: 'Frank Sinatra - Let It Snow.mp3'
  },
  {
    songName: 'Frank Sinatra - My Way.mp3'
  },
  {
    songName: 'Frank Sinatra - Strangers In The Night.mp3'
  },
  {
    songName: 'Frank Sinatra - The World We Knew (Over And Over).mp3'
  },
  {
    songName: 'Gidon Kremer-Christoph Eschenbach-Violin Concerto No. 3 - III.Andante.mp3'
  },
  {
    songName: 'Ilya Beshevli - Battlefield.mp3'
  },
  {
    songName: 'Ilya Beshevli - Beautiful Image.mp3'
  },
  {
    songName: 'Ilya Beshevli - City at Night.mp3'
  },
  {
    songName: 'Ilya Beshevli - Snow Waltz.mp3'
  },
  {
    songName: 'Ilya Beshevli - Tears of a Tiger.mp3'
  },
  {
    songName: 'Ilya Beshevli - Travel on the Wind.mp3'
  },
  {
    songName: 'Imagine Dragons feat. Lil Wayne - Believer.mp3'
  },
  {
    songName:
      'Mstislav Rostropovich-Bach-J.S.-Cello Suite No. 1 in G Major-BWV 1007 - I. Prelude.mp3'
  },
  {
    songName: 'Muse - Exogenesis-Symphony Pt. 1 Overture.mp3'
  },
  {
    songName: 'Muse - Exogenesis-Symphony Pt. 2 Cross-pollination.mp3'
  },
  {
    songName: 'Muse - Exogenesis-Symphony Pt. 3 Redemption.mp3'
  },
  {
    songName: 'Muse - I Belong to You.mp3'
  },
  {
    songName: 'Muse - New Born.mp3'
  },
  {
    songName: 'Muse - Plug in Baby.mp3'
  },
  {
    songName: 'Muse - Resistance.mp3'
  },
  {
    songName: 'Muse - Supermassive Black Hole.mp3'
  },
  {
    songName: 'Muse - Uprising.mp3'
  },
  {
    songName: 'Oxxxymiron - Башня из слоновой кости.mp3'
  },
  {
    songName: 'Oxxxymiron - Город под подошвой.mp3'
  },
  {
    songName: 'Oxxxymiron - Переплетено.mp3'
  },
  {
    songName: 'Queen - Bohemian Rhapsody.mp3'
  },
  {
    songName: 'Queen - I Want To Break Free.mp3'
  },
  {
    songName: 'Queen - The Show Must Go On.mp3'
  },
  {
    songName: 'Queen - We Are the Champions.mp3'
  },
  {
    songName: 'Radiohead - A Reminder.mp3'
  },
  {
    songName: 'Radiohead - Airbag.mp3'
  },
  {
    songName: 'Radiohead - Electioneering.mp3'
  },
  {
    songName: 'Radiohead - Exit Music For A Film.mp3'
  },
  {
    songName: 'Radiohead - Karma Police.mp3'
  },
  {
    songName: 'Radiohead - Subterranean Homesick Alien.mp3'
  },
  {
    songName: 'The Beatles - All My Loving (2009 Mono Remaster).mp3'
  },
  {
    songName: 'The Beatles - Let It Be.mp3'
  },
  {
    songName: 'Би-2 - Вечная призрачная встречная.mp3'
  },
  {
    songName: 'БИ-2 и Oxxxymiron - Пора возвращаться домой.mp3'
  },
  {
    songName: 'Борис Гребенщиков - Если бы не ты.mp3'
  },
  {
    songName: 'Глюк-oZa - Снег идет.mp3'
  },
  {
    songName: 'ДДТ - Метель.mp3'
  },
  {
    songName: 'Евгений Светланов-ГАСО СССР(Щелкунчик-1892) - Танец феи Драже.mp3'
  },
  {
    songName: 'Земфира - ГОРА.mp3'
  },
  {
    songName: 'Земфира - ДОКАЗАНО.mp3'
  },
  {
    songName: 'Земфира - ЛЮБОВЬ КАК СЛУЧАЙНАЯ СМЕРТЬ -LIVE.mp3'
  },
  {
    songName: 'Зоя Ященко - Белая гвардия.mp3'
  },
  {
    songName: 'Зоя Ященко и группа Белая гвардия - Кофейни.mp3'
  },
  {
    songName: 'Зоя Ященко и группа Белая гвардия - Питер.mp3'
  },
  {
    songName: 'Кино - Группа крови.mp3'
  },
  {
    songName: 'Кино - Закрой за мной дверь-я ухожу.mp3'
  },
  {
    songName: 'Кино - Кончится лето.mp3'
  },
  {
    songName: 'Кино - Кукушка.mp3'
  },
  {
    songName: 'Кино - Спокойная ночь.mp3'
  },
  {
    songName: 'Корни - 25-й этаж.mp3'
  },
  {
    songName: 'Корни - Хочешь-я тебе спою.mp3'
  },
  {
    songName: 'Король и Шут - Проклятый старый дом.mp3'
  },
  {
    songName: 'Машина Времени - Костер.mp3'
  },
  {
    songName: 'Машина Времени - Однажды Мир Прогнется под Нас.mp3'
  },
  {
    songName: 'Машина Времени - Он был старше её.mp3'
  },
  {
    songName: 'Машина Времени - Она Идет по Жизни-Смеясь.mp3'
  },
  {
    songName: 'Наутилус Помпилиус - Дыхание.mp3'
  },
  {
    songName: 'Наутилус Помпилиус - Крылья.mp3'
  },
  {
    songName: 'Наутилус Помпилиус - Скованные одной цепью.mp3'
  },
  {
    songName: 'Наутилус Помпилиус - Черные птицы.mp3'
  },
  {
    songName: 'Наутилус Помпилиус - Я хочу быть с тобой.mp3'
  },
  {
    songName: 'П.И. Чайковский-Балет «Щелкунчик» - Танец феи Драже.mp3'
  },
  {
    songName: 'П.И.Чайковский - Вальс цветов из балета «Щелкунчик» .mp3'
  },
  {
    songName: 'Порнофильмы - Дядя Володя.mp3'
  },
  {
    songName: 'Порнофильмы - Прости. Прощай. Привет.mp3'
  },
  {
    songName: 'Порнофильмы - Я так соскучился.mp3'
  },
  {
    songName: 'Сергей Воронов feat. Борис Гребенщиков-Детский Хор ВГТРК - Поезд в огне.mp3'
  },
  {
    songName: 'ЧАЙФ - 17 лет.mp3'
  },
  {
    songName: 'Чичерина Ту-лу-ла.mp3'
  },
  {
    songName: 'Юрий Шевчук-ДДТ - Просвистела.mp3'
  }
]

export { MUSIC_LIST }
