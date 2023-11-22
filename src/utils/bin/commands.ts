import * as bin from './index';
import config from '../../../config.json';
import constants from '../constants';
import headShotImg from '../../../public/assets/headshot/headshot.png';

export const help = async (args: string[]): Promise<string> => {
  const c = constants.leftAlignText(Object.keys(bin).sort(), 3, 10);

  return `Welcome to my portfolio! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'summary' to display summary.
Type 'gui' to open a GUI portfolio.
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
'gui' - my GUI based portfolio.
'resume' - my latest resume.
'readme' - my github readme.`;
};

export const gui = async (args: string[]): Promise<string> => {
  setTimeout(() => {
    window.open(`https://terminal.theneelshah.com`);
  }, constants.timeout);

  return `Opening my GUI portfolio...`;
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

export const work = async (args?: string[]): Promise<string> => {
  return constants.workExp;
};

export const education = async (args?: string[]): Promise<string> => {
  return constants.education;
};

export const volunteer = async (args?: string[]): Promise<string> => {
  return constants.volunteering;
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
