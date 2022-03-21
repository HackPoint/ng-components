import { Injectable } from '@angular/core';
import { links, sublinks } from './data';

export interface Link extends Item {
  subLinks: SubLink[] | null;
}

export interface SubLink extends Item {
  readonly parent: Link;
}

interface Item {
  readonly url: string;
  readonly text: string;
  readonly display: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class LinksProviderService {

  buildMenu(): Link[] {
    const menu: Link[] = [];
    for (const item of links) {
      const subMenu: SubLink[] = sublinks.filter(i => i.parent.text === item.text) as SubLink[];
      if (subMenu.length > 0) {
        menu.push({
          ...item,
          subLinks: subMenu,
        });
      } else {
        menu.push({
          ...item,
          subLinks: null
        });
      }
    }
    return menu;
  }
}
