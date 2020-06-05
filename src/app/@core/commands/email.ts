import Line from '../entities/Line';
import Command from './Command';
import {CurrentLinesStoresService} from '../current-lines-stores.service';

const Email: Command = {
  action: (currentLines: CurrentLinesStoresService) => {
    ['The first part of this domain at google\'s mail server',
      '(if you are not a bot, you should be able to piece that one together)'].map(Line.out).forEach(currentLines.addLine);
  },
  description: 'Shows my mail address (please don\'t spam...)',
  name: 'email',
};

export default Email;
