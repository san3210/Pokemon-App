import { Component, OnInit, Input } from '@angular/core';
import { Pokemon, PokemonType, PokemonStats, PokemonTypes, PokemonMoves, PokemonSprites, PokemonAbilities } from '../pokemon';
import { PokemonServiceService } from '../pokemon-service.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-pokemon-information',
  templateUrl: './pokemon-information.component.html',
  styleUrls: ['./pokemon-information.component.css']
})
export class PokemonInformationComponent implements OnInit {
  pokemonStat: PokemonStats[];
  pokemonBaseStats: number;
  pokemonType: PokemonTypes[];
  pokemonHeight: number;
  pokemonWeight: number;
  pokemonMove: PokemonMoves[];
  pokemonImgName: PokemonSprites;
  pokemonName: string;
  pokemonAbility: PokemonAbilities[];

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

      this.pokemonService.getPokemonStats(this.pokeName)
      .subscribe(pokeStats => this.pokemonBaseStats = pokeStats.base_stat);

      this.pokemonService.getPokemonInfo(this.pokeName)
      .subscribe(pokeType => this.pokemonType = pokeType.types);

      this.pokemonService.getPokemonInfo(this.pokeName)
      .subscribe(pokeHeight => this.pokemonHeight = pokeHeight.height);

      this.pokemonService.getPokemonInfo(this.pokeName)
      .subscribe(pokeWeight => this.pokemonWeight = pokeWeight.weight);

      this.pokemonService.getPokemonInfo(this.pokeName)
      .subscribe(pokeMove => this.pokemonMove = pokeMove.moves);

      this.pokemonService.getPokemonInfo(this.pokeName)
      .subscribe(pokeImg => this.pokemonImgName = pokeImg.sprites);

      this.pokemonService.getPokemonInfo(this.pokeName)
      .subscribe(pokeName => this.pokemonName = pokeName.name);

      this.pokemonService.getPokemonInfo(this.pokeName)
      .subscribe(pokeAbility => this.pokemonAbility = pokeAbility.abilities);
    }

  }

}
