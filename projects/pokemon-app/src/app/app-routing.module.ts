import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PokemonsComponent }      from './pokemons/pokemons.component';
import { PokemonInformationComponent }   from './pokemon-information/pokemon-information.component';
//import { PokemonDetailComponent }  from './pokemon-detail/pokemon-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'pokemon-information/:name', component: PokemonInformationComponent },
  { path: 'dashboard', component: PokemonsComponent }
  // { path: 'pokemon-detail', component: PokemonsComponent }
];

@NgModule({
//  declarations: [],
  imports: [
//    CommonModule
      RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
