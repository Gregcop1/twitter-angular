import { Pipe, PipeTransform } from '@angular/core';
import {gravatarHelper} from '@helpers';

@Pipe({name: 'gravatar'})
export class GravatarPipe implements PipeTransform {
  transform(value: string): string {
    return gravatarHelper.getAvatar(value);
  }
}
