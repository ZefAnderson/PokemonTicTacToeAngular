import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path: '', redirectTo: '/search', pathMatch: 'full'},
  {path: 'search/:player', component: SearchComponent, pathMatch: 'full'},
  {path: 'error', component: ErrorComponent},
  {path: '**', redirectTo: '/error', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
