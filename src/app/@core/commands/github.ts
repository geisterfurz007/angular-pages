import Line from '../entities/Line';
import Command from './Command';
import {CurrentLinesStoresService} from '../current-lines-stores.service';

const Github: Command = {
  action: (currentLines: CurrentLinesStoresService) => {
    currentLines.addLine(Line.out('https://github.com/geisterfurz007'));
  },
  description: 'Shows a link to my github profile',
  name: 'github'
};

export default Github;
