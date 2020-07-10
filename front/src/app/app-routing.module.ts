import { NoteComponent } from './note/note.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewStatComponent } from './new-stat/new-stat.component';
import { PlaygroundComponent } from './playground/playground.component';
import { AuthComponent } from './auth/auth.component';




const routes: Routes = [
  
  {path: 'matrice',
      component: HomeComponent,
      children: [
       {path: 'new',  component: NewStatComponent},
       {path: 'home', component: PlaygroundComponent},
      ]
    },
  {path: 'note',  component: NoteComponent},
  {path: 'auth',  component: AuthComponent},
  {path : '', component: PlaygroundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
