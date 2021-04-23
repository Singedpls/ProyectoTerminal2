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
import { ChartModule } from 'angular-highcharts';
import { TechnicianDataComponent } from './components/charts/technician-data/technician-data.component';
import { ClientChartDataComponent } from './components/charts/client-chart-data/client-chart-data.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ClientFormComponent,
    VehicleFormComponent,
    PieChartComponent,
    TechnicianDataComponent,
    ClientChartDataComponent
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
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
