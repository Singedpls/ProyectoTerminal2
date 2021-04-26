import { DashboardComponent } from './components/home/dashboard/dashboard.component';
import { ChartsComponent } from './components/charts/charts.component';
import { TechnicianService } from './services/authguards/roles/technician.service';
import { SuperadminService } from './services/authguards/roles/superadmin.service';
import { RegisterComponent } from './components/auth/register/register.component';
import { ClientChartDataComponent } from './components/charts/client-chart-data/client-chart-data.component';
import { TechnicianDataComponent } from './components/charts/technician-data/technician-data.component';
import { PieChartComponent } from './components/charts/pie-chart/pie-chart.component';
import { VehicleFormComponent } from './components/forms/vehicle-form/vehicle-form.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/auth/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientFormComponent } from './components/forms/client-form/client-form.component';
import { AuthenticatorService } from './services/authguards/authenticator/authenticator.service';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full' },

  {path: 'login', component:LoginComponent},
  {path: 'register', component:RegisterComponent,canActivate:[SuperadminService]},

  //home
  {path: 'home', component:HomeComponent,canActivate:[AuthenticatorService,TechnicianService]},

  // DASHBOARD ETC
  // {path:'dashboard',component:DashboardComponent},
  
  // FORMS ROUTES
  {path: 'client-form',component:ClientFormComponent,canActivate:[SuperadminService]},                                    
  {path: 'vehicle-data-form',component:VehicleFormComponent,canActivate:[TechnicianService]},

  // CHARTS
  {path: 'chart',component:ChartsComponent,},
  {path: 'technician-chart',component:TechnicianDataComponent,canActivate:[TechnicianService]},
  {path: 'client-chart',component:ClientChartDataComponent,canActivate:[SuperadminService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
