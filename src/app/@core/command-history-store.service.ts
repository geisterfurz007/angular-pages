import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommandHistoryStoreService {
  private readonly _history = [];

  private currentIndex = 0;

  constructor() { }

  addEntry(command: string): void {
    this._history.push(command);
  }

  goBackAndGetPrevious(): string {
    if (this._history.length === 0) { return ''; }

    this.currentIndex = this.currentIndex < 1 ? 0 : this.currentIndex - 1;
    return this._history[this.currentIndex];
  }

  goForwardAndGetNext(): string {
    if (this._history.length === 0) { return ''; }

    this.currentIndex = (this.currentIndex + 1) % this._history.length;
    return this._history[this.currentIndex];
  }
}
