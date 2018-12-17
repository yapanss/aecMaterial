import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(pipeData: any, pipeModifier: string): any {
    return pipeData.filter((item) => {
      return item['champ'].toLowerCase().includes(pipeModifier.toLowerCase())
             // item['lieu'].toLowercase().includes(pipeModifier.toLowercase()) ||
             // item['date'].toLowercase().includes(pipeModifier.toLowercase()) ||
    });
  }

}
