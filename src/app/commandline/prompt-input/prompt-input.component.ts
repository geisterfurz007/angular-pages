import { Component, OnInit } from '@angular/core';
import Line from '../../@core/entities/Line';
import {CurrentLinesStoresService} from '../../@core/current-lines-stores.service';
import {CommandHistoryStoreService} from '../../@core/command-history-store.service';
import CommandConfig from '../../@core/commands';

@Component({
  selector: 'app-prompt-input',
  templateUrl: './prompt-input.component.html',
  styleUrls: ['./prompt-input.component.scss']
})
export class PromptInputComponent implements OnInit {

  constructor(private currentLines: CurrentLinesStoresService, private commandHistory: CommandHistoryStoreService) { }

  ngOnInit(): void {
  }

  keyHandler(ev: KeyboardEvent): void {
    if (ev.key === 'Enter') {
      const content = (ev.target as HTMLInputElement).value;
      this.currentLines.updatePrompt(content);
      ev.preventDefault();

      this.handleCommand(content);

      this.currentLines.markOutputDone();
      this.commandHistory.addEntry(content);
      (ev.target as HTMLInputElement).value = '';

      setTimeout(() => (document.querySelector('input.prompt') as HTMLInputElement)?.focus(), 1);
    } else if (ev.key === 'Tab') {
      ev.preventDefault();

      const content = (ev.target as HTMLInputElement).value;
      if (content.length < 2) { return; }

      const autoComplete = Object.keys(CommandConfig).filter((cmd) =>
        cmd.startsWith(content)
      )[0];
      if (autoComplete === undefined) { return; }

      (ev.target as HTMLInputElement).value = autoComplete;
    } else if (ev.key === 'ArrowUp') {
      (ev.target as HTMLInputElement).value = this.commandHistory.goBackAndGetPrevious();
    } else if (ev.key === 'ArrowDown') {
      (ev.target as HTMLInputElement).value = this.commandHistory.goForwardAndGetNext();
    }
  }

  handleCommand(command: string): void {
    const splits = command.split(' ');
    const actualCommand = splits.shift();

    if (actualCommand === undefined) { return; }

    const restArgs = splits.join(' ');

    const cmd = CommandConfig[actualCommand];

    if (cmd === undefined || cmd === null) {
      this.currentLines.addLine(
        new Line(`Could not find command "${actualCommand}".`, false, false)
      );

      return;
    }

    const func = cmd.action;
    func(this.currentLines, restArgs);
  }

}
