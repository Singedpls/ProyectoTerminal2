import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ClientFormComponent } from './components/forms/client-form/client-form.component'
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { VehicleFormComponent } from './components/forms/vehicle-form/vehicle-form.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { PieChartComponent } from './components/charts/pie-chart/pie-chart.component';

import { HighchartsChartModule } from 'highcharts-angular';
// import { ChartModule } from 'angular-highcharts';
import { TechnicianDataComponent } from './components/charts/technician-data/technician-data.component';
import { ClientChartDataComponent } from './components/charts/client-chart-data/client-chart-data.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ChartsComponent } from './components/charts/charts.component';
import { DashboardComponent } from './components/home/dashboard/dashboard.component';
import { SharedComponent } from './components/shared/shared.component';
import { TopNavbarComponent } from './components/shared/top-navbar/top-navbar.component';
import { MainsideNavbarComponent } from './components/shared/mainside-navbar/mainside-navbar.component';
import { FootbarComponent } from './components/shared/footbar/footbar.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from "ngx-spinner";
import { VehicledepartureComponent } from './component/forms/departure/vehicledeparture/vehicledeparture.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ClientFormComponent,
    VehicleFormComponent,
    PieChartComponent,
    TechnicianDataComponent,
    ClientChartDataComponent,
    RegisterComponent,
    ChartsComponent,
    DashboardComponent,
    SharedComponent,
    TopNavbarComponent,
    MainsideNavbarComponent,
    FootbarComponent,
    VehicledepartureComponent,
 
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule ,
    NgMultiSelectDropDownModule.forRoot(),
    HighchartsChartModule,
    // ChartModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      countDuplicates:true,
      progressBar:true,
      extendedTimeOut:1000,
      closeButton:true,
    }), // ToastrModule added
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
