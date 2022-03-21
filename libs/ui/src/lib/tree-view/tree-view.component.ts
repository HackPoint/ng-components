import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Link, LinksProviderService } from './links-provider.service';
import { Observable, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'ngc-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TreeViewComponent implements OnInit, OnDestroy {
  private readonly destroy$: Subject<unknown> = new Subject<unknown>();

  menuList$!: Observable<Link[]>;

  constructor(private readonly menuProvider: LinksProviderService) {
  }


  ngOnInit(): void {
    this.menuList$ = this.menuProvider.buildMenu();
    console.log(this.menuProvider.buildMenu());
  }


  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
}
