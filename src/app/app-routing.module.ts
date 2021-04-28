import { PagenotfoundComponent } from './components/shared/pagenotfound/pagenotfound.component';
import { TechnicianAverageGasolineComponent } from './components/charts/technician-average-gasoline/technician-average-gasoline.component';
import { ClientReviewComponent } from './components/forms/client-form/client-review/client-review/client-review.component';
import { TechnicianAverageReviewChartComponent } from './components/charts/technician-average-review-chart/technician-average-review-chart.component';
import { Techniciandata2comparisonComponent } from './components/charts/techniciandata2comparison/techniciandata2comparison.component';
import { VehicledepartureComponent } from './component/forms/departure/vehicledeparture/vehicledeparture.component';
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
  {path: 'client-review-form',component:ClientReviewComponent,canActivate:[SuperadminService]}, 
  // DEPARTURE
  {path:'vehicle-departure-form',component:VehicledepartureComponent},
  // CHARTS
  // {path: 'chart',component:ChartsComponent,},
  {path: 'technician-chart',component:TechnicianDataComponent,canActivate:[TechnicianService]},
  {path: 'client-chart',component:ClientChartDataComponent,canActivate:[SuperadminService]},
  {path:'technician-delivery-analysis',component:Techniciandata2comparisonComponent},
  {path:'technician-average-rating-analysis',component:TechnicianAverageReviewChartComponent},
  {path:'technician-average-gasoline-used',component:TechnicianAverageGasolineComponent},


  {path:'**',component:PagenotfoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
