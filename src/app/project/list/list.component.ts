import {Component, OnInit} from '@angular/core';
import {ProjectItem} from '../../domain/ProjectItem';
import {NzModalService, NzModalRef} from 'ng-zorro-antd';
import {NewProjectComponent} from '../new-project/new-project.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  projects: ProjectItem[] = [
    {title: '标题一', desc: '描述', img: 'http://placehold.it/800x320'},
    {title: '标题二', desc: '描述而', img: 'http://placehold.it/800x320'}
  ];

  constructor(private modalService: NzModalService) {
  }

  ngOnInit() {
  }

  new() {
    const ref: NzModalRef = this.modalService.create({
      nzTitle: '新建项目',
      nzContent: NewProjectComponent
    });
  }
}
