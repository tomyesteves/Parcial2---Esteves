import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AdminTestsService } from 'src/app/admin/services/admin-tests.service';
import { ITest } from 'src/interfaces/ITest';

@Component({
  selector: 'app-admin-tests-list-item',
  templateUrl: './admin-tests-list-item.component.html',
  styleUrls: ['./admin-tests-list-item.component.css']
})
export class AdminTestsListItemComponent {
  @Input()
  public test!: ITest

  private adminTestsService: AdminTestsService = inject(AdminTestsService);
  private router: Router = inject(Router);
  constructor() { }

  edit(): void {
    if (this.test) {
      this.router.navigate([`/admin/form/edit/${this.test.id}`])
    }
  }
}
