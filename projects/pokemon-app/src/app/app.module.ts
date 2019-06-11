import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { FormsModule } from '@angular/forms';
import { PokemonServiceService } from './pokemon-service.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
// import { PokemonDashboardComponent } from './pokemon-dashboard/pokemon-dashboard.component';
import { PokemonInformationComponent } from './pokemon-information/pokemon-information.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonsComponent,
    PokemonDetailComponent,
    // PokemonDashboardComponent,
    PokemonInformationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [PokemonServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
