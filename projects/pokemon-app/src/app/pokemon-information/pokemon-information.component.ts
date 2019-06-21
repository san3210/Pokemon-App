import { Component, OnInit, Input } from '@angular/core';
import { Pokemon, PokemonStats, PokemonTypes, PokemonMoves, PokemonSprites, PokemonAbilities } from '../pokemon';
import { PokemonSpecies, PokemonTextEntries, PokemonNameUrl } from '../pokemon-species';
import { PokemonServiceService } from '../pokemon-service.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-pokemon-information',
  templateUrl: './pokemon-information.component.html',
  styleUrls: ['./pokemon-information.component.css']
})
export class PokemonInformationComponent implements OnInit {
  pokemonStatDesc: PokemonStats[];
  pokemonBaseStats: number;
  pokemonType: PokemonTypes[];
  pokemonHeight: number;
  pokemonWeight: number;
  pokemonMove: PokemonMoves[];
  pokemonImgName: PokemonSprites;
  pokemonName: string;
  pokemonAbility: PokemonAbilities[];
  pokemonIdNumber: number;
  pokemonDescription: PokemonTextEntries[];
  pokemonIsDefault: boolean;
  pokemonSpeciesName: PokemonNameUrl;

  pokeName: string;

  constructor(
    private pokemonService: PokemonServiceService,
    private route: ActivatedRoute) { }

  ngOnInit() {

    this.pokeName = this.route.snapshot.paramMap.get('name');

    if(this.pokeName) {
      
      this.pokemonService.getPokemonInfo(this.pokeName)
      .subscribe(pokeInfo => {
        this.pokemonName = pokeInfo.name
        this.pokemonImgName = pokeInfo.sprites
        this.pokemonHeight = pokeInfo.height
        this.pokemonWeight = pokeInfo.weight
        this.pokemonType = pokeInfo.types
        this.pokemonMove = pokeInfo.moves
        this.pokemonAbility = pokeInfo.abilities
        this.pokemonIdNumber = pokeInfo.id
        this.pokemonStatDesc = pokeInfo.stats
        this.pokemonIsDefault = pokeInfo.is_default
        this.pokemonSpeciesName = pokeInfo.species
        
          if(this.pokemonIsDefault==true) {
            this.pokemonService.getPokemonDesc(this.pokemonSpeciesName.name)
            .subscribe(pokeDesc => this.pokemonDescription = pokeDesc.flavor_text_entries);   
          }
      });

      this.pokemonService.getPokemonStats(this.pokeName)
      .subscribe(pokeStats => this.pokemonBaseStats = pokeStats.base_stat);
      
    }
  }
}
