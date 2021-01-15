import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrl } from '../constants/url';
import { CharacterResults } from '../core/characters';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  //Variables
  characters!: CharacterResults[];

  constructor(private http: HttpClient) { }

  getFavorites(ids: string){
    return this.http.get<any>(`${apiUrl}/character/${ids}`);
  }

  isFavorite(id: string): boolean{
    if(localStorage.getItem('fav')){
      let arrFav: string[] = (localStorage.getItem('fav') || "").split(",").filter(Boolean);
      if(arrFav.includes(id)){
        return true;
      }
    }
    return false;
  }

  addOrDeleteFavorite(id: string){
    if(localStorage.getItem('fav')){
      let arrFav: string[] = (localStorage.getItem('fav') || "").split(",").filter(Boolean);
      if(arrFav.includes(id)){
        let deleteId = arrFav.indexOf(id);
        arrFav.splice(deleteId, 1);
        localStorage.setItem('fav', arrFav.join(","));
        return;
      }
      arrFav.push(id);
      localStorage.setItem('fav', arrFav.join(","));
    } else{
      let arrFav = [];
      arrFav.push(id);
      localStorage.setItem('fav', arrFav.join(","));
    }
  }
}
