import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, map, Observable } from 'rxjs';

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


const MENU_URL = 'https://api.priroda56.ru/api/links';
const SUB_MENU_URL = 'https://api.priroda56.ru/api/sublinks';

@Injectable({
  providedIn: 'root'
})
export class LinksProviderService {
  constructor(private readonly http: HttpClient) {
  }

  buildMenu(): Observable<Link[]> {
    const linksRequest = this.http.get(MENU_URL);
    const subLinksRequest = this.http.get(SUB_MENU_URL);
    return forkJoin([linksRequest, subLinksRequest])
      .pipe(
        map((results: readonly unknown[]) => {
          const links = results[0] as Link[];
          const subLinks = results[1] as SubLink[];
          const menu: Link[] = [];
          for (const item of links) {
            const subMenu: SubLink[] = subLinks.filter(i => i.parent.text === item.text) as SubLink[];
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
        })
      );

  }
}
