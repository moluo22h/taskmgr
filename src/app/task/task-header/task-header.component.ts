import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-task-header',
  templateUrl: './task-header.component.html',
  styleUrls: ['./task-header.component.less']
})
export class TaskHeaderComponent implements OnInit {

  @Input() header = '';

  constructor() {
  }

  ngOnInit() {
  }

}
