const techList = (array, string) => {
  if (array.length === 0) return 'Vazio!';

  const list = array
    .sort()
    .map((technology) => ({
      tech: technology,
      name: string
    }));
    return list;
};

module.exports = techList;