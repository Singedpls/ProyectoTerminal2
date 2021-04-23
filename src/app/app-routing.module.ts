import { ClientChartDataComponent } from './components/charts/client-chart-data/client-chart-data.component';
import { TechnicianDataComponent } from './components/charts/technician-data/technician-data.component';
import { PieChartComponent } from './components/charts/pie-chart/pie-chart.component';
import { VehicleFormComponent } from './components/forms/vehicle-form/vehicle-form.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/auth/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientFormComponent } from './components/forms/client-form/client-form.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full' },
  {path: 'login', component:LoginComponent},
  {path: 'home', component:HomeComponent},

  // FORMS ROUTES
  {path: 'client-form',component:ClientFormComponent},
  {path: 'vehicle-data-form',component:VehicleFormComponent},

  // CHARTS
  {path: 'chart',component:PieChartComponent},
  {path: 'technician-chart',component:TechnicianDataComponent},
  {path: 'client-chart',component:ClientChartDataComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
