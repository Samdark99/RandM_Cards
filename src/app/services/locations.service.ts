import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  constructor(private http: HttpClient) { }

  getOneLocation(urlLocation: string){
    return this.http.get<any>(`${urlLocation}`);
  }


}
