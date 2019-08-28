import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HolderComponent } from './holder/holder.component';
import { ProfileComponent } from './profile/profile.component';
import {FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlobComponent } from './blob/blob.component';

@NgModule({
  declarations: [
    AppComponent,
    HolderComponent,
    ProfileComponent,
  
    HomeComponent,
  
    BlobComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'profile' ,component: ProfileComponent},
      {path: 'home', component:HomeComponent}
    
      

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
