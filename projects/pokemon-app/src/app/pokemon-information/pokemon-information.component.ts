import { Component, OnInit, Input } from '@angular/core';
import { PokemonResource, Pokemon, PokemonType, PokemonStats, PokemonTypes } from '../pokemon';
import { PokemonServiceService } from '../pokemon-service.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-pokemon-information',
  templateUrl: './pokemon-information.component.html',
  styleUrls: ['./pokemon-information.component.css']
})
export class PokemonInformationComponent implements OnInit {
  pokemonStat: PokemonStats[];
  pokemonType: PokemonTypes[];

  // @Input('pokemonName') pokeName: string;
  pokeName: string;

  constructor(
    private pokemonService: PokemonServiceService,
    private route: ActivatedRoute) { }

  ngOnInit() {

    this.pokeName = this.route.snapshot.paramMap.get('name');
    //params?

    console.log(this.pokeName);

    if(this.pokeName) {
      this.pokemonService.getPokemonInfo(this.pokeName)
      .subscribe(pokeStat => this.pokemonStat = pokeStat.stats);
    }
    if(this.pokeName) {
      this.pokemonService.getPokemonInfo(this.pokeName)
      .subscribe(pokeType => this.pokemonType = pokeType.types);
    }
  }

}
