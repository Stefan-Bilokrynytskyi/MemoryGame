export const getTimeDependsToLevel = (level: string): number => {
  switch (level) {
    case 'easy':
      return 60000;
    case 'medium':
      return 90000;
    case 'hard':
      return 120000;
    default:
      return 120000;
  }
};
