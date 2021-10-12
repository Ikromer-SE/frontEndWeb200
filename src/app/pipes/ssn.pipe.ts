import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'ssnMask' })
export class SsnMaskPipe implements PipeTransform {
  transform(value?: string | null): string {
    const lastFourSSN = value?.slice(-4);

    if (lastFourSSN && lastFourSSN.length >= 4) {
      return '***-**-' + value?.slice(-4)
    }
    else {
      return 'Invalid SSN';
    }
  }
}
