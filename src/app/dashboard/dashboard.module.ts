import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { TopSectionComponent } from './componants/top-section/top-section.component';
import { SlidearComponent } from './componants/slidear/slidear.component';
import { CardsComponent } from './componants/home/cards/cards.component';
import { ListComponent } from './componants/home/list/list.component';
import { HomeComponent } from './componants/home/home.component';
import { GraphComponent } from './componants/home/graph/graph.component';
import { HourlysealsComponent } from './componants/home/hourlyseals/hourlyseals.component';


@NgModule({
  declarations: [
    DashboardComponent,
    TopSectionComponent,
    SlidearComponent,
    CardsComponent,
    ListComponent,
    HomeComponent,
    GraphComponent,
    HourlysealsComponent

  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,


  ],
  exports: [DashboardComponent]
})
export class DashboardModule { }
