import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.less']
})
export class TaskItemComponent implements OnInit {

  @Input() item;

  constructor() {
  }

  ngOnInit() {
  }

}
