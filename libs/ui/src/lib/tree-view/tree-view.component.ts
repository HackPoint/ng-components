import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ng-components-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TreeViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
