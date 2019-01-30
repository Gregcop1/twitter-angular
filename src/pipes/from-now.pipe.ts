import { Pipe, PipeTransform } from '@angular/core';
import {dateHelper} from '@helpers';

@Pipe({name: 'fromNow'})
export class FromNowPipe implements PipeTransform {
  transform(value: number): string {
    return dateHelper.fromNow(value);
  }
}
