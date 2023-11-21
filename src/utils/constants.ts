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
  <div style="text-align: justify; max-width: 60%; margin-top: -40px;">
  • Created a comprehensive “Branding and Customizations” dashboard for configuring the appearance of client Helpcenter. Added upwards of 10 customization options. Used JavaScript, ReactJS / Redux with SCSS.
  • Developed self-service auto-resolving smart FAQs using Handlebars, LitElements, SCSS. Resulted in increased revenue [5% over the period of a year] by focusing on issue volume growth
  • Used storybook to create dashboard of frontend components. Automated generation of documents for 120+ components with NodeJS.
  • Implemented code splitting using Webpack strategies, resulting in a 28% boost in overall speed and efficiency.
  • Reduced the CSS bundle size by an 15% by automated removal of legacy CSS styles.
  • Optimized client side SDK by tinkering with JavaScript event loop providing 20% faster load times.
  • Honoured as the recipient of the Employee of the Quarter award for Q2 2022 [April - June].
  • Fostered a collaborative environment for showcasing company achievements and projects with Lightning Talks initiative since April 2022.
  • Empowered new team members through hands-on mentoring, ensuring seamless on-boarding into our technology stack, company processes, and vibrant culture.
  </div>
  <h2 style="font-size: x-large;">LocoBuzz</h2>
  <div style="text-align: justify; max-width: 60%; margin-top: -40px;">
  • Overlooked the creation of a dashboard to show the data insights for customers using Javascript, ReactJS and ChartJS.
  • Helped setup development, developer communication and testing processes.
  • Met with clients to understand the dashboard requirements.
  </div>
  <h2 style="font-size: x-large;">GoComet</h2>
  <div style="text-align: justify; max-width: 60%; margin-top: -40px;">
  • Managed the design and content of the company website by utilizing NextJS and SCSS.
  • Implemented a new client side module to find the schedule of the shipping containers - “Shipping Schedule”. Utilised
  NextJS with styled components.
  • Collaborated with the frontend team to develop an internal frontend library, aiming to replace the reliance on third-party
  libraries and enhance application performance.
  </div>
  `,
  education: `
  <h2 style="font-size: x-large;">University of California, Irvine</h2>
  <h3 style="margin-top: -36px;">Masters of Software Engineering - December 2024</h3>
  <h2 style="font-size: x-large;">KJ Somaiya College of Engineering, Mumbai University</h2>
  <h3 style="margin-top: -36px;">BTech in Information Technology - June 2021</h3>
  <h2 style="font-size: x-large;">Thakur Polytechnic, Mumbai University</h2>
  <h3 style="margin-top: -36px;">Diploma in Information Technology - June 2018</h3>
  `,
};

export default constants;
