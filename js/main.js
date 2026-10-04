/*
  id, число — идентификатор опубликованной фотографии.
  Это число от 1 до 25. Идентификаторы не должны повторяться.

  url, строка — адрес картинки вида photos/{{i}}.jpg,
  где {{i}} — это число от 1 до 25. Адреса картинок не должны повторяться.

  description, строка — описание фотографии.

  likes, число — количество лайков, поставленных фотографии. Случайное число от 15 до 200.

  comments, массив объектов — список комментариев, оставленных другими пользователями к этой фотографии.
  Количество комментариев к каждой фотографии — случайное число от 0 до 30.

  avatar, строка — адрес аватарки пользователя.
  строка, значение которой формируется по правилу img/avatar-{{случайное число от 1 до 6}}.svg.
  Аватарки подготовлены в директории img.

  message, строка — текст комментария.
  одно или два предложения из messages

  name, строка — имя пользователя.
*/

const names = [
  'Артем',
  'Виктор',
  'Иван',
  'Дмитрий',
  'Сергей',
  'Александр'
];

const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

// случайное число с заданным диапазоном min и max включительно
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// случайный элемент массива
const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];

// функция, которая создает массив из 25 сгенерированных JS объектов
const createComment = (comments) => {
  let ids = Array.from({ length: 100 }, (_, j) => j);

  for (let i = 0; i < getRandomNumber(0, 30); i++) {
    const id = getRandomArrayElement(ids);
    ids = ids.filter((x) => x !== id);
    const avatar = `img/avatar-${getRandomNumber(1, 6)}.svg`;
    const message = getRandomArrayElement(messages);
    const name = getRandomArrayElement(names);

    comments.push({
      id: id,
      avatar: avatar,
      message: message,
      name: name
    });
  }
};

// основная функция, которая создает массив из 25 сгенерированных JS объектов
const createDescriptionsPhoto = () => {
  const descriptions = [];

  for (let i = 1; i <= 25; i++) {
    const id = getRandomNumber(1, 25);
    const url = `photos/${getRandomNumber(1, 25)}.jpg`;
    const description = 'Очень красивые котики!';
    const likes = getRandomNumber(15, 200);
    const comments = [];

    createComment(comments);

    descriptions.push({
      id: id,
      url: url,
      description: description,
      likes: likes,
      comments: comments
    });
  }

  return descriptions;
};

// console.log(createDescriptionsPhoto());

