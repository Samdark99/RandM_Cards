import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EpisodesService {

  constructor(private http: HttpClient) { }

  getOneEpisode(urlEpisode: string){
    return this.http.get<any>(`${urlEpisode}`);
  }
}
