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
  workExp: `
  <h2 style="font-size: x-large;">Helpshift Technologies</h2>
  <h3 style="margin-top: -36px;">Software Engineer 1: Jul '21 - Aug '23</h3>
  <h2 style="font-size: x-large;">LocoBuzz</h2>
  <h3 style="margin-top: -36px;">Software Engineering Intern: Feb '21 - May '21</h3>
  <h2 style="font-size: x-large;">GoComet</h2>
  <h3 style="margin-top: -36px;">Software Engineering Intern: Jun '19 - Jul '21</h3>
  `,
  education: `
  <h2 style="font-size: x-large;">University of California, Irvine</h2>
  <h3 style="margin-top: -36px;">Masters of Software Engineering - December 2024</h3>
  <h2 style="font-size: x-large;">KJ Somaiya College of Engineering, Mumbai University</h2>
  <h3 style="margin-top: -36px;">BTech in Information Technology - June 2021</h3>
  <h2 style="font-size: x-large;">Thakur Polytechnic, Mumbai University</h2>
  <h3 style="margin-top: -36px;">Diploma in Information Technology - June 2018</h3>
  `,
  volunteering: `
  <h2 style="font-size: x-large;">Rotaract Club of Bombay West</h2>
  <h3 style="margin-top: -36px;">International Services Director</h3>
  <h2 style="font-size: x-large;">Hult Prize Foundation</h2>
  <h3 style="margin-top: -36px;">Organizer</h3>
  <h2 style="font-size: x-large;">Indian Society for Technical Education</h2>
  <h3 style="margin-top: -36px;">Senior Member</h3>
  `,
};

export default constants;
