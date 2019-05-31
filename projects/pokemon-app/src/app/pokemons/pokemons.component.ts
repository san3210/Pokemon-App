import { Component, OnInit } from '@angular/core';
import { PokemonResult } from '../pokemon';
//import { POKEMONS } from '../pokemon-list';
import { PokemonServiceService } from '../pokemon-service.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {

  //pokemons = POKEMONS;
  pokemons: PokemonResult[];

  constructor(private pokemonService: PokemonServiceService) { }

  ngOnInit() {
    this.getPokemons();
  }

  getPokemons() {
    return this.pokemonService.getPokemons()
    //.subscribe(pokemons => this.pokemons = pokemons.results);
    .subscribe(pokemons => console.log(pokemons));
  }

}
