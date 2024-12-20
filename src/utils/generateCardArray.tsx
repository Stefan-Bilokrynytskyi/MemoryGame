import Cards, {CardType} from './constants/Cards';

export type CardItem = CardType & {
  id: string;
};

/**
 * Функция, возвращающая перемешанный массив карточек с парами,
 * каждая карточка имеет уникальный id.
 * @param availableSvgs - Массив доступных карточек `{ name, component }`.
 * @param count - Количество уникальных карточек, из которых нужно сформировать пары.
 * @returns Массив объектов вида { name, component, id }, перемешанных в случайном порядке.
 */
function getShuffledCardPairs(
  availableSvgs: CardType[],
  count: number,
): CardItem[] {
  if (count > availableSvgs.length) {
    throw new Error(
      'Недостаточно доступных SVG для выбранного количества уникальных карточек',
    );
  }

  // Функция перемешивания массива (Fisher-Yates shuffle)
  function shuffle<T>(array: T[]): T[] {
    let currentIndex = array.length,
      randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  }

  const svgsCopy = [...availableSvgs];
  shuffle(svgsCopy);

  const selectedSvgs = svgsCopy.slice(0, count);

  let idCounter = 0;
  const pairedSvgs: CardItem[] = selectedSvgs.reduce<CardItem[]>((acc, svg) => {
    // Для каждой пары карточек генерируем уникальный id
    acc.push({
      ...svg,
      id: `card-${idCounter++}`,
    });
    acc.push({
      ...svg,
      id: `card-${idCounter++}`,
    });
    return acc;
  }, []);

  const shuffledPairs = shuffle(pairedSvgs);

  return shuffledPairs;
}

function chunkArray<T>(array: T[], size: number): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

const generateCardArray = (level: string) => {
  let count;
  switch (level) {
    case 'easy':
      count = 7;
      break;
    case 'medium':
      count = 11;
      break;
    case 'hard':
      count = 15;
      break;
    default:
      count = 16;
      break;
  }

  const cards = getShuffledCardPairs(Cards, count);
  // Предполагается, что карточек будет достаточно, чтобы минимум составить первую
  // и последнюю строки по 3 карты. Например, count >= 3.

  if (cards.length < 6) {
    // Нужно минимум 6 карточек, чтобы сформировать первую и последнюю строки по 3.
    throw new Error(
      'Слишком мало карточек для формирования требуемой раскладки.',
    );
  }

  const firstRow = cards.slice(0, 3);
  const lastRow = cards.slice(cards.length - 3);
  const middleCards = cards.slice(3, cards.length - 3);

  // Разбиваем среднюю часть по 4 карточки
  const middleRows = chunkArray(middleCards, 4);

  // Собираем итоговую структуру
  return [firstRow, ...middleRows, lastRow];
};

export default generateCardArray;
