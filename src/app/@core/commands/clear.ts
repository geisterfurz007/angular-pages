import Command from './Command';
import {CurrentLinesStoresService} from '../current-lines-stores.service';

const Clear: Command = {
  action: (currentLines: CurrentLinesStoresService) => {
    currentLines.clear();
  },
  description: 'Clears the console',
  name: 'clear'
};

export default Clear;
