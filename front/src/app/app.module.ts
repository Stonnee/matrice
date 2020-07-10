import { delService } from './service/del.service';
import { putService } from './service/put.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RadarComponent } from './playground/radar/radar.component';
import { StatsComponent } from './playground/stats/stats.component';
import { MeComponent } from './playground/me/me.component';
import { PlaygroundComponent } from './playground/playground.component';
import { FormsModule } from '@angular/forms';
import { NewStatComponent } from './new-stat/new-stat.component';
import { HttpClientModule } from '@angular/common/http';
import { NoteComponent } from './note/note.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from './service/auth.service'
import { postService } from './service/post.service';
import { getService } from './service/get.service';




@NgModule({
  declarations: [
    AppComponent,
    RadarComponent,
    StatsComponent,
    MeComponent,
    PlaygroundComponent,
    NewStatComponent,
    NoteComponent,
    AuthComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    putService,
    delService,
    postService,
    getService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
