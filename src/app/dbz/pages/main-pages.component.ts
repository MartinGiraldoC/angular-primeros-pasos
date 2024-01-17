import { Component } from '@angular/core';
import { Person } from '../../../../../01-typescript-intro/src/topics/08-classes';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interfaces';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-pages.component.html'
})

export class MainPageComponent {
  constructor ( private dbzService: DbzService){}

  get characters(): Character[]{
    return [...this.dbzService.characters];
  }
  onDeleteCharacter (id: string):void{
    this.dbzService.deleteCharacterById( id );
  }
  onNewCharacter(character: Character): void{
    this.dbzService.addCharacter(character);
  }
}
