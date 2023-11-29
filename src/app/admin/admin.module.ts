import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminTestsListComponent } from './components/admin-tests-list/admin-tests-list.component';
import { AdminTestsFormComponent } from './components/admin-tests-form/admin-tests-form.component';
import { AdminTestsListItemComponent } from './components/admin-tests-list/admin-tests-list-item/admin-tests-list-item.component';
import { AdminLayoutPageComponent } from './pages/admin-layout-page/admin-layout-page.component';
import { SharedModule } from '../shared/shared.module';
import { AdminTestsEditFormComponent } from './components/admin-tests-edit-form/admin-tests-edit-form.component';


@NgModule({
  declarations: [
    AdminTestsListComponent,
    AdminTestsFormComponent,
    AdminTestsListItemComponent,
    AdminLayoutPageComponent,
    AdminTestsEditFormComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class AdminModule { }
