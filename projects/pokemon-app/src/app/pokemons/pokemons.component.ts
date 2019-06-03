import { Component, OnInit } from '@angular/core';
import { PokemonResult, Pokemon, PokemonSprites, PokemonResource } from '../pokemon';
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
  pokemonDetails: PokemonResource;

  constructor(private pokemonService: PokemonServiceService) { }

  ngOnInit() {
    this.getPokemons();
    this.getPokemonDetails();
  }

  getPokemons() {
    return this.pokemonService.getPokemons()
    .subscribe(pokemons => this.pokemons = pokemons.results);
    //.subscribe(pokemons => console.log(pokemons));
  }

  getPokemonDetails() {
    //return this.pokemonService.getPokemonDetails()
    //.subscribe(pokemonDetails => this.pokemonDetails = pokemonDetails.);
  }
}
