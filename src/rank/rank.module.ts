import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// guards
import { AuthGuard } from '../auth/shared/guards/auth.guard';

export const ROUTES: Routes = [
  { path: 'ranking', canActivate: [AuthGuard], loadChildren: './ranking/ranking.module#RankingModule' },
  // { path: 'meals', canActivate: [AuthGuard], loadChildren: './meals/meals.module#MealsModule' }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  declarations: [],
  providers: []
})
export class RankModule {}
