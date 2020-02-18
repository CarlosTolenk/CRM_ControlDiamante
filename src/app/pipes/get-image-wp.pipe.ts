import {Pipe, PipeTransform} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {LecEventsService} from '../services/lec-post.service';

@Pipe({
  name: 'getImageWP'
})
export class GetImageWPPipe implements PipeTransform {

  constructor(private lecEventsService: LecEventsService) {
  }

  transform(id: number): Observable<any> {
    return this.lecEventsService.getImageById(id).pipe(
      map((image: any) => {
        return image.guid.rendered;
      })
    );
  }

}
