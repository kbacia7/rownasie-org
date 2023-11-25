const DIACRITICAL_CHARACTERS = [
  ["ą", "a"],
  ["ć", "c"],
  ["ę", "e"],
  ["ń", "n"],
  ["ó", "o"],
  ["ś", "s"],
  ["ż", "z"],
  ["ź", "z"],
  ["ł", "l"],
];

const escapeDiacriticalCharacters = (str: string) => {
  DIACRITICAL_CHARACTERS.forEach(([diactrical, nonDiactrical]) => {
    str = str.replace(new RegExp(diactrical, "g"), nonDiactrical);
  });

  return str;
};

const toSlug = (str: string) =>
  escapeDiacriticalCharacters(str)
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");

export default toSlug;
