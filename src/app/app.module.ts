import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
//ComponentModules
//routing
import { AppRouting } from './app.routing';
//services
@NgModule({
  imports:      [
    BrowserModule ,
    AppRouting
                ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers: [  ]
})
export class AppModule { }
