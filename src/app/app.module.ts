import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NvD3Module } from 'ng2-nvd3';

// d3 and nvd3 should be included somewhere
import 'd3';
import 'nvd3';

// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StackChartComponent } from './stack-chart/stack-chart.component'

@NgModule({
  declarations: [
    AppComponent,
    StackChartComponent
  ],
  imports: [
    BrowserModule,
    NvD3Module,
    // BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
