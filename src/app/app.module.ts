import { HttpClientModule } from '@angular/common/http';
import { EnderecoService } from './endereco.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnderecoComponent } from './endereco/endereco.component';



@NgModule({
  declarations: [
    AppComponent,
    EnderecoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ EnderecoService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
