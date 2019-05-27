import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { ContactComponent } from './contact/contact.component';



import { FormsModule } from '@angular/forms';
import { ConatctService } from './contact/contact.service';


@NgModule({
  declarations: [
    AppComponent,
    
    ContactComponent,
    
   
        
  ],
  imports: [
    TooltipModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    // for two way Binding
    FormsModule
  ],
  providers: [ConatctService],
  bootstrap: [AppComponent]
})
export class AppModule { }
