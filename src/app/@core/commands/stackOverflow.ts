import Line from '../entities/Line';
import Command from './Command';
import {CurrentLinesStoresService} from '../current-lines-stores.service';

const StackOverflow: Command = {
  action: (currentLines: CurrentLinesStoresService) => {
    currentLines.addLine(Line.out('https://stackoverflow.com/users/6707985'));
  },
  description: 'Shows a link to my Stack Overflow profile',
  name: 'stackoverflow'
};

export default StackOverflow;
