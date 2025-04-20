import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutompipe'
})
export class CutompipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
