import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiRequestService } from "./api-request.service";
import {map} from 'rxjs/operators';
@Injectable()
export class ImageUploadService {

  constructor(private apiRequest: ApiRequestService){}


  public uploadImage(image: File): Observable<string | any> {
    const formData = new FormData();

    formData.append('image', image);

    return this.apiRequest.post('image-upload', formData).pipe(map(((json: any) =>  json.imageUrl)));
  }
}
