import { Injectable } from '@angular/core';
import { Pokemon, PokemonSprites, PokemonResource, PokemonStats } from './pokemon';
import { PokemonTextEntries, PokemonSpecies } from './pokemon-species';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService {

  private pokemonsUrl = 'https://pokeapi.co/api/v2/pokemon/';
  private pokemonOffset = '?offset=';
  private pokemonLimit = '&limit=';
  private pokemonPageLimit = 66;
  private pokemonDesc = 'https://pokeapi.co/api/v2/pokemon-species/';


  constructor(private http: HttpClient) { }

  getPokemons(pageNumber: number) {
    return this.http.get<Pokemon>(this.pokemonsUrl+this.pokemonOffset+((pageNumber-1)*this.pokemonPageLimit)+this.pokemonLimit+this.pokemonPageLimit);
  }

  getPokemonInfo(name: string) {
    return this.http.get<PokemonResource>(this.pokemonsUrl+name);
  }
  
  getPokemonStats(name: string) {
    return this.http.get<PokemonStats>(this.pokemonsUrl+name);
  }

  getPokemonDesc(name: string) {
    return this.http.get<PokemonSpecies>(this.pokemonDesc+name);
  }
  
}
