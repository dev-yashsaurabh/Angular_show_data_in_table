import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'address'
})
export class AddressPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    let str = `${value.street}, ${value.suite}, ${value.city}, ${value.zipcode}`;
    return str;
  }

}
