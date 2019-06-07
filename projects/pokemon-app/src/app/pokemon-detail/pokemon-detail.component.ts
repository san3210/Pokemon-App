import { Component, OnInit, Input } from '@angular/core';
import { PokemonSprites, PokemonResource } from '../pokemon';
import { PokemonServiceService } from '../pokemon-service.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {
pokemonImgName: PokemonSprites;
pokemonInfo: PokemonResource;

@Input('pokemonName') pokeName: string;

  constructor(private pokemonService: PokemonServiceService) { }

  ngOnInit() {
    if(this.pokeName) {
      this.pokemonService.getPokemonName(this.pokeName)
    .subscribe(pokeImg => this.pokemonImgName = pokeImg.sprites);
    }
  }


}
