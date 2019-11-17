import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NationalDexComponent } from './national-dex/national-dex.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxNavbarModule} from  'ngx-bootstrap-navbar';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { BackButtonDirective } from './back-button.directive'

@NgModule({
  declarations: [
    AppComponent,
    NationalDexComponent,
    PokemonComponent,
    BackButtonDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxNavbarModule,
    PaginationModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [NgbModule]
})
export class AppModule {
}
