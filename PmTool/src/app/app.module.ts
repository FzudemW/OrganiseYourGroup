import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { appRouting, routingComponents } from './app.routing';


import { AppComponent } from './app.component';
import { ProductBacklogComponent } from './navigationBar/product-backlog/product-backlog.component';
import { ScrumBoardComponent } from './navigationBar/scrum-board/scrum-board.component';
import { PlanningPokerComponent } from './navigationBar/planning-poker/planning-poker.component';
import { BurnDownChartComponent } from './navigationBar/burn-down-chart/burn-down-chart.component';
import { RoadmapComponent } from './navigationBar/roadmap/roadmap.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductBacklogComponent,
    ScrumBoardComponent,
    PlanningPokerComponent,
    BurnDownChartComponent,
    RoadmapComponent
  ],
  imports: [
    BrowserModule,
    appRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
