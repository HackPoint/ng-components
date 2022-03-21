import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Link, LinksProviderService } from './links-provider.service';

@Component({
  selector: 'ngc-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TreeViewComponent implements OnInit {
  menuList!: Link[];

  constructor(private readonly menuProvider: LinksProviderService) {
  }

  ngOnInit(): void {
    this.menuList = this.menuProvider.buildMenu();
    console.log(this.menuProvider.buildMenu());
  }

}
