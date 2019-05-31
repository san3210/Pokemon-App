import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { FormsModule } from '@angular/forms';
import { PokemonServiceService } from './pokemon-service.service';
//import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PokemonsComponent,
    PokemonDetailComponent
 //   HttpClientModule
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [PokemonServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
