import { Component, OnInit } from '@angular/core';
import {CurrentLinesStoresService} from '../@core/current-lines-stores.service';

@Component({
  selector: 'app-commandline',
  templateUrl: './commandline.component.html',
  styleUrls: ['./commandline.component.scss']
})
export class CommandlineComponent implements OnInit {

  constructor(public currentLines: CurrentLinesStoresService) { }

  ngOnInit(): void {
  }

  focusPrompt(): void {
    (document.querySelector('input.prompt') as HTMLInputElement)?.focus();
  }

}
