import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.less']
})
export class TaskHomeComponent implements OnInit {

  lists: any[] = [
    {
      id: 1,
      name: '待办',
      tasks: [{id: 1, desc: '任务一：去星巴克买杯咖啡', owner: {id: 1, name: '张三'}, dueDate: new Date()}, {
        id: 1,
        desc: '任务一：去星巴克买杯咖啡',
        owner: {id: 1, name: '张三'},
        dueDate: new Date()
      }]
    },
    {id: 2, name: '处理中', tasks: [{id: 1, desc: '任务一：去星巴克买杯咖啡', owner: {id: 1, name: '张三'}, dueDate: new Date()}]},
    {id: 2, name: '已处理', tasks: [{id: 1, desc: '任务一：去星巴克买杯咖啡', owner: {id: 1, name: '张三'}, dueDate: new Date()}]},
    {id: 2, name: '待审批', tasks: [{id: 1, desc: '任务一：去星巴克买杯咖啡', owner: {id: 1, name: '张三'}, dueDate: new Date()}]},
    {id: 3, name: '已完成', tasks: [{id: 1, desc: '任务一：去星巴克买杯咖啡', owner: {id: 1, name: '张三'}, dueDate: new Date()}]}
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
