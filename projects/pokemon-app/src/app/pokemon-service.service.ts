import { Injectable } from '@angular/core';
import { Pokemon, PokemonSprites, PokemonResource, PokemonStats } from './pokemon';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService {

  private pokemonsUrl = 'https://pokeapi.co/api/v2/pokemon/';
  private pokemonOffset = '?offset=0';
  private pokemonLimit = '&limit=60';

  constructor(private http: HttpClient) { }

  getPokemons() {
    return this.http.get<Pokemon>(this.pokemonsUrl+this.pokemonOffset+this.pokemonLimit);
  }

  getPokemonInfo(name: string) {
    return this.http.get<PokemonResource>(this.pokemonsUrl+name);
  }
  
  getPokemonStats(name: string) {
    return this.http.get<PokemonStats>(this.pokemonsUrl+name);
  }

}
