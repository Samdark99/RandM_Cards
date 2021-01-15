import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterResults } from 'src/app/core/characters';
import { EpisodeResults } from 'src/app/core/episodes';
import { LocationResults } from 'src/app/core/locations';
import { CharactersService } from 'src/app/services/characters.service';
import { EpisodesService } from 'src/app/services/episodes.service';
import { FavoritesService } from 'src/app/services/favorites.service';
import { LocationsService } from 'src/app/services/locations.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  //Variables
  character!: CharacterResults;
  charactersInEpisode!: number;
  fav: boolean = false;

  constructor(private charactersService: CharactersService,
              private locationsService: LocationsService,
              private episodesService: EpisodesService,
              private favoritesService: FavoritesService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.charactersService.getOneCharacter(id)
        .subscribe((character: CharacterResults) => {
          this.character = character;
          this.episodesService.getOneEpisode(character.episode[0])
            .subscribe((episode: EpisodeResults) => {
              this.character.episode_data = episode;
              this.charactersInEpisode = episode.characters.length;
            });
          this.locationsService.getOneLocation(character.origin.url)
            .subscribe((location: LocationResults) => {
              this.character.location_data = location;
            });
        });
    }
  }

  isFavorite(){
    let convertId = this.character.id.toString();
    return this.favoritesService.isFavorite(convertId);
  }

  addOrDeleteFavorite(id: number){
    let convertId = id.toString();
    this.favoritesService.addOrDeleteFavorite(convertId);
  }
}
