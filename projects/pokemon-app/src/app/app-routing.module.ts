import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PokemonsComponent }      from './pokemons/pokemons.component';
import { PokemonInformationComponent }   from './pokemon-information/pokemon-information.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'pokemon/:name', component: PokemonInformationComponent },
  { path: 'dashboard', component: PokemonsComponent }
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
