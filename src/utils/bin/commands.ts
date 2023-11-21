import * as bin from './index';
import config from '../../../config.json';
import constants from '../constants';
import headShotImg from '../../../public/assets/headshot/headshot.png';

export const help = async (args: string[]): Promise<string> => {
  const c = constants.leftAlignText(Object.keys(bin).sort(), 3, 8);

  return `Welcome to my portfolio! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'summary' to display summary.
`;
};

export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);

  return 'Opening Github repository...';
};

export const about = async (args: string[]): Promise<string> => {
  return `Hi, I am ${config.name}. 
Welcome to my Portfolio!

More about me:
'summary' - short summary.
'resume' - my latest resume.
'readme' - my github readme.`;
};

export const resume = async (args: string[]): Promise<string> => {
  setTimeout(() => {
    window.open(`${config.resume_url}`);
  }, constants.timeout);

  return 'Opening my resume...';
};
export const email = async (args: string[]): Promise<string> => {
  setTimeout(() => {
    window.open(`mailto:${config.email}`);
  }, constants.timeout);

  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  setTimeout(() => {
    window.open(`https://github.com/${config.social.github}/`);
  }, constants.timeout);

  return 'Opening my github profile...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  setTimeout(() => {
    window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);
  }, constants.timeout);

  return 'Opening my linkedin profile...';
};

export const google = async (args: string[]): Promise<string> => {
  if (args.length === 0) {
    return 'Usage: google [query]. Example: google openai';
  }

  setTimeout(() => {
    window.open(`https://google.com/search?q=${args.join(' ')}`);
  }, constants.timeout);

  return `Searching google for ${args.join(' ')}...`;
};

export const hackernews = async (args: string[]): Promise<string> => {
  setTimeout(() => {
    window.open('https://news.ycombinator.com/');
  }, constants.timeout);

  return `Opening Hackernews...`;
};

export const pwd = async (args: string[]): Promise<string> => {
  return `<u><a class="text-light-blue dark:text-dark-blue underline" href="https://www.theneelshah.com" target="_blank">https://www.theneelshah.com</a></u>`;
};

export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `a
bunch
of
fake
directories`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `unfortunately, i cannot afford more directories.`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const sudo = async (args?: string[]): Promise<string> => {
  return `Permission denied: with little power comes... no responsibility? `;
};

export const work = async (): Promise<string> => {
  return `
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
  `;
};

export const banner = (args?: string[]): string => {
  return `
  <div style="display: inline-flex; align-items: center;">
    <img src=${headShotImg.src} width="200px" style="margin-right: 16px"/>

    #####  #    #  ######  #    #  ######  ######  #        ####   #    #    ##    #    # 
      #    #    #  #       ##   #  #       #       #       #       #    #   #  #   #    # 
      #    ######  #####   # #  #  #####   #####   #        ####   ######  #    #  ###### 
      #    #    #  #       #  # #  #       #       #            #  #    #  ######  #    # 
      #    #    #  #       #   ##  #       #       #       #    #  #    #  #    #  #    #
      #    #    #  ######  #    #  ######  ######  ######   ####   #    #  #    #  #    #
  </div>

Hey there! I'm Neel Shah, currently doing my Masters of Software Engineering at University of California, Irvine.

Type 'help' to see the list of available commands.
Type 'summary' to display summary.
Type 'resume' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.resume_url}" target="_blank">here</a></u> for my resume.
`;
};
