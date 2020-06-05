import {Component, Input, OnInit} from '@angular/core';
import Line from '../../@core/entities/Line';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss']
})
export class LineComponent implements OnInit {

  @Input() line: Line;

  prompt = `${window.location.toString()}>`;

  ngOnInit(): void {
  }

}
