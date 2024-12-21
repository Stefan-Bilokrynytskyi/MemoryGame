import Cards, {CardType} from './constants/Cards';

export type CardItem = CardType & {
  id: string;
};

function getShuffledCardPairs(
  availableSvgs: CardType[],
  count: number,
): CardItem[] {
  if (count > availableSvgs.length) {
    throw new Error(
      'Недостаточно доступных SVG для выбранного количества уникальных карточек',
    );
  }

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

  if (cards.length < 6) {
    throw new Error(
      'Слишком мало карточек для формирования требуемой раскладки.',
    );
  }

  const firstRow = cards.slice(0, 3);
  const lastRow = cards.slice(cards.length - 3);
  const middleCards = cards.slice(3, cards.length - 3);

  const middleRows = chunkArray(middleCards, 4);

  return [firstRow, ...middleRows, lastRow];
};

export default generateCardArray;
