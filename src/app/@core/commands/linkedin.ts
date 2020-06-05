import Line from '../entities/Line';
import Command from './Command';
import {CurrentLinesStoresService} from '../current-lines-stores.service';

const Linkedin: Command = {
  action: (currentLines: CurrentLinesStoresService) => currentLines.addLine(Line.out('https://linkedin.com/in/michelvonv')),
  description: 'Shows a link to my LinkedIn account',
  name: 'linkedin'
};

export default Linkedin;
