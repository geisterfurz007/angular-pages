import {CurrentLinesStoresService} from '../current-lines-stores.service';

interface Command {
  action: (currentLines: CurrentLinesStoresService, ...args: string[]) => void;
  description: string;
  name: string;
}

export default Command;
