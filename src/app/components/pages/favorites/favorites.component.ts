import { Component, OnInit } from '@angular/core';
import { CharacterResults } from 'src/app/core/characters';
import { FavoritesService } from 'src/app/services/favorites.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  //Variables
  favorites: CharacterResults[] = [];

  constructor(private favoritesService: FavoritesService) { }

  ngOnInit(): void {
    let ids = (localStorage.getItem('fav' || "")?.split(",").filter(Boolean))!.toString();
    this.favoritesService.getFavorites(ids)
      .subscribe((favorites: CharacterResults[]) => {
        this.favorites = favorites;
      });
  }

  isFavorite(id: number){
    let convertId = id.toString();
    return this.favoritesService.isFavorite(convertId);
  }

  deleteFavorite(id: number){
    let convertId = id.toString();
    this.favoritesService.addOrDeleteFavorite(convertId);
    this.favorites = this.favorites.filter(elem => elem.id !== id);
  }
}
