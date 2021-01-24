import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByName'
})
export class SortByNamePipe implements PipeTransform {
  transform(items: any, sort: string): any {
    if(sort == 'isAsc'){
      if(items){
        return items.sort((x: any, y: any) => {
          return x.login.localeCompare(y.login);
        });
      }
    } else if (sort == 'isDesc'){
      return items.sort((x: any, y: any) => {
        return y.login.localeCompare(x.login);
      });
    } else {
      return items;
    }
  }
}
