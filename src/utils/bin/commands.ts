import * as bin from './index';
import config from '../../../config.json';
import headShotImg from '../../../public/assets/headshot/headshot.png';

export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';

  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }

  return `Welcome to my portfolio! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'sumfetch' to display summary.
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
'sumfetch' - short summary.
'resume' - my latest resume.
'readme' - my github readme.`;
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);

  return 'Opening my resume...';
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);

  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening my github profile...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening my linkedin profile...';
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);

  return `Searching google for ${args.join(' ')}...`;
};

export const hackernews = async (args: string[]): Promise<string> => {
  window.open('https://news.ycombinator.com/');

  return `Opening Hackernews...`;
};

export const pwd = async (args: string[]): Promise<string> => {
  return `https://www.theneelshah.com`;
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
  return `unfortunately, i cannot afford more directories.
if you want to help, you can type 'donate'.`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const sudo = async (args?: string[]): Promise<string> => {
  return `Permission denied: with little power comes... no responsibility? `;
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

Type 'help' to see the list of available commands.
Type 'sumfetch' to display summary.
Type 'repo' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">here</a></u> for the Github repository.
`;
};
