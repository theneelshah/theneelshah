const constants = {
  timeout: 1000,
  leftAlignText: (
    words: string[],
    wordsPerLine: number,
    startingSpaces: number,
  ) => {
    let result = '';

    for (let i = 0; i < words.length; i += wordsPerLine) {
      const lineWords = words.slice(i, i + wordsPerLine);

      let line = ' '.repeat(startingSpaces);
      for (let j = 0; j < lineWords.length; j++) {
        line += '- ' + lineWords[j];
        if (j < lineWords.length - 1) {
          const spacesToAdd =
            startingSpaces + Math.max(0, startingSpaces - lineWords[j].length);
          line += ' '.repeat(spacesToAdd);
        }
      }

      result += line + '\n';
    }

    return result;
  },
};

export default constants;
