import {Routes, RouterModule} from '@angular/router';

import {ProductBacklogComponent} from './navigationBar/product-backlog/product-backlog.component';
import {ScrumBoardComponent} from './navigationBar/scrum-board/scrum-board.component';
import {PlanningPokerComponent} from './navigationBar/planning-poker/planning-poker.component';
import {BurnDownChartComponent} from './navigationBar/burn-down-chart/burn-down-chart.component';
import {RoadmapComponent} from './navigationBar/roadmap/roadmap.component';

// import {tasksRoutes, tasksRoutingComponents} from './tasks/tasks.routing';
// Voerst nicht wichtig

export const appRoutes: Routes = [
{path: 'product-backlog', component: ProductBacklogComponent},
{path: 'scrum-board', component: ScrumBoardComponent},
{path: 'planning-poker', component: PlanningPokerComponent},
{path: 'burn-down-chart', component: BurnDownChartComponent},
{path: 'roadmap', component: RoadmapComponent},
];
export const appRouting = RouterModule.forRoot(appRoutes);
export const routingComponents = [
  ProductBacklogComponent,
  ScrumBoardComponent,
  PlanningPokerComponent,
  BurnDownChartComponent,
  RoadmapComponent,
];
