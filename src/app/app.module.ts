import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ComboBoxComponent } from './shared/combo-box/combo-box.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormularioComponent } from './shared/formulario/formulario.component';

import { CuentaPageComponent } from './pages/cuenta-page/cuenta-page.component';

@NgModule({
  declarations: [AppComponent, HomePageComponent, ComboBoxComponent, FormularioComponent, CuentaPageComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule,FormsModule,
    ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
