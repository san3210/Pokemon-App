import { Component, OnInit } from '@angular/core';
import { PokemonNameUrl, Pokemon, PokemonSprites, PokemonResource } from '../pokemon';
import { PokemonServiceService } from '../pokemon-service.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {

  pokemons: PokemonNameUrl[];
  counter = Array;


  constructor(private pokemonService: PokemonServiceService) { }

  ngOnInit() {
    this.getPokemons();
  }

  getPokemons() {
    this.pokemonService.getPokemons()
    .subscribe(pokemons => this.pokemons = pokemons.results);
  }
  

  numberReturn(length){
    return new Array(length);
  }
}
