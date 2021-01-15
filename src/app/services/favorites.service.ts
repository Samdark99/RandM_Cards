import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  constructor() { }

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
