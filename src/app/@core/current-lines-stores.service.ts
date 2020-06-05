import {Injectable} from '@angular/core';
import Line from './entities/Line';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrentLinesStoresService {
  private readonly _lines = new BehaviorSubject<Array<Line>>([
    new Line('Welcome to geisterfurz007.github.io!', false, false),
    new Line('Feel free to have a look around, there isn\'t a lot here yet but you might find a thing or two.', false, false),
    new Line('', true, true),
  ]);
  readonly lines$ = this._lines.asObservable();

  constructor() {
  }

  get lines(): Array<Line> {
    return this._lines.getValue();
  }

  set lines(val: Array<Line>) {
    this._lines.next(val);
  }

  addLine = (line: Line): void => {
    this.lines = [...this.lines, line];
  }

  updatePrompt = (input: string): void => {
    this.lines[this.lines.length - 1] = new Line(input, true, false);
    this.lines = [...this.lines];
  }

  markOutputDone = (): void => {
    this.addLine(Line.out(''));
    this.addLine(new Line('', true, true));
  }

  clear = (): void => {
    this.lines.length = 0;
  }
}
