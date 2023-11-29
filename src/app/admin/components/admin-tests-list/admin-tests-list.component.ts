import { Component, inject } from '@angular/core';
import { ITest } from 'src/interfaces/ITest';
import { AdminTestsService } from '../../services/admin-tests.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-tests-list',
  templateUrl: './admin-tests-list.component.html',
  styleUrls: ['./admin-tests-list.component.css']
})
export class AdminTestsListComponent {
  public tests: ITest[] = [];

  private title = 'Tests';

  private adminTestsService: AdminTestsService = inject(AdminTestsService);
  private router: Router = inject(Router);

  constructor() { }

  ngOnInit() {
    this.getTests();
  }

  getTests() {
    this.adminTestsService.getTests()
      .subscribe({
        next: tests => {
          this.tests = tests;
        },
        error: err => alert('Ocurrió un error al obtener los tests')
      });
  }

  getAdminService() {
    return this.adminTestsService;
  }

  getTitle() {
    return this.title;
  }

  getRouter() {
    return this.router;
  }
}
