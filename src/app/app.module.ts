import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from "@angular/material/divider";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";
import {
  BusyIndicatorModule,
  FacetModule,
  FormLabelModule,
  ObjectNumberModule,
  ObjectStatusModule,
  ShellbarModule,
  TextModule
} from "@fundamental-ngx/core";
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MatToolbarModule, MatDividerModule, MatFormFieldModule, MatIconModule, FormsModule, ShellbarModule,
    HttpClientModule, FacetModule, ObjectStatusModule, ObjectNumberModule, TextModule, FormLabelModule, BusyIndicatorModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
