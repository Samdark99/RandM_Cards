import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Characters, CharacterResults } from 'src/app/core/characters';
import { LocationResults } from 'src/app/core/locations';
import { CharactersService } from 'src/app/services/characters.service';
import { LocationsService } from 'src/app/services/locations.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  //Variables
  characters!: Characters;
  totalRecords!: number;
  totalPages!: number;
  next!: any;
  prev!: any;
  //records: CharacterResults[] = [];


  constructor(private charactersService: CharactersService,
              private locationsServices: LocationsService,
              private router: Router) { }
  
  ngOnInit(): void {
    this.startOrFinal(1);
  }

  startOrFinal(page: number){
    this.charactersService.getFirstFinalPage(page)
      .subscribe((charecters: Characters) => {
        this.characters = charecters;
        this.totalRecords = charecters.info.count;
        this.totalPages = charecters.info.pages;
        this.next = charecters.info.next;
        this.prev = charecters.info.prev;
        //this.records = charecters.results ? charecters.results:[];
      });
  }

  nextPrevCharacters(urlCharacters: string){
    this.charactersService.getNextPrevPage(urlCharacters)
      .subscribe((characters: Characters) => {
        this.characters = characters;
        this.totalRecords = characters.info.count;
        this.totalPages = characters.info.pages;
        this.next = characters.info.next;
        this.prev = characters.info.prev;
        //this.records = this.characters.results ? characters.results:[];
      });
  }

  //Add parameters

  //Pagination
  initialRange(): number{
    if(this.prev === null){
      return 1;
    } else if(this.next === null){
      let records = this.totalRecords;
      do{
        records--;
      } while(records % this.characters.results.length != 0);
      return records + 1;
    } else{
      return this.characters.results[this.characters.results.length-1].id - this.characters.results.length + 1;
    }
  }

  finalRange(): number{
    if(this.next === null){
      return this.totalRecords;
    } else{
      return this.characters.results[this.characters.results.length-1].id;
    }
  }

  isOnTheFirstPage(): boolean{
    return this.prev === null ? true : false;
  }

  isOnTheFinalPage(): boolean{
    return this.next === null ? true : false;
  }
}
