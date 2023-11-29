import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminTestsListComponent } from './components/admin-tests-list/admin-tests-list.component';
import { AdminTestsFormComponent } from './components/admin-tests-form/admin-tests-form.component';
import { AdminLayoutPageComponent } from './pages/admin-layout-page/admin-layout-page.component';
import { AdminTestsEditFormComponent } from './components/admin-tests-edit-form/admin-tests-edit-form.component';
import { MainLayoutPageComponent } from '../shared/pages/main-layout-page/main-layout-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'tests', component: AdminTestsListComponent, pathMatch: 'full' },
      { path: 'form', component: AdminTestsFormComponent, pathMatch: 'full' },
      { path: 'form/edit/:id', component: AdminTestsEditFormComponent, pathMatch: 'full' },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'home', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
