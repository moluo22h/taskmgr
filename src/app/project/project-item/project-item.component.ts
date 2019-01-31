import {Component, OnInit, Input} from '@angular/core';
import {ProjectItem} from '../../domain/ProjectItem';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.css']
})
export class ProjectItemComponent implements OnInit {

  @Input()
  item: ProjectItem;

  constructor() {
  }

  ngOnInit() {
  }

}


