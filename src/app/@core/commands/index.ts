import clear from './clear';
import about from './about';
import help from './help';
import email from './email';
import github from './github';
import stackoverflow from './stackOverflow';
import Command from './Command';

interface CommandConfigInterface {
  [key: string]: Command;
}

const config: CommandConfigInterface = {
  about,
  // 'cls': clear,
  clear,
  email,
  help,
  github,
  stackoverflow
};

export default config;
