import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ROUTES } from './routes.config';
import { AppComponent } from './app.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: ROUTES.image,
    pathMatch: 'full'
  },
  {
    path: ROUTES.image,
    component: AppComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }
