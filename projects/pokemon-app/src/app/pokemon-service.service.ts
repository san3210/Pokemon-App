import { Injectable } from '@angular/core';
//import { HttpClientModule } from '@angular/common/http';
import { PokemonResult, Pokemon, PokemonSprites, PokemonResource } from './pokemon';
//import { POKEMONS } from './pokemon-list';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService {

  private pokemonsUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) { }

  getPokemons() {
    //return of(POKEMONS);
    return this.http.get<Pokemon>(this.pokemonsUrl);
  }

  getPokemonDetails() {
    //return this.http.get<PokemonResource>(this.PokemonResource);
  }
}
