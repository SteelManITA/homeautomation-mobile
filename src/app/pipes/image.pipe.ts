import { Utils } from './../utils/core';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'image'
})
export class ImagePipe
  implements PipeTransform
{

  constructor(
  ) {
  }

  transform(image: string): Promise<string>
  {
    const path = 'assets/img/' + image + '.png';
    return Utils.imageExists(path).
      then((result) => {
        if (result) {
          return path;
        } else {
          return 'assets/img/placeholder-150.png';
        }
      });
  }
}
