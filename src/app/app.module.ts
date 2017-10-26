import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgSemanticModule } from "ng-semantic";
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NguiPopupModule } from '@ngui/popup';
import { Ng2TableModule } from 'ng2-table/ng2-table';


import { AppComponent } from './app.component';
import { DformComponent } from './dform/dform.component';

@NgModule({
  declarations: [
    AppComponent,
    DformComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    NguiPopupModule,
    Ng2TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
