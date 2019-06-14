import { Component, OnInit } from '@angular/core';
import { PokemonNameUrl, Pokemon, PokemonSprites, PokemonResource } from '../pokemon';
import { PokemonServiceService } from '../pokemon-service.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {

  pokemons: PokemonNameUrl[];
  pokemonCount: number;
  pageCounter: number[] = new Array();

  constructor(
    private pokemonService: PokemonServiceService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.getPokemons();
    
  }

  getPokemons() :void {
    this.route.params.subscribe(parameter => {
      this.pokemonService.getPokemons(parameter.iCtr)
      .subscribe(pokemons => {
        this.pokemons = pokemons.results
        this.pokemonCount = pokemons.count
        this.pageCounter=[];
          for(var iCtr=1;iCtr<((this.pokemonCount/66)+1);iCtr++) {
              this.pageCounter.push(iCtr);
          }
      });
    });
    
  }
  
}
