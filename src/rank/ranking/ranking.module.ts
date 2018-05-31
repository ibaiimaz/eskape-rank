import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// components
import { RankingComponent } from './components/ranking.component';

export const ROUTES: Routes = [
  { path: '', component: RankingComponent },
  // { path: 'new', component: MealComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
  ],
  declarations: [
    RankingComponent
  ],
  providers: []
})
export class RankingModule {}
