import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrl } from '../constants/url';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient) { }

  getFirstFinalPage(page: number){
    return this.http.get<any>(`${apiUrl}/character/?page=${page}`);
  }

  getNextPrevPage(urlCharacters: string){
    return this.http.get<any>(`${urlCharacters}`);
  }
}
