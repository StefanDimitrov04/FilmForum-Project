import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slice'
})
export class SlicePipe implements PipeTransform {

  transform(value: string, endNumber: number = 150): unknown {
    return `${value.substring(0, endNumber)}${value.length > endNumber ? '...' : ''}`;
  }

}
