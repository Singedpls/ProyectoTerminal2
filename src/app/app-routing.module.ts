import { VehicleFormComponent } from './components/forms/vehicle-form/vehicle-form.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/auth/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientFormComponent } from './components/forms/client-form/client-form.component';

const routes: Routes = [
  // {path:'',redirectTo:'login',pathMatch:'full' },
  {path: 'login', component:LoginComponent},
  {path: 'home', component:HomeComponent},

  // FORMS ROUTES
  {path: 'client-form',component:ClientFormComponent},
  {path: 'vehicle-data-form',component:VehicleFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
