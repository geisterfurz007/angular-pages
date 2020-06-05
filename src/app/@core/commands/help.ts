import Line from '../entities/Line';
import Command from './Command';

import commands from './index';
import {CurrentLinesStoresService} from '../current-lines-stores.service';

const Help: Command = {
  action: (currentLines: CurrentLinesStoresService) => {
    const listing = Object.values(commands).map(c => `${c.name}: ${c.description}`);
    ['Available commands:', ...listing]
      .map(Line.out).forEach(currentLines.addLine);
  },
  description: 'Shows this help',
  name: 'help'
};

export default Help;
